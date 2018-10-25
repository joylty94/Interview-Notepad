import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, FlatList, ScrollView } from "react-native";

import NoteListAnimatedComponent from "./NoteListAnimatedComponent";

export default class NoteListComponent extends Component{
  render(){
    const { notesItem } = this.props;
    return(
      <ScrollView style={styles.container}>
        <FlatList
          data={ notesItem }
          renderItem= {({item, index}) => {
            return(
              <NoteListAnimatedComponent item={item}/>
            )
          }}
          keyExtractor={(item, index) => item.category + `${index}`}>
        </FlatList>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  listView:{
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "rgb(173,181,189)",
    marginTop: 10
  },
  questionText:{
    fontSize: 18,
    fontWeight: "500",
    color: "rgb(73,80,87)"
  },
  answerText:{
    fontSize: 18,
    fontWeight: "300",
    color: "rgb(73,80,87)"
  },
})
