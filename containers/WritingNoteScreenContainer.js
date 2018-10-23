import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";

import CategoryListModalComponent from "../components/CategoryListModalComponent";
import WritingNoteButtonComponent from "../components/WritingNoteButtonComponent";
import WritingNoteInputComponent from "../components/WritingNoteInputComponent";
import { fatchCategoryHandleModal, fatchHandleTag,
  fatchHandleShare, fatchCreating } from "../thunk/writingNoteScreen";

class WritingNoteScreenContainer extends Component{
  constructor(props) {
    super(props)
    this.state = ({
      question: "",
      answer: ""
    })
  }

  changeQuestion = (question) => {
    this.setState({question})
  }
  changeAnswer = (answer) => {
    this.setState({answer})
  }
  render(){
    const { ...rest } = this.props
    return(
      <View style={styles.container}>
        <WritingNoteButtonComponent {...rest} question={this.state.question}
          answer={this.state.answer} />
        <WritingNoteInputComponent {...rest} changeAnswer={this.changeAnswer}
          changeQuestion={this.changeQuestion}/>
        <CategoryListModalComponent {...rest} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: "#fff"
  },
})

export default connect (
  state => ({
    writingModal: state.writingNoteScreen.writingModal,
    writingTag : state.writingNoteScreen.writingTag,
    writingShare : state.writingNoteScreen.writingShare
  }),
  dispatch => ({
    handleModal: () => {
      dispatch(fatchCategoryHandleModal())
    },
    handleTag: () => {
      dispatch(fatchHandleTag())
    },
    handleShare: () => {
      dispatch(fatchHandleShare())
    },
    handleCreating: (question, answer) => {
      dispatch(fatchCreating(question, answer))
    }
  })
)(WritingNoteScreenContainer)
