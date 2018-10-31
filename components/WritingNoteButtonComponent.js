import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Platform } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

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
  handleCreatingButton = (category, question, answer, tag) => {
    if (category){
      this.props.handleUpdating(category, question, answer, tag)
    } else {
      this.props.handleCreating(question, answer, tag)
    }
    this.props.navigation.goBack()
  }
  render(){
    const { writingShare, writingTag, question, answer, tag, navigation } = this.props;
    const category = navigation.state.params;
    return(
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}>
          <Entypo name="chevron-left" size={30} color="rgb(33,37,41)" />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}
              onPress={this.handleModalButton}>
              <FontAwesome name="bars" size={23} color="rgb(33,37,41)" />
              <Text style={styles.buttonText}>카테고리</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="check-square" size={23} color="rgb(33,37,41)" />
              <Text style={styles.buttonText}>체 크</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,
            { backgroundColor: writingTag ? "rgb(206,212,218)" : "rgb(248,249,250)"}]}
              onPress={this.handleTagButton}>
              <FontAwesome name="tags" size={23} color={writingTag ? "rgb(247,131,172)" : "rgb(33,37,41)"} />
              <Text style={[styles.buttonText,
                  { color: writingTag ? "rgb(248,249,250)" : "rgb(33,37,41)" }]}>
                키워드
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
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.handleCreatingButton(category, question, answer, tag)}
          style={styles.saveButton}>
          <Text style={styles.saveText}>저 장</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 85,
    paddingRight: 10
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    borderColor: "rgb(134,142,150)",
    borderWidth: 1,
    marginRight: 5
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
    fontWeight: "400",
    color: "rgb(33,37,41)"
  },
  saveButton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 55,
    height: 45,
  },
  saveText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
    color: "rgb(245,159,0)"
  }
})
