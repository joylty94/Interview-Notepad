import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native'

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
    width: 128,
    height: 56,
  }
})
