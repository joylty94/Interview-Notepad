import React, { Component } from "react";
import { View, StatusBar, SafeAreaView, StyleSheet, ImageBackground, Platform } from "react-native";

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
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

