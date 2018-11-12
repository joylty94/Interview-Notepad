import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class CategoryButtonComponent extends Component{
  handleModalbutton = () => {
    this.props.onModal()
  }
  render(){
    const defaultCategory = "메모장";
    return(
      <View>
        <TouchableOpacity style={styles.categoryButton}
          onPress={this.handleModalbutton}
          >
          <Text style={styles.categoryText}>
            {this.props.currentCategory || defaultCategory}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  categoryButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  categoryText: {
    fontFamily: "GodoB",
    fontSize: 22,
    textAlign: "center",
    color: "rgb(255,255,255)"
  },

})
