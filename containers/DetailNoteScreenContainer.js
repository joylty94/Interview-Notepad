import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Font } from "expo";

import { fetchDetailNoteScreen, fetchDetailNoteScreenDelete, fetchDetailNoteScreenShare,
  fetchDetailNoteScreenModal, fetchDetailNoteScreenMove } from "../thunk/detailNoteScreen";
import DetailNoteComponent from "../components/DetailNoteComponent";
import LoadingContainer from "./LoadingContainer";
import DetailNoteMoveModalComponent from "../components/DetailNoteMoveModalComponent";

class DetailNoteScreenContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
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
        let item = this.props.navigation.state.params;
        this.props.onMount(item)
      } catch (e) {
        console.log(e)
      }
    }
  }

  render() {
    const { loading, ...rest } = this.props
    if(loading || !this.state.fontLoaded){
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
    onDelete: (detailCategory, navigation) => {
      dispatch(fetchDetailNoteScreenDelete(detailCategory, navigation))
    },
    onShare: (detailCategory) => {
      dispatch(fetchDetailNoteScreenShare(detailCategory))
    },
    onModal: () => {
      dispatch(fetchDetailNoteScreenModal())
    },
    onMove: (item, category, navigation) => {
      dispatch(fetchDetailNoteScreenMove(item, category, navigation))
    }
  })
)(DetailNoteScreenContainer)
