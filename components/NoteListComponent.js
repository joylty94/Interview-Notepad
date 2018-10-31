import React, { Component } from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";

import NoteListAnimatedComponent from "./NoteListAnimatedComponent";

export default class NoteListComponent extends Component{
  render(){
    const { notesItem, results, search, ...rest } = this.props;
    return(
      <ScrollView style={styles.container}>
        <FlatList
          data = { search ? results : notesItem }
          renderItem= {({item, index}) => {
            return(
              <NoteListAnimatedComponent item={item} search={search} {...rest} />
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
    marginBottom: 10,
  },
})
