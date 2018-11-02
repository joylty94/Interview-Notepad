import React, { Component } from "react";
import {
  View, StyleSheet, Platform, Text, NativeModules, Image,
  LayoutAnimation, ImageBackground } from "react-native";
import * as firebase from 'firebase';
import { App, Auth } from "../screenName";
import LoadingContainer from "./LoadingContainer"

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class WithAuth extends Component{
  constructor(props) {
    super(props);
    this.navigator();
  }

  navigator = async () => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
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
      <LoadingContainer/>
    );
  }
}

