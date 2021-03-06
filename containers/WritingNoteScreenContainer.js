import React, { Component } from "react";
import { View, Text, StyleSheet, BackHandler } from "react-native";
import { connect } from "react-redux";
import { Font } from "expo";

import CategoryListModalComponent from "../components/CategoryListModalComponent";
import WritingNoteButtonComponent from "../components/WritingNoteButtonComponent";
import WritingNoteInputComponent from "../components/WritingNoteInputComponent";
import { fatchCategoryHandleModal, fatchHandleTag,
  fatchHandleShare, fatchCreating, fatchUpdating } from "../thunk/writingNoteScreen";
import { fetchCategoryUpdating } from "../thunk/noteScreen";
import LoadingContainer from "./LoadingContainer";

class WritingNoteScreenContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      answer: "",
      tag: "",
      fontLoaded: false
    }
  }

  async componentDidMount() {
    {
      try {
        await Font.loadAsync({
          "BMYEONSUNG": require("../assets/fonts/BMYEONSUNG.ttf"),
          "GodoB": require("../assets/fonts/GodoB.ttf"),
        });
        this.setState({ fontLoaded: true });
          if (this.props.navigation.state.params) {
            const category = this.props.navigation.state.params;
            this.changeQuestion(category.question);
            this.changeAnswer(category.answer);
            this.changeTag(category.tag);
            if(category.share){
              this.props.handleShare()
            }
          }
      } catch (e) {
        console.log(e)
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
    if(!this.state.fontLoaded){
      return (<LoadingContainer/>)
    }
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
    writingShare : state.writingNoteScreen.writingShare,
    currentCategory : state.writingNoteScreen.currentCategory,
    categoryItem: state.writingNoteScreen.categoryItem
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
    handleCreating: (question, answer, tag, navigation) => {
      dispatch(fatchCreating(question, answer, tag, navigation))
    },
    handleUpdating: (category, question, answer, tag, navigation) => {
      dispatch(fatchUpdating(category, question, answer, tag, navigation))
    },
    onCurrentCategory: (categoryName) => {
      dispatch(fetchCategoryUpdating(categoryName))
    },
  })
)(WritingNoteScreenContainer)
