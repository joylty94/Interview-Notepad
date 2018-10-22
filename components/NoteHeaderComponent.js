import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";

import CategoryButtonComponent from "./CategoryButtonComponent";
import HeaderButtonComponent from "./HeaderButtonComponent";

export default class NoteHeaderComponent extends Component{
  render(){
    const { ...rest } = this.props;
    return(
      <View>
        <View style={styles.header}>
          <View><CategoryButtonComponent {...rest}/></View>
          <View><HeaderButtonComponent {...rest}/></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent : "space-between",
    backgroundColor: "rgb(145,167,255)",
    paddingLeft: 12,
    height: 85,
  }
})
