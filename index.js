import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App'

// React to React-Native JS compiler
// register one component to the application
AppRegistry.registerComponent(appName, () => App);