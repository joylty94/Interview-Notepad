import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { WritingNotesScreen } from "../screenName";

export default class PlusButtonComponent extends Component{
  render(){
    const { navigation } = this.props
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.positionView}
          onPress={() => { navigation.navigate(WritingNotesScreen)}}>
          <Entypo name="plus" size={32} color="rgb(248,249,250)" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
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
