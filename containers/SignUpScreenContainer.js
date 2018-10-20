import React, { Component } from "react";
import { View, StatusBar, SafeAreaView, StyleSheet, ImageBackground, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard, Platform } from "react-native";

import LogoComponent from "../components/LogoComponent";
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
          style={styles.container}
          >
          <KeyboardAvoidingView
            behavior={Platform.select({ ios:"padding", android:null })}
            // keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
            style={styles.container}
            >
            <TouchableWithoutFeedback style={styles.container}
              onPress={Keyboard.dismiss}>
              <View style={styles.logoContainer}>
                <View style={styles.logoContainer}>
                  <LogoComponent />
                </View>
                <View style={styles.infoContainer}>
                  <EmailSignUpComponent {...rest} />
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
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
    marginBottom: 10,
  }
});

