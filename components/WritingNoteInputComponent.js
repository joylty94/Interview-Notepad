import React, { Component } from "react";
import { View, TextInput, StyleSheet, Keyboard, Text, TouchableHighlight,
  KeyboardAvoidingView, Platform } from "react-native";
import Tags from "react-native-tags";

export default class WritingNotesInputComponent extends Component {
  render(){
    const { writingTag, writingShare, answer, changeQuestion, changeAnswer } = this.props
    if (!writingTag) {
    return(
      <KeyboardAvoidingView style={styles.container}
        behavior="padding">
        <View style={styles.questionContainer}>
          <TextInput
            placeholder="질문을 입력하세요"
            placeholderTextColor="rgb(134,142,150)"
            underlineColorAndroid="#fff"
            autoCapitalize="none"
            returnKeyType='next'
            onSubmitEditing={() => this.refs.txtanswer.focus()}
            onChangeText={(question) => changeQuestion( question )}
            style={styles.questionText} />
        </View>
        <TouchableHighlight
          style={styles.answerContainer}
          onPress={() => this.refs.txtanswer.focus()}>
          <TextInput
            multiline={true}
            placeholder="답변를 입력하세요"
            placeholderTextColor="rgb(134,142,150)"
            underlineColorAndroid="#fff"
            ref={"txtanswer"}
            onChangeText={(answer) => changeAnswer( answer )}
            style={styles.answerText} />
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )}
    return(
      <KeyboardAvoidingView style={styles.container}
        behavior="padding">
        <View style={styles.questionContainer}>
          <TextInput
            placeholder="질문을 입력하세요"
            placeholderTextColor="rgb(134,142,150)"
            underlineColorAndroid="#fff"
            autoCapitalize="none"
            returnKeyType='next'
            onSubmitEditing={() => this.refs.txtanswer.focus()}
            onChangeText={(question) => changeQuestion(question)}
            style={styles.questionText} />
        </View>
        <TouchableHighlight
          style={styles.answerContainer}
          onPress={()=>this.refs.txtanswer.focus()}>
          <TextInput
            multiline={true}
            placeholder="답변를 입력하세요"
            placeholderTextColor="rgb(134,142,150)"
            underlineColorAndroid="#fff"
            ref={"txtanswer"}
            onChangeText={(answer) => changeAnswer(answer)}
            style={styles.answerText} />
        </TouchableHighlight>
        <View style={{ flex: 1.5 }}>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 15,
  },
  questionContainer: {
    height: 50,
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(173,181,189)"
  },
  answerContainer: {
    flex: 4,
    paddingVertical: 9,
  },
  tageText: {
    color: "rgb(134, 142, 150)",
  },
  questionText: {
    fontSize: 20,
  },
  answerText: {
    fontSize: 16,
    // paddingBottom: "40%"
  }
})
