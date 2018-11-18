import React, { Component } from "react";
import { Row, Col, Table, Button, Glyphicon } from "react-bootstrap";
import ContextHoc from "./../utils/hoc/contextHoc";

const subStyle = {
  color: "#efefef",
  backgroundColor: "#323232"
};

class DataTable extends Component {
  constructor(props) {
    super(props)

    this.removeNodeFromTree = this.removeNodeFromTree.bind(this)
    this.toggleCollapseUser = this.toggleCollapseUser.bind(this)
    this.childrenRecursivelyRenderer = this.childrenRecursivelyRenderer.bind(this)
    debugger
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

  toggleCollapseUser(user, users) {
    user.collapse = !user.collapse;
    const newUsers = Object.assign(users)
    this.props.context.updateValue("users", newUsers)
  }

  childrenRecursivelyRenderer(child) {
    const newUsers = Object.assign(this.props.context.state.users);
    if (!child.collapse) return null
      return child.children.map((u, i) => {
        return (
          <React.Fragment key={i}>
            <tbody>
              <tr>
                <td> {u.ID} </td>
                <td> {u.Phone} </td>
                <td> {u.City} </td>
                <td> {u.Name} </td>
                <td>
                  {" "}
                  {!!u.children.length && (
                    <Button
                      bsStyle="link"
                      onClick={() => this.toggleCollapseUser(u, newUsers)}
                    >
                      Toggle Collapse{" "}
                      <Glyphicon glyph={`chevron-${u.collapse ? 'up' : 'down'}`} />
                    
                    </Button>
                  ) }
                </td>
                <td>
                  <Button
                    bsStyle="danger"
                    bsSize="xsmall"
                    onClick={() => this.removeNodeFromTree(u.ID)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            </tbody>
            {child.children &&
              this.childrenRecursivelyRenderer(child.children[i])}
          </React.Fragment>
        );
      });
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
                {newUsers.map((user, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tbody>
                        <tr>
                          <td> {user.ID} </td>
                          <td> {user.Phone} </td>
                          <td> {user.City} </td>
                          <td> {user.Name} </td>
                          <td>
                            {" "}
                            {user.children.length ? (
                              <Button
                                bsStyle="link"
                                onClick={() =>
                                  this.toggleCollapseUser(user, newUsers)
                                }
                              >
                                Toggle Collapse{" "}
                                {user.collapse ? (
                                  <Glyphicon glyph="chevron-up" />
                                ) : (
                                  <Glyphicon glyph="chevron-down" />
                                )}
                              </Button>
                            ) : null}
                          </td>
                          <td>
                            <Button
                              bsStyle="danger"
                              bsSize="xsmall"
                              onClick={() => this.removeNodeFromTree(user.ID)}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                      {this.childrenRecursivelyRenderer(user)}
                    </React.Fragment>
                  );
                })}
              </Table>
            </Col>
          </Row>
        </React.Fragment>
      </div>
    );
  }
}

export default ContextHoc(DataTable);
