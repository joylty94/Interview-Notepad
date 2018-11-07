import React, { Component } from "react";
import { View, StyleSheet, Platform, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default class CategoryListHeaderComponent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.goBack()}>
            <FontAwesome name="angle-left" size={26} color="rgb(255,255,255)"/>
          </TouchableOpacity>
          <Text style={styles.text}>카테고리 관리</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
    backgroundColor: "rgb(255,135,135)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height:50,
  },
  button: {
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: "rgb(255,255,255)",
    fontFamily: "GodoB"
  }
})
