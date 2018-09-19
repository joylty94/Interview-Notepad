import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";

export default class LogoComponent extends Component{
  render(){
    return(
      <Image style={styles.logo}
        source={require('../images/logo.png')}>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 240,
    height: 150,
    margin: 20,
    marginLeft: -12
  }
})
