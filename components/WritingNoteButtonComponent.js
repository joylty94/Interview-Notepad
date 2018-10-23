import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Platform } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

export default class WritingNoteButtonComponent extends Component{
  handleModalButton = () => {
    this.props.handleModal()
  }
  handleTagButton = () => {
    this.props.handleTag()
  }
  handleShareButton = () => {
    this.props.handleShare()
  }
  handleCreatingButton = (question, answer) => {
    this.props.handleCreating(question, answer)
    this.props.navigation.goBack()
  }
  render(){
    const { writingShare, writingTag, question, answer } = this.props
    return(
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}
              onPress={this.handleModalButton}>
              <FontAwesome name="bars" size={23} color="rgb(33,37,41)" />
              <Text style={styles.buttonText}>카테고리</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Feather name="check-square" size={23} color="rgb(33,37,41)" />
              <Text style={styles.buttonText}>체 크</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,
            { backgroundColor: writingTag ? "rgb(206,212,218)" : "rgb(248,249,250)"}]}
              onPress={this.handleTagButton}>
              <FontAwesome name="tags" size={23} color={writingTag ? "rgb(247,131,172)" : "rgb(33,37,41)"} />
              <Text style={[styles.buttonText,
                  { color: writingTag ? "rgb(248,249,250)" : "rgb(33,37,41)" }]}>
                태 그
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: writingShare ? "rgb(206,212,218)" : "rgb(248,249,250)" }]}
              onPress={this.handleShareButton}>
              <FontAwesome name="share-alt" size={23} color={writingShare ? "rgb(77,171,247)" : "rgb(33,37,41)"} />
              <Text style={[styles.buttonText,
                { color: writingShare ? "rgb(248,249,250)" : "rgb(33,37,41)" }]}>
                공 유
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
              onPress={() => this.handleCreatingButton(question, answer)}>
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
    width: 60,
    height: 45,
  },
  buttonText: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "400",
    color: "rgb(33,37,41)"
  },
})
