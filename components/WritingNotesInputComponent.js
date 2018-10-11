import React, { Component } from "react";
import { View, TextInput, StyleSheet, Keyboard } from "react-native";

export default class WritingNotesInputComponent extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <TextInput
            placeholder="질문을 입력하세요"
            placeholderTextColor="rgb(134,142,150)"
            underlineColorAndroid="#fff"
            style={styles.questionText}/>
        </View>
        <View style={styles.answerContainer}>
          <TextInput
            multiline={true}
            placeholder="답변를 입력하세요"
            placeholderTextColor="rgb(134,142,150)"
            underlineColorAndroid="#fff"
            style={styles.answerText}/>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  questionContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(173,181,189)"
  },
  answerContainer: {
    paddingVertical: 8,
  },
  questionText: {
    fontSize: 20,
  },
  answerText: {
    fontSize: 16,
    paddingBottom: "125%",
  }
})
