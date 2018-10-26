import React, { Component } from "react";
import { View, StyleSheet, Platform, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default class CategoryListHeaderComponent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center",}}>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.goBack()}>
            <FontAwesome name="angle-left" size={26} color="rgb(248,249,250)"/>
          </TouchableOpacity>
          <Text style={styles.text}>카테고리 관리</Text>
        </View>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>편집</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgb(145,167,255)",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 22,
    paddingVertical: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: color = "rgb(248,249,250)"
  }
})
