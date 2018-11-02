import React, { Component } from "react";
import { View, StyleSheet, Platform, TouchableOpacity, Text } from "react-native";
import { Feather, Entypo, Foundation, FontAwesome } from "@expo/vector-icons";
import SearchBar from 'react-native-searchbar';
import { SharedNotesScreen } from "../screenName";

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
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View><CategoryButtonComponent {...rest} /></View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleSearch()}>
                <FontAwesome name="search" size={25} color="rgb(248,249,250)" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {marginTop:2}]}>
                <Entypo name="dots-three-vertical" size={25} color="rgb(248,249,250)" />
              </TouchableOpacity>
            </View>
            <SearchBar
              ref={(ref) => this.searchBar = ref}
              data={searchItem || []}
              handleResults={_handleResults}
              backButton={<Entypo name="chevron-left" size={28} />}
              onBack={() => this.handleBack()}
              heightAdjust={-10}
              backgroundColor="rgb(248,249,250)"
            />
          </View>
        </View>
        <View style={styles.tabContainer}>
          <View style={styles.tabActiveButton}>
            <Foundation name="page-edit" size={25} color="rgb(145,167,255)" />
          </View>
          <TouchableOpacity style={styles.tabButton}
            onPress={() => this.props.navigation.navigate(SharedNotesScreen)}>
            <Foundation name="page-search" size={25} color="rgb(145,167,255)" />
          </TouchableOpacity>
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
  headerContainer: {
    height: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    paddingHorizontal: 4,
    paddingVertical: 10,
    marginLeft: 8
  },
  tabContainer: {
    flexDirection:"row",
    height:50,
    backgroundColor:"rgb(248,249,250)"
  },
  tabActiveButton: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderBottomWidth: 3,
    borderColor:"rgb(145,167,255)"
  },
  tabButton: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderBottomWidth: 1,
    borderColor:"rgb(134,142,150)",
    paddingBottom:2
  }
})
