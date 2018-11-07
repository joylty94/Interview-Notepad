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
        <Entypo name="plus" size={32} color="rgb(255,255,255)" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  positionView: {
    position: "absolute",
    right: 35,
    bottom: 30,
    backgroundColor: "rgb(255,135,135)",
    paddingVertical: 13,
    paddingHorizontal: 13,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  }
})
