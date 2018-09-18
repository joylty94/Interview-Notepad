import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LogoComponent from "../components/LogoComponent";


export default class LoginScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <LogoComponent/>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbuttonText}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#f7c744',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32, 53, 70)',
    fontWeight: 'bold',
    fontSize: 18
  },
  sbuttonText: {
    textAlign: 'center',
    color: 'rgb(32, 53, 70)',
    fontWeight: 'bold',
    fontSize: 18,
    display: none,
  }
});

