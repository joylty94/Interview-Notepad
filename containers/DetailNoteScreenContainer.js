import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchDetailNoteScreen, fetchDetailNoteScreenDelete } from "../thunk/detailNoteScreen";

import DetailNoteComponent from "../components/DetailNoteComponent";

class DetailNoteScreenContainer extends Component {
  render() {
    const { ...rest } = this.props
    return (
      <View style={{flex:1}}>
        <DetailNoteComponent {...rest}/>
      </View>
    )
  }
}

export default connect(
  state => ({
    detailCategory: state.detailNoteScreen.detailCategory
  }),
  dispatch => ({
    onMount: (item) => {
      dispatch(fetchDetailNoteScreen(item))
    },
    onDelete: (detailCategory) => {
      dispatch(fetchDetailNoteScreenDelete(detailCategory))
    },
  })
)(DetailNoteScreenContainer)
