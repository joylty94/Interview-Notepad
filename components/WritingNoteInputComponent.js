import React, { Component } from "react";
import { View, TextInput, StyleSheet, TouchableWithoutFeedback,
  KeyboardAvoidingView } from "react-native";

export default class WritingNotesInputComponent extends Component {
  render(){
    const { writingTag, changeQuestion, changeAnswer, changeTag, navigation, question,
    answer, tag } = this.props
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
            onChangeText={(text) => changeQuestion(text)}
            value={question}
            style={styles.questionText} />
        </View>
        <TouchableWithoutFeedback
          onPress={() => this.refs.txtanswer.focus()}>
          <View style={styles.answerContainer}>
            <TextInput
              multiline={true}
              placeholder="답변를 입력하세요"
              placeholderTextColor="rgb(134,142,150)"
              underlineColorAndroid="#fff"
              autoCapitalize="none"
              ref={"txtanswer"}
              onChangeText={(text) => changeAnswer(text)}
              value={answer}
              style={styles.answerText} />
          </View>
        </TouchableWithoutFeedback>
        {(!writingTag) ? null :
        <View style={styles.tageContainer}>
          <TextInput
            placeholder="#키워드 입력하세요"
            placeholderTextColor="rgb(134,142,150)"
            underlineColorAndroid="rgb(222,226,230)"
            autoCapitalize="none"
            reg={"txttag"}
            onChangeText={(text) => changeTag(text)}
            value={tag}
            style={styles.tagText}/>
        </View>
        }
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
    height: 45,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(173,181,189)"
  },
  answerContainer: {
    flex: 8,
    paddingVertical: 9,
  },
  tageContainer: {
    height: 40,
    paddingVertical: 9,
    marginBottom: 5,
    backgroundColor: "rgb(222,226,230)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  questionText: {
    paddingLeft: 5,
    fontSize: 20,
  },
  answerText: {
    paddingLeft: 8,
    fontSize: 16,
  },
  tagText: {
    paddingLeft: 10,
    fontSize: 16,
  }
})
