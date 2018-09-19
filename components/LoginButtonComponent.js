import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Icon } from "native-base";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default class LoginButtonComponent extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Button iconLeft light block style={styles.buttonStyle}>
          <Entypo name="email" size={32} color="black"/>
          <Text style={styles.buttonText}>이메일로그인</Text>
        </Button>
        <Button iconLeft light block style={styles.buttonStyle}>
          <FontAwesome name="google-plus-square" size={32} color="#e0321c"/>
          <Text style={styles.buttonText}>구글로그인</Text>
        </Button>
        <Button iconLeft light block style={styles.buttonStyle}>
          <Entypo name="facebook" size={32} color="#3b5998"/>
          <Text style={styles.buttonText}>페이스북로그인</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 10,
    padding: 5
  },
  buttonText: {
    marginLeft: 5,
    textAlign: 'center',
    color: 'rgb(32, 53, 70)',
    fontWeight: 'bold',
    fontSize: 18
  }
})
