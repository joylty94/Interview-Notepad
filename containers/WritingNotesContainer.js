import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import WritingNotesButtonComponent from "../components/WritingNotesButtonComponent";
import WritingNotesInputComponent from "../components/WritingNotesInputComponent";

export default class WritingNotesContainer extends Component{
  render(){
    const { ...rest } = this.props
    return(
      <View style={styles.container}>
        <WritingNotesButtonComponent {...rest}/>
        <WritingNotesInputComponent {...rest} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    marginTop: Platform.OS === 'android' ? 23 : 0,
    backgroundColor: "#fff"
  },
})
