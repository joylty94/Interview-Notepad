import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import * as firebase from "firebase";
import { Button } from "native-base";
import { App, SignUpScreen } from "../screenName";
import { FontAwesome } from "@expo/vector-icons";

export default class EmailSignInComponent extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      email: "",
      password: "",
      signIn: true,
    })
  }

  signInUser = (email, password) => {
    try{
      if(email.length === 0) {
        Alert.alert(
          "",
          "이메일을 입력해주세요.",
          [
            { text: "OK" }
          ],
          { cancelable: false }
        )
        return ;
      } else if(password.length === 0) {
        Alert.alert(
          "",
          "패스워드를 입력해주세요.",
          [
            { text: "OK" }
          ],
          { cancelable: false }
        )
        return;
      }
      firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
        this.props.navigation.navigate(App)
      }).catch(e => {
        const errorCode = e.code;
        if (errorCode == "auth/invalid-email") {
          Alert.alert(
            "",
            "유효하지 않은 이메일입니다.",
            [
              { text: "OK", onPress: () => {this.setState({signIn: true})} }
            ],
            { cancelable: false }
          )
        } else if (errorCode == "auth/user-disabled") {
          Alert.alert(
            "",
            "비활성화 된 이메일입니다.",
            [
              { text: "OK", onPress: () => { this.setState({ signIn: true }) } }
            ],
            { cancelable: false }
          )
        } else if (errorCode == "auth/user-not-found") {
          Alert.alert(
            "",
            "이메일 또는 패스워드가 틀립니다.",
            [
              { text: "OK", onPress: () => { this.setState({ signIn: true }) } }
            ],
            { cancelable: false }
          )
        } else if (errorCode == "auth/wrong-password") {
          Alert.alert(
            "",
            "이메일 또는 패스워드가 틀립니다.",
            [
              { text: "OK", onPress: () => { this.setState({ signIn: true }) } }
            ],
            { cancelable: false }
          )
        }
      })
    }
    catch(e){
      console.log(e)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}><FontAwesome name="user" size={28} color="rgb(255,255,255)" /></View>
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor='rgb(173,181,189)'
            underlineColorAndroid='rgb(255,255,255)'
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType='next'
            keyboardType='email-address'
            onSubmitEditing={() => this.refs.txtPassword.focus()}
            onChangeText={(email) => this.setState({ email })}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}><FontAwesome name="lock" size={28} color="rgb(255,255,255)" /></View>
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor='rgb(173,181,189)'
            underlineColorAndroid='rgb(255,255,255)'
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            ref={"txtPassword"}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            full
            style={styles.button}
            onPress={() => this.signInUser(this.state.email, this.state.password)}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </Button>
        </View>
        <View style={styles.signUpContainer}>
          <TouchableOpacity style={styles.signUpButton}
            onPress={() => this.props.navigation.navigate(SignUpScreen)}>
            <Text style={styles.signUpText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent: "center",
  },
  inputContainer:{
    flexDirection:"row",
    alignItems: "center",
    height: 50,
    width: 300,
    backgroundColor: 'rgb(255,255,255)',
    borderWidth:1,
    borderColor: "rgb(255,135,135)",
    borderRadius: 30,
    marginBottom:10,
  },
  input: {
    height: 40,
    width: 260,
    fontFamily: "GodoB",
    paddingHorizontal: 10,
    fontSize: 18,
    color: "rgb(52,58,64)",
  },
  inputIcon: {
    height:50,
    width:50,
    justifyContent:"center",
    alignItems: "center",
    backgroundColor:"rgb(255,135,135)",
    borderRadius:30
  },
  buttonContainer: {
    width: 300,
    borderBottomWidth: 1,
    borderColor: "rgb(255,201,201)"
  },
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "rgb(255,255,255)",
    borderWidth: 1,
    borderColor: "rgb(255,107,107)",
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(255,135,135)',
    fontFamily: "GodoB",
    fontSize: 18
  },
  signUpContainer:{
    width: 300,
    alignItems: "flex-end"
  },
  signUpButton: {
    padding: 5,
    width: 70,
  },
  signUpText: {
    fontFamily: "BMYEONSUNG",
    textAlign: "right",
    fontSize: 16,
    color: "rgb(52,58,64)"
  }
})
