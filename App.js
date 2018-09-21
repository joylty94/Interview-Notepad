import React from "react";
import { Provider } from "react-redux";
import { createStackNavigator } from "react-navigation";
import * as firebase from "firebase";

import store from "./store";
import InitialScreenContainer from "./containers/InitialScreenContainer";
import LoginScreenContainer from "./containers/LoginScreenContainer";
import NoteScreenContainer from "./containers/NoteScreenContainer";

var config = {
  apiKey: "AIzaSyD4y6p-amG4Ao_Mf1eE65-hDPHZMVxCU5Y",
  authDomain: "interview-notepad.firebaseapp.com",
  databaseURL: "https://interview-notepad.firebaseio.com",
  projectId: "interview-notepad",
  storageBucket: "interview-notepad.appspot.com",
  messagingSenderId: "418843711159"
};
firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StackApp/>
      </Provider>
    );
  }
}

const StackLogin = createStackNavigator({
  InitialScreen: {
    screen: InitialScreenContainer,
  },
  LoginScreen: {
    screen: LoginScreenContainer
  },
})

const StackApp = createStackNavigator({
  StackLoginScreen: {
    screen: StackLogin,
    navigationOptions: {
      header: null
    }
  },
  TabScreen: {
    screen: NoteScreenContainer,
    navigationOptions: {
      header: null
    }
  }
})
