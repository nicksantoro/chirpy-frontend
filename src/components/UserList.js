import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import UserDetail from './UserDetail'


class UserList extends Component {

  state = {
    data: []
  }

  async componentWillMount() {
    let rawJson = await fetch('http://localhost:5000/users', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    let dataJson = await rawJson.json();
    await this.setState({ data: dataJson })
  }

  renderData() {
    return this.state.data.map(user => {
      return <UserDetail key={user.id} user={user} />
    })
  }

  render() {
    console.log(this.state, "this.state")
    return (

      < ScrollView >


        {this.renderData()}

      </ScrollView >
    )
  }
}

export default UserList
