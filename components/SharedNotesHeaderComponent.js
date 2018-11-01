import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import SearchBar from "react-native-searchbar";

export default class SharedNotesHeaderComponent extends Component {
  render(){
    const { _handleResults, sharedItem } = this.props;
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <SearchBar
            ref={(ref) => this.searchBar = ref}
            data={sharedItem}
            handleResults={_handleResults}
            hideBack={true}
            showOnLoad={true}
            focusOnLayout={false}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
    height: 85,
  },
  header: {
    flex: 1,
    justifyContent: "center",
  }
})
