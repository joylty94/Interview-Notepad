import React, { Component } from "react";
import { View, StyleSheet, Platform, TouchableOpacity, Text, Alert } from "react-native";
import * as firebase from "firebase";
import { Entypo, Foundation } from "@expo/vector-icons";
import SearchBar from 'react-native-searchbar';
import { SharedNotesScreen, AuthLoading } from "../screenName";

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
  handleSignOut = () => {
    Alert.alert(
      "",
      "로그아웃 하시겠습니까?",
      [
        {
          text: '로그아웃', onPress: () => {
            firebase.auth().signOut()
            this.props.naviagtion.navigate(AuthLoading)
          }
        },
        {
          text: '취소'
        },
      ],
      { cancelable: false }
    )
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
                <Text style={styles.buttonText}>검색</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}
                onPress={() => this.handleSignOut()}>
                <Text style={styles.buttonText}>로그아웃</Text>
              </TouchableOpacity>
            </View>
            <SearchBar
              ref={(ref) => this.searchBar = ref}
              data={searchItem || []}
              handleResults={_handleResults}
              backButton={<Entypo name="chevron-left" size={30} />}
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
    marginLeft: 12
  },
  buttonText:{
    color:"rgb(248,249,250)",
    fontWeight: "400",
    fontSize: 16,
    fontFamily: "GodoB",
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
