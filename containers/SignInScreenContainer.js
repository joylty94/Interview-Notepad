import React, { Component } from "react";
import {
  View, StatusBar, SafeAreaView, StyleSheet, ImageBackground, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard, Platform
} from "react-native";

import LogoComponent from "../components/LogoComponent";
import EmailSignInComponent from "../components/EmailSignInComponent";

export default class SignInScreenContainer extends Component {
  render() {
    const { ...rest } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground
          source={require("../images/note.png")}
          style={styles.container}
        >
          <KeyboardAvoidingView
            behavior={Platform.select({ ios: "padding", android: null })}
            keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
            style={styles.container}
          >
            <TouchableWithoutFeedback style={styles.container}
              onPress={Keyboard.dismiss}>
              <View style={styles.logoContainer}>
                <View style={styles.logoContainer2}>
                  <LogoComponent />
                </View>
                <View style={styles.infoContainer}>
                  <EmailSignInComponent {...rest} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -200
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 235,
    padding: 20,
  }
});
