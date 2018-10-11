import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class CategoryButtonComponent extends Component{
  render(){
    const defaultCategory = "메모장"
    return(
      <View>
        <TouchableOpacity style={styles.categoryButton}
          onPress={navigation.navigate(WritingNotesScreen)}>
          <Text style={styles.categoryText}>{this.props.category || defaultCategory}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  categoryButton: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginLeft: 10,
  },
  categoryText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(248,249,250)"
  },
})
