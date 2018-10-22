import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Platform } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

export default class WritingNoteButtonComponent extends Component{
  render(){
    return(
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="bars" size={23} color="rgb(33,37,41)" />
              <Text style={styles.buttonText}>카테고리</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Feather name="check-square" size={23} color="rgb(33,37,41)" />
              <Text style={styles.buttonText}>체 크</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button}>
              <Feather name="image" size={23} color="rgb(33,37,41)" />
              <Text style={styles.buttonText}>이미지</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="tags" size={23} color="rgb(33,37,41)" />
              <Text style={styles.buttonText}>태 그</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="share-alt" size={23} color="rgb(33,37,41)" />
              <Text style={styles.buttonText}>공 유</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="save" size={23} color="rgb(33,37,41)" />
              <Text style={styles.buttonText}>저 장</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress= {() => this.props.navigation.goBack()}>
              <FontAwesome name="window-close" size={23} color="rgb(33,37,41)" />
              <Text style={styles.buttonText}>취 소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(145,167,255)",
    height: 85,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(248,249,250)",
  },
  buttonContainer: {
    flexDirection: "row",
    borderColor: "rgb(134,142,150)",
    borderWidth: 1,
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 55,
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
