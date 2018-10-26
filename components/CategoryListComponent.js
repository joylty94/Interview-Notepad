import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";


export default class CategoryListComponent extends Component{
  handlePrompt = () => {
    this.props.onPrompt("")
  }
  render(){
    const { currentCategory, categoryItem } = this.props;
    return(
      <View style={{ flex: 1, paddingHorizontal: 15,}}>
        <View style={styles.listContainer}>
          <FlatList
            data={categoryItem}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.listItem}>
                  <Text style={[styles.text,
                    { color: currentCategory === item.categoryName ? "rgb(245,159,0)" : "rgb(52,58,64)"}]}>
                    {((item.categoryName).length > 23) ? (item.categoryName).substring(0, 20) + "..." : item.categoryName}
                  </Text>
                  <TouchableOpacity>
                    <Text style={[styles.text,
                    { color: currentCategory === item.categoryName ? "rgb(245,159,0)" : "rgb(52,58,64)" }]}>편집</Text>
                  </TouchableOpacity>
                </View>
              )
            }}
            keyExtractor={(item, index) => item.category + `${index}`}
            style={styles.listContainer}>
          </FlatList>
        </View>
        <View style={styles.addContainer}>
          <TouchableOpacity style={styles.addButton}
            onPress={this.handlePrompt}
            >
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
    flexDirection:"row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "rgb(173,181,189)",
  },
  text: {
    fontWeight: "400",
    fontSize: 18,
    marginLeft:2
  },
  updateButton: {
    borderWidth:1,
    borderColor: "rgb(73,80,87)"
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
