import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default class WritingNotesContainer extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>WritingNotes</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
})
