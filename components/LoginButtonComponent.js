import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "native-base";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as firebase from "firebase";
import { TabScreen } from '../screenName';

export default class LoginButtonComponent extends Component{

  loginWithGoogle = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '698587011968-dlehss85m4qm1m6muatgdpc504enccmh.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        console.log(result.accessToken);
      } else {
        console.log(cancelled)
      }
    } catch (e) {
      console.log('error', e)
    }
    this.props.navigation.navigate(TabScreen)
  };

  loginWithFacebook = async () => {
    try{
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('245418202823166', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        const credential = firebase.auth.logInWithReadPermissionsAsync.credential(token)
        firebase.auth().signInWithCredential(credential).catch((error) => {
          console.log(error)
        })
      }
    } catch (e){
      console.log('error', e)
    }
    this.props.navigation.navigate(NoteScreen)
  }
  render(){
    return(
      <View style={styles.container}>
        <Button iconLeft light block style={styles.buttonStyle}>
          <Entypo name="email" size={32} color="black"/>
          <Text style={styles.buttonText}>이메일로그인</Text>
        </Button>
        <Button iconLeft light block style={styles.buttonStyle}
          onPress={() => this.loginWithGoogle()}>
          <FontAwesome name="google-plus-square" size={32} color="#e0321c"/>
          <Text style={styles.buttonText}>구글로그인</Text>
        </Button>
        <Button iconLeft light block style={styles.buttonStyle}
          onPress={() => this.loginWithFacebook()}>
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
