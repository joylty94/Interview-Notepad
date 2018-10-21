import React, { Component } from "react";
import {
  View, StyleSheet, Platform, Text, NativeModules, Image,
  LayoutAnimation, ImageBackground } from "react-native";
import * as firebase from 'firebase';
import { App, Auth } from "../screenName";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class WithAuth extends Component{
  constructor(props) {
    super(props);
    this.navigator();
    this.state = ({
      w: 260,
      h: 230,
    });
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      timeId = setInterval(() => {
        this._LayoutAnimation()
      }, 650);
    })
  }

  navigator = async () => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log("user", user)
      unsubscribe();
      if (user) {
        setTimeout(() => {
          clearInterval(timeId)
          this.props.navigation.navigate(App)
        }, 2000)
      } else {
        setTimeout(() => {
          clearInterval(timeId)
          this.props.navigation.navigate(Auth)
        }, 2000)
      }
    });
  }

  _LayoutAnimation = () => {
    LayoutAnimation.spring();
    console.log(this.state.w)
    if (this.state.w === 260) {
      this.setState({ w: this.state.w + 32, h: this.state.h + 26 })
    } else {
      this.setState({ w: this.state.w - 32, h: this.state.h - 26 })
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/note.png")}
          style={styles.backgroundImage}
        >
          <Image
            source={require('../images/book.png')}
            style={[styles.imageContainer,
              { width: this.state.w, height: this.state.h }
            ]}>
          </Image>
            <Text style={[styles.loadingText]}>Loading...</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
    flex:1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: 'rgb(134,142,150)',
    fontWeight: '500',
    marginTop: 20,
    fontSize: 24,
  },
})
