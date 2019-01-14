import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import UserList from './src/components/UserList'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Users" />
        <UserList />
        {/* <Text>Nick's App!</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App
