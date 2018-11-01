import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";

import SharedNotesHeaderComponent from "../components/SharedNotesHeaderComponent";
import SharedNotesListComponent from "../components/SharedNotesListComponent";
import { fetchSharedNotesScreen } from "../thunk/sharedNotesScreen";

class SharedNotesScreenContainer extends Component{
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
    const { ...rest } = this.props
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
