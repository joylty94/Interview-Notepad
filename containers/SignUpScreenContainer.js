import React, { Component } from "react";
import { View, StatusBar, SafeAreaView, StyleSheet, ImageBackground, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard, Platform } from "react-native";

import EmailSignUpComponent from "../components/EmailSignUpComponent";

export default class SignUpScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    let header = null;
    return { header }
  }
  render() {
    const { ...rest } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true}/>
        <ImageBackground
          source={require("../images/note.png")}
          style={styles.infoContainer}
          >
          <EmailSignUpComponent {...rest}/>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

