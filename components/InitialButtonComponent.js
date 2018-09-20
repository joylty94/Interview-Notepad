import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";
import { LoginScreen } from "../screenName";

export default class InitialButtonComponent extends Component{
  render(){
    const { navigation } = this.props;
    return(
      <View>
        <Button iconLeft light block style={styles.buttonStyle}>
          <Text style={styles.buttonText}>회원가입</Text>
        </Button>
        <Button iconLeft light block style={styles.buttonStyle}
          onPress={() => {navigation.navigate(LoginScreen)}}>
          <Text style={styles.buttonText}>로그인</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32, 53, 70)',
    fontWeight: 'bold',
    fontSize: 18
  },
  buttonStyle: {
    marginBottom: 10,
    padding: 5
  }
})
