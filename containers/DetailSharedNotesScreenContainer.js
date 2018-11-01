import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import DetailSharedNotesComponent from "../components/DetailSharedNotesComponent";
import ScrapModalComponent from "../components/ScrapModalComponent";
import LoadingContainer from "./LoadingContainer";
import { fetchDetailSharedNotes, fetchDetailSharedNotesLikeTyping,
  fetchDetailSharedNotesOnScrapModal, fetchDetailSharedNotesScrap } from "../thunk/detailSharedNotesScreen";

class DetailSharedNotesScreenContainer extends Component {
  componentDidMount() {
    let item = this.props.navigation.state.params;
    this.props.onMount(item)
  }
  handleScrapModal = () => {
    this.props.onScrapModal()
  }
  render() {
    const { loading, ...rest } = this.props
    if (loading) {
      return (<LoadingContainer />)
    }
    return (
      <View style={{ flex: 1 }}>
        <DetailSharedNotesComponent {...rest} handleScrapModal={this.handleScrapModal} />
        <ScrapModalComponent {...rest} handleScrapModal={this.handleScrapModal}/>
      </View>
    )
  }
}

export default connect(
  state => ({
    loading: state.detailSharedNotesScreen.loading,
    sharedItem: state.detailSharedNotesScreen.sharedItem,
    like: state.detailSharedNotesScreen.like,
    likesCount: state.detailSharedNotesScreen.likesCount,
    categoryItem: state.detailSharedNotesScreen.categoryItem,
    modal: state.detailSharedNotesScreen.modal,
  }),
  dispatch => ({
    onMount: (item) => {
      dispatch(fetchDetailSharedNotes(item))
    },
    onLikeTyping: () => {
      dispatch(fetchDetailSharedNotesLikeTyping())
    },
    onScrapModal: () => {
      dispatch(fetchDetailSharedNotesOnScrapModal())
    },
    onScrap: (categoryName, id) => {
      dispatch(fetchDetailSharedNotesScrap(categoryName, id))
    },
  })
)(DetailSharedNotesScreenContainer)
