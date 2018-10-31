import React, { Component } from "react";
import { View, Text, StyleSheet, BackHandler } from "react-native";
import { connect } from "react-redux";

import CategoryListModalComponent from "../components/CategoryListModalComponent";
import WritingNoteButtonComponent from "../components/WritingNoteButtonComponent";
import WritingNoteInputComponent from "../components/WritingNoteInputComponent";
import { fatchCategoryHandleModal, fatchHandleTag,
  fatchHandleShare, fatchCreating, fatchUpdating } from "../thunk/writingNoteScreen";

class WritingNoteScreenContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      answer: "",
      tag: "",
    }
  }

  componentDidMount() {
    if (this.props.navigation.state.params) {
      const category = this.props.navigation.state.params;
      this.changeQuestion(category.question);
      this.changeAnswer(category.answer);
      this.changeTag(category.tag);
      if(category.share){
        this.props.handleShare()
      }
    }
  }
  changeQuestion = (question) => {
    this.setState({question})
  }
  changeAnswer = (answer) => {
    this.setState({answer})
  }
  changeTag = (tag) => {
    this.setState({tag})
  }

  render(){
    const { ...rest } = this.props
    return(
      <View style={styles.container}>
        <WritingNoteButtonComponent {...rest} question={this.state.question}
          answer={this.state.answer} tag={this.state.tag}/>
        <WritingNoteInputComponent {...rest} changeAnswer={this.changeAnswer}
          changeQuestion={this.changeQuestion} changeTag={this.changeTag} question={this.state.question}
          answer={this.state.answer} tag={this.state.tag}/>
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
    handleCreating: (question, answer, tag) => {
      dispatch(fatchCreating(question, answer, tag))
    },
    handleUpdating: (category, question, answer, tag) => {
      dispatch(fatchUpdating(category, question, answer, tag))
    }
  })
)(WritingNoteScreenContainer)
