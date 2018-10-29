import React, { Component } from "react";
import { View, StyleSheet, Text} from "react-native";
import { connect } from "react-redux";
import { fetchNoteScreen, fetchcategoryOnModal, fetchCategoryUpdating } from "../thunk/noteScreen";

import NoteHeaderComponent from "../components/NoteHeaderComponent";
import PlusButtonComponent from "../components/PlusButtonComponent";
import NoteListComponent from "../components/NoteListComponent";
import CategoryListModalComponent from "../components/CategoryListModalComponent";

class NoteScreenContainer extends Component{
  componentDidMount() {
    this.props.onMount()
  }
  render(){
    const { onMount, ...rest } = this.props
    return(
      <View style={styles.container}>
        <NoteHeaderComponent {...rest}/>
        <NoteListComponent {...rest}/>
        <PlusButtonComponent {...rest}/>
        <CategoryListModalComponent {...rest} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

export default connect(
  state => ({
    noteModal: state.noteScreen.noteModal,
    currentCategory: state.noteScreen.currentCategory,
    notesItem: state.noteScreen.notesItem,
    categoryItem: state.noteScreen.categoryItem
  }),
  dispatch => ({
    onMount: () => {
      dispatch(fetchNoteScreen())
    },
    onModal: () => {
      dispatch(fetchcategoryOnModal())
    },
    onCurrentCategory: (categoryName) => {
      dispatch(fetchCategoryUpdating(categoryName))
    }
  })
)(NoteScreenContainer)

