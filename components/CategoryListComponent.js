import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";


export default class CategoryListComponent extends Component{
  handleAddPrompt = () => {
    this.props.onAddPrompt("")
  }
  handleUpdatePrompt = (item) => {
    this.props.changeText(item.categoryName)
    this.props.changeCategory(item)
    this.props.onUpdatePrompt("")
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
                    { color: currentCategory === item.categoryName ? "rgb(230,119,0)" : "rgb(52,58,64)"}]}>
                    {((item.categoryName).length > 23) ? (item.categoryName).substring(0, 20) + "..." : item.categoryName}
                  </Text>
                  <TouchableOpacity style={styles.updateButton}
                    onPress={() => this.handleUpdatePrompt(item)}>
                    <Text style={[styles.buttonText,
                      { color: "rgb(241,243,245)" }]}>편집</Text>
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
            onPress={this.handleAddPrompt}
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
    paddingHorizontal: 5
  },
  text: {
    fontWeight: "400",
    fontSize: 18,
    marginLeft: 2,
  },
  buttonText: {
    fontWeight: "400",
    fontSize: 18,
    marginLeft: 2,
  },
  updateButton: {
    borderWidth: 1,
    borderColor: "rgb(73,80,87)",
    borderRadius: 5,
    backgroundColor: "rgb(145,167,255)"
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
