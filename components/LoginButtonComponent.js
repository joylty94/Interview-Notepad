import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as firebase from "firebase";
import { App } from '../screenName';
import { Container, Content, Header, Form, Input, Item, Button, Label } from "native-base";

export default class LoginButtonComponent extends Component{
  constructor(props){
    super(props)
  this.state = ({
    email:"",
    password:""
  })
}
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log("We are authenticated now!");
      }
    });
  }
  loginWithGoogle = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '592233350268-51itcpv67blgmjj5aqfv46obf6j38h3m.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        // return result.accessToken;
        const credential = firebase.auth.GoogleAuthProvider.credential(result.accessToken);
        const signIn = firebase.auth().signInAndRetrieveDataWithCredential(credential)
        await Promise.all([credential, signIn])
        // const provider = new firebase.auth.GoogleAuthProvider();
        // await firebase.auth().signInWithPopup(provider)
        // this.props.navigation.navigate(App)
      } else {
        console.log(cancelled)
      }
    } catch (e) {
      console.log('error', e)
    }
  };

  loginWithFacebook = async () => {
    try{
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
        '721596061545138', {permissions: ['public_profile']});
      if (type === 'success') {
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        await firebase.auth().signInAndRetrieveDataWithCredential(credential)
        // this.props.navigation.navigate(App)
      }
    } catch (e){
      console.log('error', e)
    }
  }
  signupUser = (email, password) => {
    try{
      if(this.state.password.length < 6){
        alert("비번 6")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (e) {
      console.log(e.toString())
    }
  }
  render(){
    return(
      <View>
        <View style={styles.buttonContainer}>
          {/* <TouchableOpacity style={styles.buttonStyle}>
            <Entypo name="email" size={30} color="rgb(52,58,64)" />
            <Text style={styles.buttonText}>이메일로그인</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.buttonStyle}
            onPress={() => this.loginWithGoogle()}>
            <FontAwesome name="google-plus-square" size={30} color="#e0321c" />
            <Text style={styles.buttonText}>구글로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}
            onPress={() => this.loginWithFacebook()}>
            <Entypo name="facebook" size={30} color="#3b5998" />
            <Text style={styles.buttonText}>페이스북로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer:{
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent : "center",
    width: "110%",
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "rgb(173,181,189)"
  },
  buttonText: {
    marginLeft: 5,
    textAlign: 'center',
    color: 'rgb(32, 53, 70)',
    fontWeight: 'bold',
    fontSize: 18
  }
})
