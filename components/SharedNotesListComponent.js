import React, { Component } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";

import SharedNotesListAnimatedComponent from "./SharedNotesListAnimatedComponent"

export default class SharedNotesListComponent extends Component{
  render(){
    const { results, ...rest } = this.props;
    return(
      <ScrollView style={styles.container}>
        <FlatList
          data={results}
          renderItem={({ item, index }) => {
            return (
              <SharedNotesListAnimatedComponent item={item} {...rest} />
            )
          }}
          keyExtractor={(item, index) => item.category + `${index}`}>
        </FlatList>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
})
