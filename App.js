import React from "react";
import { Provider } from "react-redux";
import * as firebase from "firebase";
import { StackApp } from "./router";
import { Font } from "expo";

import store from "./store";

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
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }
  render() {
    return (
      <Provider store={store}>
        <StackApp/>
      </Provider>
    );
  }
}
