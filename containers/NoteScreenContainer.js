import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import { WritingNotesScreen } from "../screenName";
import HeaderButton from "../components/HeaderButton";

export default class NoteScreenContainer extends Component{
  static navigationOptions = ({ navigation }) => {
    let headerLeft = (
      <TouchableOpacity style={styles.categoryButton}
        onPress={() => navigation.navigate(WritingNotesScreen)}>
        <Text style={styles.categoryText}>메모</Text>
      </TouchableOpacity>
    );
    let headerRight = (
      <HeaderButton/>
    );
    return { headerLeft, headerRight }
  }
  render(){
    return(
      <Text>NOTE</Text>
    )
  }
}

const styles = StyleSheet.create({
  categoryButton : {
    paddingHorizontal: 10,
    paddingVertical : 15,
    marginLeft: 8,
  },
  categoryText : {
    fontSize : 20,
    fontWeight: "bold",
    textAlign : "center",
  }
})
