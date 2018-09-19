import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux"
import { createStackNavigator } from "react-navigation"

import store from "./store"
import InitialScreenContainer from "./containers/InitialScreenContainer";
import LoginScreenContainer from "./containers/LoginScreenContainer";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StackApp/>
      </Provider>
    );
  }
}

const StackApp = createStackNavigator({
  InitialScreen: {
    screen: InitialScreenContainer,
  },
  LoginScreen: {
    screen: LoginScreenContainer
  }
})
