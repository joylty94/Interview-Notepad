import React, { Component } from "react";
import { View, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, Platform,
  Text } from "react-native";
import { Font } from "expo";

import EmailSignUpComponent from "../components/EmailSignUpComponent";
import LoadingContainer from "./LoadingContainer";

export default class SignUpScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }
  async componentDidMount() {
    try {
      await Font.loadAsync({
        "BMYEONSUNG": require("../assets/fonts/BMYEONSUNG.ttf"),
        "GodoB": require("../assets/fonts/GodoB.ttf"),
      });
      this.setState({ fontLoaded: true });
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    const { ...rest } = this.props
    if(this.state.fontLoaded){
      return (
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior="padding"
            style={{flex: 1}}
          >
            <TouchableWithoutFeedback style={{flex: 1}}
              onPress={Keyboard.dismiss}>
              <View style={styles.logoContainer}>
                <View style={styles.logoContainer2}>
                  <Text style={styles.logoText}>회원가입</Text>
                </View>
                <View style={styles.infoContainer}>
                  <EmailSignUpComponent {...rest}/>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      )
    }
    return(
      <LoadingContainer/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
    backgroundColor: "rgb(248,249,250)",
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
  logoText: {
    fontFamily: "BMYEONSUNG",
    fontSize: 50,
    color: "rgb(255,135,135)"
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 225,
  }
});

