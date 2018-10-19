import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default class CategoryListComponent extends Component{
  render(){
    const defaultCategory = [{ category: '메모장011111111111111111111111111111111111111111111111', number: 1 }, { category: '메모장', number: 23 }, { category: '메모장', number: 333 }, { category: '메모장0', number: 1 }, { category: '메모장', number: 23 }]
    return(
      <View style={{ flex: 1, paddingHorizontal: 15,}}>
        <View style={styles.listContainer}>
          <FlatList
            data={defaultCategory}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.listItem}>
                  <Text style={styles.text}>
                    {((item.category).length > 23) ? (item.category).substring(0, 20) + "..." : item.category}
                  </Text>
                </View>
              )
            }}
            keyExtractor={(item, index) => item.category + `${index}`}
            style={styles.listContainer}>
          </FlatList>
        </View>
        <View style={styles.addContainer}>
          <TouchableOpacity style={styles.addButton}>
            <EvilIcons name="plus" size={32} color="rgb(116,143,252)" />
            <Text style={styles.addText}>카테고리 추가</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "rgb(173,181,189)",
  },
  text: {
    fontWeight: "400",
    fontSize: 18,
    color: "rgb(52,58,64)",
    marginLeft:2
  },
  addContainer: {
    borderBottomWidth: 1,
    borderColor: "rgb(173,181,189)",
  },
  addText: {
    fontWeight: "400",
    fontSize: 18,
    color: "rgb(52,58,64)",
    marginLeft: 6
  },
  addButton: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
  }
})
