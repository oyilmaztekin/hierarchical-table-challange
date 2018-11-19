import React, { Component } from "react"
import { Row, Col, Table, Button, Glyphicon } from "react-bootstrap"
import ContextHoc from "./../utils/hoc/contextHoc"

class DataTable extends Component {
  constructor(props) {
    super(props)

    this.removeNodeFromTree = this.removeNodeFromTree.bind(this)
    this.toggleCollapseUser = this.toggleCollapseUser.bind(this)
    this.childrenRecursivelyRenderer = this.childrenRecursivelyRenderer.bind(this)
  }

  removeNode(newUsers, index) {
    for (let ind in newUsers) {
      if (newUsers[ind].ID === index) {
        newUsers.splice(ind, 1)
        break
      } else if (newUsers[ind].collapse && newUsers[ind].children) {
        this.removeNode(newUsers[ind].children, index)
      }
    }
  }

  removeNodeFromTree(index) {
    const users = Object.assign(this.props.context.state.users)
    this.removeNode(users, index)
    this.props.context.updateValue("users", users)
  }

  toggleCollapseUser(user) {
    const users = Object.assign(this.props.context.state.users)
    user.collapse = !user.collapse
    const newUsers = Object.assign(users)
    this.props.context.updateValue("users", newUsers)
  }

  childrenRecursivelyRenderer(child, i) {
    return (
      <React.Fragment key={i}>
        <tbody>
          <tr>
            <td> {child.ID} </td>
            <td> {child.Phone} </td>
            <td> {child.City} </td>
            <td> {child.Name} </td>
            <td>
              {!!child.children.length && (
                <Button
                  bsStyle="link"
                  onClick={() => this.toggleCollapseUser(child)}
                >
                  Toggle Collapse{" "}
                  <Glyphicon glyph={`chevron-${child.collapse ? 'up' : 'down'}`} />
                </Button>
              )}
            </td>
            <td>
              <Button
                bsStyle="danger"
                bsSize="xsmall"
                onClick={() => this.removeNodeFromTree(child.ID)}
              >
                Remove
              </Button>
            </td>
          </tr>
        </tbody>
        {child.children && child.collapse && (
          child.children.map(this.childrenRecursivelyRenderer)
        )}
      </React.Fragment>
    )
  }

  render() {
    const newUsers = Object.assign(this.props.context.state.users);

    return (
      <div className="person">
        <React.Fragment>
          <h1> {this.props.context.state.app} </h1>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Name</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                {newUsers.map(this.childrenRecursivelyRenderer)}
              </Table>
            </Col>
          </Row>
        </React.Fragment>
      </div>
    )
  }
}

export default ContextHoc(DataTable)