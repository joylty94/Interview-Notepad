import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import WritingNoteButtonComponent from "../components/WritingNoteButtonComponent";
import WritingNoteInputComponent from "../components/WritingNoteInputComponent";

export default class WritingNoteScreenContainer extends Component{
  render(){
    const { ...rest } = this.props
    return(
      <View style={styles.container}>
        <WritingNoteButtonComponent {...rest}/>
        <WritingNoteInputComponent {...rest} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: "#fff"
  },
})
