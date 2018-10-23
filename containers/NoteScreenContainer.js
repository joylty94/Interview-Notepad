import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, ScrollView, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { fetchNoteScreen, fetchcategoryOnModal, fetchcategoryOffModal } from "../thunk/noteScreen";

import NoteHeaderComponent from "../components/NoteHeaderComponent";
import PlusButtonComponent from "../components/PlusButtonComponent";
import CategoryListModalComponent from "../components/CategoryListModalComponent";

class NoteScreenContainer extends Component{
  componentDidMount() {
    this.props.onMount()
  }
  render(){
    console.log("카테코리", this.props.notesItem)
    const { ...rest } = this.props
    return(
      <View style={styles.container}>
        <NoteHeaderComponent {...rest}/>
        <Text>NOTE</Text>
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
    modal: state.noteScreen.modal,
    currentCategory: state.noteScreen.currentCategory,
    notesItem: state.noteScreen.notesItem
  }),
  dispatch => ({
    onMount: () => {
      dispatch(fetchNoteScreen())
    },
    onModal: () => {
      dispatch(fetchcategoryOnModal())
    },
  })
)(NoteScreenContainer)

