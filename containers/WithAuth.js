import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet, Platform, StatusBar } from "react-native";
import * as firebase from 'firebase';
import { App, Auth } from "../screenName";

export default class WithAuth extends Component{
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    // const { currentUser } = firebase.auth();
    // console.log("currentUser", currentUser)
    // this.props.navigation.navigate(currentUser)
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log("user", user)
      unsubscribe();
      if (user) {
        this.props.navigation.navigate(App)
      } else {
        this.props.navigation.navigate(Auth)
      }
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
  }
})
