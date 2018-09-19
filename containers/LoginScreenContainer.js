import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Display from "react-native-display";
import { connect } from "react-redux"

import LogoComponent from "../components/LogoComponent";
import LoginButtonComponent from "../components/LoginButtonComponent";
import InitialButtonComponent from "../components/InitialButtonComponent";

import { dispatchJoinPagination, dispatchLoginPagination } from "../reducers/loginScreen"

import { JoinPagination, LoginPagination } from "../actions"

class LoginScreenContainer extends Component{
  render(){
    const { initialEnble, joinEnble, LoginEnble, ...rest } = this.props
    console.log(this.props)
    console.log(initialEnble)
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <LogoComponent/>
          <View style={styles.buttonView}>
            <Display enable={initialEnble}>
              <InitialButtonComponent {...rest}/>
            </Display>
            <Display enable={LoginEnble}>
              <LoginButtonComponent/>
            </Display>
          </View>
        </View>
      </View>
    )
  }
}

export default connect (
  state => ({
    initialEnble: state.loginScreen.initialEnble,
    joinEnble: state.loginScreen.joinEnble,
    LoginEnble: state.loginScreen.LoginEnble
  }),
  dispatch => ({
    onPressJoin: () => {
      dispatch(JoinPagination())
    },
    onPressLogin: () => {
      dispatch(LoginPagination())
    }
  })
)(LoginScreenContainer)

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
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18
  },
  buttonStyle: {
    marginBottom: 10,
    padding: 5
  }
});

