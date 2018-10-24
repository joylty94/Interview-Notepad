import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class HeaderButtonComponent extends Component{
  render(){
    return(
      <View style={styles.constainer}>
        <TouchableOpacity style={styles.button}>
          <Feather name="search" size={25} color="rgb(248,249,250)"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Feather name="user" size={25} color="rgb(248,249,250)"/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: "row",
    marginRight: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15
  }
})
