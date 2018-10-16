import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default class CategoryList extends Component{
  render(){
    const defaultCategory = [{ category: '메모장011111111111111111111111111111111111111111111111', number: 1 }, { category: '메모장', number: 23 }, { category: '메모장', number: 333 }, { category: '메모장0', number: 1 }, { category: '메모장', number: 23 }]
    return(
      <View style={{flex:1}}>
        <FlatList
          data={defaultCategory}
          renderItem={({item, index}) => {
            return(
              <View style={styles.listItem}>
                <Text style={styles.listText}>
                  {((item.category).length > 23) ? (item.category).substring(0, 20) + "..." : item.category}
                </Text>
                <View style={styles.listbuttonContainer}>
                  <TouchableOpacity style={styles.buttonItems}>
                    <EvilIcons name="pencil" size={34} color="rgb(33,37,41)" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonItems}>
                    <EvilIcons name="close" size={34} color="rgb(33,37,41)" />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
          keyExtractor={(item, index) => item.category + `${index}`}>

        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 8,
    borderBottomWidth: 1,
    borderColor: "rgb(134, 142, 150)"
  },
  listText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "rgb(33,37,41)"
  },
  listbuttonContainer: {
    flexDirection: "row",
  },
  buttonItems: {
    paddingHorizontal: 2,
    paddingVertical: 6
  }
})
