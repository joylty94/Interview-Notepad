import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";
import { Font } from "expo";

import SharedNotesHeaderComponent from "../components/SharedNotesHeaderComponent";
import SharedNotesListComponent from "../components/SharedNotesListComponent";
import { fetchSharedNotesScreen } from "../thunk/sharedNotesScreen";
import LoadingContainer from "./LoadingContainer";

class SharedNotesScreenContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      fontLoaded: false
    }
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        "BMYEONSUNG": require("../assets/fonts/BMYEONSUNG.ttf"),
        "GodoB": require("../assets/fonts/GodoB.ttf"),
      });
      this.setState({ fontLoaded: true });
      this.props.onMount()
    } catch (e) {
      console.log(e)
    }
  }

  _handleResults = (newObject) => {
    this.setState({
      results: newObject
    });
  }

  render(){
    const { ...rest } = this.props
    if(!this.state.fontLoaded){
      return (<LoadingContainer />)
    }
    return(
      <View style={styles.container}>
        <SharedNotesHeaderComponent {...rest} _handleResults={this._handleResults}/>
        <SharedNotesListComponent {...rest} results={this.state.results} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default connect (
  state => ({
    sharedItem: state.sharedNotesScreen.sharedItem,
  }),
  dispatch => ({
    onMount: () => {
      dispatch(fetchSharedNotesScreen())
    }
  })
)(SharedNotesScreenContainer)
