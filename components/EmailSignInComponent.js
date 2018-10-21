import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import * as firebase from "firebase";
import { Container, Content, Header, Form, Input, Item, Button, Label } from "native-base";
import { App, SignUpScreen } from "../screenName";

export default class EmailSignInComponent extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      email: "",
      password: "",
    })
  }
  signInUser = (email, password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password)
      this.props.navigation.navigate(App)
    }
    catch(e){
      console.log(e)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor='rgb(134,142,150)'
          underlineColorAndroid="rgba(255,255,255,0.2)"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType='next'
          keyboardType='email-address'
          onSubmitEditing={() => this.refs.txtPassword.focus()}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor='rgb(134,142,150)'
          underlineColorAndroid="rgba(255,255,255,0.2)"
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          ref={"txtPassword"}
          onChangeText={(password) => this.setState({ password })}
        />
        <View style={styles.buttonContainer}>
          <Button
            full
            style={styles.button}
            onPress={() => this.signInUser(this.state.email, this.state.password)}>
            <Text style={styles.buttonText}>로그인</Text>
          </Button>
        </View>
        <TouchableOpacity style={styles.signUpButton}
          onPress={() => this.props.navigation.navigate(SignUpScreen)}>
          <Text style={styles.signUpText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  input: {
    height: 40,
    backgroundColor: 'rgb(222,226,230)',
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "rgb(52,58,64)",
  },
  buttonContainer: {
    borderBottomWidth: 1,
    borderColor: "rgb(206,212,218)"
  },
  button: {
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginBottom: 15,
    backgroundColor: "rgb(201,42,42)"
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(255,245,245)',
    fontWeight: 'bold',
    fontSize: 18
  },
  signUpButton: {
    padding: 5,
  },
  signUpText: {
    textAlign: "right",
    fontSize: 16,
    color: "rgb(134,142,150)"
  }
})
