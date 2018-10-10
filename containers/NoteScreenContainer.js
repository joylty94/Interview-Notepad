import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

import { WritingNotesScreen } from "../screenName";
import HeaderButtonComponent from "../components/HeaderButtonComponent";
import PlusButtonComponent from "../components/PlusButtonComponent";

export default class NoteScreenContainer extends Component{
  static navigationOptions = ({ navigation }) => {
    let headerLeft = (
      <TouchableOpacity style={styles.categoryButton}
        onPress={() => navigation.navigate(WritingNotesScreen)}>
        <Text style={styles.categoryText}>메모장</Text>
      </TouchableOpacity>
    );
    let headerRight = (
      <HeaderButtonComponent/>
    );
    let headerStyle = ({
      backgroundColor: "rgb(145,167,255)"
    });
    return { headerLeft, headerRight, headerStyle }
  }
  render(){
    const { ...rest } = this.props
    return(
      <View style={styles.container}>
        <Text>NOTE</Text>
        <PlusButtonComponent {...rest}/>
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
    color: "rgb(248,249,250)"
  },
})
