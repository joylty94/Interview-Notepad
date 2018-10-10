import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

import { WritingNotesScreen } from "../screenName";
import HeaderButton from "../components/HeaderButton";
import PlusButton from "../components/PlusButton";
import { Entypo } from "@expo/vector-icons";

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
    const { ...rest } = this.props
    return(
      <View style={styles.container}>
        <Text>NOTE</Text>
        <PlusButton {...rest}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  categoryButton : {
    paddingHorizontal: 10,
    paddingVertical : 15,
    marginLeft: 10,
  },
  categoryText : {
    fontSize : 22,
    fontWeight: "bold",
    textAlign : "center",
  },
  positionView: {
    position: "absolute",
    right: 35,
    bottom: 35,
    backgroundColor: "rgb(250,82,82)",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderColor: "black",
    borderWidth: 2
  }
})
