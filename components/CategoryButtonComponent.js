import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class CategoryButtonComponent extends Component{
  handleModalbutton = () => {
    this.props.onModal()
  }
  render(){
    const defaultCategory = [{ Category: "메모장" }]
    return(
      <View>
        <TouchableOpacity style={styles.categoryButton}
          onPress={this.handleModalbutton}
          >
          <Text style={styles.categoryText}>{this.props.category || defaultCategory[0].Category}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  categoryButton: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  categoryText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(248,249,250)"
  },

})
