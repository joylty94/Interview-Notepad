import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Platform, Alert, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button } from "native-base";
import * as firebase from "firebase";
import { FontAwesome } from "@expo/vector-icons";

export default class EmailSignUpComponent extends Component {
  constructor(props){
    super(props)
    this.state = ({
      email : "",
      password : "",
      identifyPW : "",
    })
  }
  signupUser = async (email, password, identifyPW) => {
    try {
      if(email.length===0){
        Alert.alert(
          "",
          "이메일을 입력해주세요.",
          [
            { text: "OK" }
          ],
          { cancelable: false }
        )
        return;
      } else if(password.length===0 || identifyPW.length === 0){
        Alert.alert(
          "",
          "패스워드를 입력해주세요.",
          [
            { text: "OK" }
          ],
          { cancelable: false }
        )
        return;
      }else if ( password !== identifyPW ) {
        Alert.alert("", "패스워드가 같지 않습니다.")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password).then(() =>{
        firebase.auth().signOut()
        Alert.alert(
          "",
          "회원가입 성공하셨습니다.",
          [
            {
              text: "OK", onPress: () => {
                this.props.navigation.goBack()
              }
            },
          ],
          { cancelable: false }
        )
      }).catch(e => {
        const errorCode = e.code;
        if (errorCode == "auth/email-already-in-use") {
          Alert.alert(
            "",
            "사용중인 이메일입니다.",
            [
              { text: "OK" }
            ],
            { cancelable: false }
          )
        } else if (errorCode == "auth/invalid-email") {
          Alert.alert(
            "",
            "유효한 이메일 주소가 아닙니다.",
            [
              { text: "OK" }
            ],
            { cancelable: false }
          )
        } else if (errorCode == "auth/operation-not-allowed") {
          Alert.alert(
            "",
            "회원가입이 승인되지 않았습니다.",
            [
              { text: "OK" }
            ],
            { cancelable: false }
          )
        } else if (errorCode == "auth/weak-password") {
          Alert.alert(
            "",
            "패스워드가 너무 쉽습니다.",
            [
              {text: "OK"}
            ],
            { cancelable: false }
          )
        } else {
        }
      })
    }
    catch (error) {
      console.log(e.toString())
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={{flex:1}}>
          <View style={styles.inputFormContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.inputIcon}><FontAwesome name="user" size={25} color="rgb(255,255,255)" /></View>
              <TextInput
                style={styles.input}
                keyboardType='email-address'
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType='next'
                placeholder="email"
                placeholderTextColor='rgb(173,181,189)'
                underlineColorAndroid='rgb(255,255,255)'
                onSubmitEditing={() => this.refs.password.focus()}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputIcon}><FontAwesome name="lock" size={25} color="rgb(255,255,255)" /></View>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType='next'
                ref={"password"}
                placeholder="password"
                placeholderTextColor='rgb(173,181,189)'
                underlineColorAndroid='rgb(255,255,255)'
                onSubmitEditing={() => this.refs.identifyPW.focus()}
                onChangeText={(password) => this.setState({ password })}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputIcon}><FontAwesome name="lock" size={25} color="rgb(255,255,255)" /></View>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                ref={"identifyPW"}
                placeholder="password"
                placeholderTextColor='rgb(173,181,189)'
                underlineColorAndroid='rgb(255,255,255)'
                onChangeText={(identifyPW) => this.setState({ identifyPW })}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            full
            style={styles.button}
            onPress={() => this.signupUser(this.state.email, this.state.password, this.state.identifyPW)}
            >
            <Text style={styles.buttonText}>가입</Text>
          </Button>
          <Button
            full
            style={styles.button}
            onPress={() => this.props.navigation.goBack()}
            >
            <Text style={styles.buttonText}>취소</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    backgroundColor: "rgb(255,255,255)",
    justifyContent: "space-between"
  },
  inputFormContainer: {
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    width: 300,
    backgroundColor: 'rgb(255,255,255)',
    borderWidth: 1,
    borderColor: "rgb(77,171,247)",
    borderRadius: 30,
    marginBottom: 10,
  },
  inputIcon: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(77,171,247)",
    borderRadius: 30
  },
  input: {
    height: 40,
    width: 260,
    fontFamily: "GodoB",
    paddingHorizontal: 10,
    fontSize: 18,
    color: "rgb(52,58,64)",
  },
  buttonContainer:{
    width: "100%",
    flexDirection:"row",
    backgroundColor:"blue"
  },
  button: {
    height: 50,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "rgb(255,255,255)",
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: "BMYEONSUNG",
    color: 'rgb(92,124,250)',
    fontSize: 22
  },
})
