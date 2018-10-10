import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { WritingNotesScreen } from "../screenName";

export default class PlusButton extends Component{
  render(){
    const { navigation } = this.props
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.positionView}
          onPress={() => { navigation.navigate(WritingNotesScreen)}}>
          <Entypo name="plus" size={30} color="black" />
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
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderColor: "black",
    borderWidth: 2
  }
})
