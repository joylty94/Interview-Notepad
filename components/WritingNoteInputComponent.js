import React, { Component } from "react";
import { View, TextInput, StyleSheet, Keyboard, Text, TouchableHighlight,
  KeyboardAvoidingView, Platform } from "react-native";
import Tags from "react-native-tags";

export default class WritingNotesInputComponent extends Component {
  render(){
    const { writingTag, writingShare, answer, changeQuestion, changeAnswer } = this.props
    if (!writingTag) {
    return(
      <View style={styles.container}>
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
      </View>
    )}
    return(
      <View style={styles.container}>
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
        <View>
          <Text style={styles.tageText}>#tags:</Text>
          <Tags
            onChangeTags={tags => console.log(tags)}
            onTagPress={(index, tagLabel, event, deleted) =>
              console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
            }
            containerStyle={{ justifyContent: "center" }}
            inputStyle={{ backgroundColor: "rgb(222,226,230)" }}
            maxNumberOfTags={5}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 15,
  },
  questionContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(173,181,189)"
  },
  answerContainer: {
    flex: 1,
    paddingVertical: 8,
  },
  tageText: {
    color: "rgb(134, 142, 150)",
  },
  questionText: {
    fontSize: 20,
  },
  answerText: {
    fontSize: 16,
    paddingBottom: "40%"
  }
})
