import React, { Component } from 'react'
import { Row, Col, Table, Button, Glyphicon } from 'react-bootstrap'
import ContextHoc from './../utils/hoc/contextHoc'

const subStyle = {
    color: '#efefef',
    backgroundColor: '#323232'
}

class DataTable extends Component {
    constructor(props) {
      super(props)
      
      this.removeNodeFromTree = this.removeNodeFromTree.bind(this)
      this.toggleCollapseUser = this.toggleCollapseUser.bind(this)
    }

    removeNodeFromTree(index){
        const users = this.props.context.state.users
        const newUsers = users.filter(user => user.ID !== index)
        this.props.context.updateValue('users', newUsers);
    }
    
    toggleCollapseUser(userID){
        const users = this.props.context.state.users
        const newUsers = users
        newUsers.forEach(user => {
            if ( user.ID === userID ) {
                user.collapse = !user.collapse
            } 
        })
        this.props.context.updateValue('users', newUsers);
    }
    
    render() {
      return (
        <div className="person">
              <React.Fragment>
                <h1> { this.props.context.state.app } </h1>
                 <Row className="show-grid">
                  <Col xs={12} md={8}>
                    <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                          <th>User ID</th>
                          <th>Phone</th>
                          <th>City</th>
                          <th>Name</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                 {
                    this.props.context.state.users.map((user, index) => {
                        return (
                        <React.Fragment key= { index }>
                          <tbody>
                          <tr>
                          
                            <td> { user.ID } </td>
                            <td> { user.Phone } </td>
                            <td> { user.City } </td>
                            <td> { user.Name } </td>
                            <td> {
                              user.children.length  ? 
                              <Button bsStyle="link"
                                onClick={()=>  this.toggleCollapseUser(user.ID) }> 
                                Toggle Collapse {' '}
                                 { 
                                   user.collapse 
                                     ?  <Glyphicon glyph="chevron-up" /> 
                                     :  <Glyphicon glyph="chevron-down" /> 
                                     
                                  }
                                </Button>
                              : 
                                null
                            }
                            </td>
                            <td> 
                            <Button bsStyle="danger" bsSize="xsmall" 
                            onClick={()=>  this.removeNodeFromTree(user.ID) }>
                             Remove
                            </Button>
                            </td>
                          </tr>                        
                          </tbody>
                          {
                            user.collapse ?
                                user.children.map((u, i) => {
                                   return(
                                    <tbody key={i}>
                                        <tr>
                                            <td style={subStyle}> { u.ID } </td>
                                            <td style={subStyle}>  { u.Phone } </td>
                                            <td style={subStyle}> { u.City } </td>
                                            <td style={subStyle}> { u.Name } </td>
                                        </tr>
                                    </tbody>
                                   )
                                })
                                : null    
                          }
                          
                          </React.Fragment>  
                        );
                    })
                  }
                  </Table>
                  </Col>
                  </Row>
               
              </React.Fragment>
        </div>
      )
    }
}
 
 export default ContextHoc(DataTable)