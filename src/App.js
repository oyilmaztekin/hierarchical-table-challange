import React, { Component } from 'react'
import UserProvider from './context/UserContext'
import DataTable from './components/DataTable'

class App extends Component {
  render() {
    return (
      <UserProvider>
          <DataTable />
      </UserProvider>
    );
  }
}


export default App;