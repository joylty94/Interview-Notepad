import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";
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
            backgroundColor="rgb(145,167,255)"
            textColor="rgb(248,249,250)"
            iconColor="rgb(248,249,250)"
            placeholderTextColor="rgb(241,243,245)"
            heightAdjust={-10}
          />
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => this.props.navigation.goBack()}>
            <Foundation name="page-edit" size={25} color="rgb(145,167,255)" />
          </TouchableOpacity>
          <View style={styles.tabActiveButton}>
            <Foundation name="page-search" size={25} color="rgb(145,167,255)" />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 34 : 24,
    backgroundColor: "rgb(145,167,255)"
  },
  header: {
    justifyContent: "center",
    height: 50,
  },
  tabContainer: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "rgb(248,249,250)"
  },
  tabActiveButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    borderColor: "rgb(145,167,255)"
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgb(134,142,150)",
    paddingBottom: 2
  }
})
