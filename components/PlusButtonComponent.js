import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { WritingNoteScreen } from "../screenName";

export default class PlusButtonComponent extends Component{
  render(){
    const { navigation } = this.props
    return(
      <TouchableOpacity style={styles.positionView}
        onPress={() => { navigation.navigate(WritingNoteScreen)}}>
        <Entypo name="plus" size={32} color="rgb(248,249,250)" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  positionView: {
    position: "absolute",
    right: 35,
    bottom: 35,
    backgroundColor: "rgb(145,167,255)",
    paddingVertical: 13,
    paddingHorizontal: 13,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  }
})
