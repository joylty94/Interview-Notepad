import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchDetailNoteScreen, fetchDetailNoteScreenDelete, fetchDetailNoteScreenShare,
  fetchDetailNoteScreenModal, fetchDetailNoteScreenMove } from "../thunk/detailNoteScreen";

import DetailNoteComponent from "../components/DetailNoteComponent";
import LoadingContainer from "./LoadingContainer";
import DetailNoteMoveModalComponent from "../components/DetailNoteMoveModalComponent";

class DetailNoteScreenContainer extends Component {
  componentDidMount() {
    let item = this.props.navigation.state.params;
    this.props.onMount(item)
  }

  render() {
    const { loading, ...rest } = this.props
    if(loading){
      return(<LoadingContainer/>)
    }
    return (
      <View style={{flex:1}}>
        <DetailNoteComponent {...rest}/>
        <DetailNoteMoveModalComponent {...rest} />
      </View>
    )
  }
}

export default connect(
  state => ({
    loading: state.detailNoteScreen.loading,
    detailCategory: state.detailNoteScreen.detailCategory,
    modal: state.detailNoteScreen.modal,
    categoryItem: state.detailNoteScreen.categoryItem
  }),
  dispatch => ({
    onMount: (item) => {
      dispatch(fetchDetailNoteScreen(item))
    },
    onDelete: (detailCategory) => {
      dispatch(fetchDetailNoteScreenDelete(detailCategory))
    },
    onShare: (detailCategory) => {
      dispatch(fetchDetailNoteScreenShare(detailCategory))
    },
    onModal: () => {
      dispatch(fetchDetailNoteScreenModal())
    },
    onMove: (item, category) => {
      dispatch(fetchDetailNoteScreenMove(item, category))
    }
  })
)(DetailNoteScreenContainer)
