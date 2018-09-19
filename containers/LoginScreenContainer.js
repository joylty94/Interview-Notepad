import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import LogoComponent from "../components/LogoComponent";
import LoginButtonComponent from "../components/LoginButtonComponent";

export default class LoginScreenContainer extends Component {
  render() {
    const { ...rest } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <LogoComponent />
          <View style={styles.buttonView}>
            <LoginButtonComponent {...rest} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
  },
});

