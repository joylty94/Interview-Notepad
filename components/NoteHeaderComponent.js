import React, { Component } from "react";
import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SearchBar from 'react-native-searchbar';

import CategoryButtonComponent from "./CategoryButtonComponent";

export default class NoteHeaderComponent extends Component{
  handleSearch = () => {
    this.props.onSearshing()
    this.searchBar.show()
  }
  handleBack = () => {
    this.props.onSearshing()
    this.searchBar.hide()
  }
  render(){
    const { _handleResults, searchItem, ...rest } = this.props;
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <View><CategoryButtonComponent {...rest} /></View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleSearch()}>
              <Feather name="search" size={25} color="rgb(248,249,250)" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Feather name="user" size={25} color="rgb(248,249,250)" />
            </TouchableOpacity>
          </View>
          <SearchBar
            ref={(ref) => this.searchBar = ref}
            data={searchItem || []}
            handleResults={_handleResults}
            backButton={<Entypo name="chevron-left" size={28} />}
            onBack={() => this.handleBack()}
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(145,167,255)",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginRight: 3,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginLeft: 5
  }
})
