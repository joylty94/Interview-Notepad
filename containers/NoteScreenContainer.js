import React, { Component } from "react"
import { View, StyleSheet, Text } from "react-native";

export default class NoteScreenContainer extends Component{
  static navigationOptions = ({navigation}) => {
    let header = null
    return { header }
  }
  render(){
    return(
      <View>
        <Text>NoteScreenContainer</Text>
      </View>
    )
  }
}
