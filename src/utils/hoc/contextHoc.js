import React, { Component } from "react";
import { UserContext } from "./../../context/UserContext";

const ContextHoc = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <UserContext.Consumer>
          {context => {
            return <WrappedComponent {...this.props} context={context} />;
          }}
        </UserContext.Consumer>
      );
    }
  };
};

export default ContextHoc;
