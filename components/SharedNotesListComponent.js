import React, { Component } from "react";
import { View, StyleSheet, ScrollView, FlatList, Text } from "react-native";

import SharedNotesListAnimatedComponent from "./SharedNotesListAnimatedComponent"

export default class SharedNotesListComponent extends Component{
  render(){
    const { results, ...rest } = this.props;
    if(results.length === 0){
      return(
        <View style={styles.initContainer}>
          <Text style={styles.initText}>면접 질문을 입력하세요.</Text>
        </View>
      )
    }
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
  initContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  initText: {
    fontSize: 20,
    fontFamily: "GodoB",
    color:"rgb(73,80,87)",
  }
})
