import React, { Component } from "react";
import { View, StyleSheet, ScrollView, FlatList, Text, Image } from "react-native";

import SharedNotesListAnimatedComponent from "./SharedNotesListAnimatedComponent"

export default class SharedNotesListComponent extends Component{
  render(){
    const { results, ...rest } = this.props;
    if(results.length === 0){
      return(
        <View style={styles.initContainer}>
          <Image style={styles.image} source={require("../images/물음표.png")} />
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
    backgroundColor: "rgb(241,243,245)"
  },
  initContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  image: {
    width: 250,
    height: 340
  }
})
