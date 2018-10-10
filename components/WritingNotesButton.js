import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

export default class WritingNotesButton extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="bars" size={22} color="rgb(33,37,41)" />
            <Text style={styles.buttonText}>카테고리</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Feather name="check-square" size={22} color="rgb(33,37,41)" />
            <Text style={styles.buttonText}>체 크</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Feather name="image" size={22} color="rgb(33,37,41)" />
            <Text style={styles.buttonText}>이미지</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="tags" size={22} color="rgb(33,37,41)" />
            <Text style={styles.buttonText}>태 그</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="share-alt" size={22} color="rgb(33,37,41)" />
            <Text style={styles.buttonText}>공 유</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.saveContainer}>
          <Text style={styles.saveText}>저 장</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    borderColor: "rgb(134,142,150)",
    borderWidth: 1,
    paddingHorizontal: 5
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 45,
  },
  buttonText: {
    fontSize: 12,
    textAlign: "center",
    color: "rgb(33,37,41)"
  },
  saveContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  saveText: {
    fontSize: 20,
    textAlign: "center",
    color: "rgb(230,119,0)"
  }
})
