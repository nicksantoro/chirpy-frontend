import React, { Component } from 'react'
import { View, Text } from 'react-native'

class ChallengeList extends Component {

  state = {
    data: []
  }

  async componentWillMount() {
    let rawJson = await fetch('http://localhost:5000/goals', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    let dataJson = await rawJson.json();
    await this.setState({ data: dataJson })
  }

  renderData() {
    return this.state.data.map(user => {
      return <Text key={user.id}>{user.goal}</Text>
    })
  }

  render() {
    console.log(this.state, "this.state")
    return (

      < View >

        <Text>ChallengeList</Text>
        {this.state.data ? this.renderData() : null}

      </View >
    )
  }
}

export default ChallengeList
