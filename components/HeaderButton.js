import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class HeaderButton extends Component{
  render(){
    return(
      <View style={styles.constainer}>
        <TouchableOpacity style={styles.button}>
          <Feather name="search" size={32} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Feather name="user" size={32} color="black"/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: "row",
    marginRight: 3
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 15
  }
})
