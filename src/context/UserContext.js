import React, { Component } from 'react';
import createTree from './../utils/createTreeFromArray'
import { DataSet } from './../mockData/DataSet'

export const UserContext = React.createContext();
const UserTree = createTree(DataSet)

// Then create a provider Component
class UserProvider extends Component {
  constructor(){
    super()
    
    this.state = {
      users: UserTree,
      app:'Representing data as a Tree'

    }
    this.updateValue = this.updateValue.bind(this)
  }
  
  updateValue(key, val) {
    this.setState({[key]: val});
 }

  render() {
    return (
      <UserContext.Provider value={{
        state: this.state,
        updateValue: this.updateValue
      }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider