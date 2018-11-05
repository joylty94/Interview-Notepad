import React, { Component } from "react";
import { View, StyleSheet, Text} from "react-native";
import { connect } from "react-redux";
import { fetchNoteScreen, fetchcategoryOnModal, fetchCategoryUpdating,
  fetchNoteScreenSearching } from "../thunk/noteScreen";

import NoteHeaderComponent from "../components/NoteHeaderComponent";
import PlusButtonComponent from "../components/PlusButtonComponent";
import NoteListComponent from "../components/NoteListComponent";
import CategoryListModalComponent from "../components/CategoryListModalComponent";
import LoadingContainer from "./LoadingContainer";

class NoteScreenContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }
  componentDidMount() {
    this.props.onMount()
  }
  _handleResults = (newObject) => {
    this.setState({
      results: newObject
    });
  }
  render(){
    const { onMount, loading, ...rest } = this.props
    if (loading){
      return (<LoadingContainer/>)
    }
    return(
      <View style={styles.container}>
        <NoteHeaderComponent {...rest} _handleResults={this._handleResults}/>
        <NoteListComponent {...rest} results={this.state.results}/>
        {(!this.props.search)
        ?
        <PlusButtonComponent {...rest}/>
        :
        null
        }
        <CategoryListModalComponent {...rest} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgb(222,226,230)"
  },
})

export default connect(
  state => ({
    loading: state.noteScreen.loading,
    noteModal: state.noteScreen.noteModal,
    currentCategory: state.noteScreen.currentCategory,
    notesItem: state.noteScreen.notesItem,
    categoryItem: state.noteScreen.categoryItem,
    search: state.noteScreen.search,
    searchItem: state.noteScreen.searchItem,
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
    },
    onSearshing: () => {
      dispatch(fetchNoteScreenSearching())
    },
  })
)(NoteScreenContainer)

