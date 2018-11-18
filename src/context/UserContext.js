import React, { Component } from "react";
import createTree from "./../utils/createTreeFromArray";
import { DataSet } from "./../mockData/DataSet";

export const UserContext = React.createContext();
export const UserTree = createTree(DataSet);

class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: UserTree,
      app: "An App that represents tree in a data table"
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(key, val) {
    this.setState({ [key]: val });
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          updateValue: this.updateValue
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
