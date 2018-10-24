import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import Modal from "react-native-modal";

import { CategoryListScreen } from "../screenName";

export default class CategoryListModalComponent extends Component{
  handleModalPage = () => {
    this.props.onModal()
    this.props.navigation.navigate(CategoryListScreen)
  }
  handleModalButton = () => {
    if(this.props.onModal){
      this.props.onModal()
    } else {
      this.props.handleModal()
    }
  }
  render(){
    const { noteModal, writingModal, categoryItem, currentCategory } = this.props
    return(
      <Modal
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        transparent={true}
        isVisible={noteModal || writingModal}
        onBackdropPress={this.handleModalButton}
        onBackButtonPress={this.handleModalButton}
        >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryText}>카태고리</Text>
              <TouchableOpacity
                onPress={this.handleModalPage}>
                <MaterialIcons name="settings" size={28} color="rgb(145,167,255)" />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <FlatList
                data={categoryItem}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.modalButton}>
                      <Text style={[styles.madalText, { color: (currentCategory === item.categoryName) ? "rgb(255,212,59)" : "rgb(52,58,64)"}]}>
                        {((item.categoryName).length > 23) ? (item.categoryName).substring(0, 20) + "..." : item.categoryName}
                      </Text>
                      <Text style={[styles.madalText, { color: (currentCategory === item.categoryName) ? "rgb(255,212,59)" : "rgb(52,58,64)" }]}>
                        {item.number}
                      </Text>
                    </TouchableOpacity>
                  )
                }}
                keyExtractor={(item, index) => item.category + `${index}`}>
              </FlatList>
            </ScrollView>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
  modalView: {
    width: "100%",
    maxHeight: "92%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 2,
    borderColor: "rgb(52,58,64)",
    backgroundColor: "rgb(248,249,250)",
    paddingHorizontal: 15
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderColor: "rgb(173,181,189)"
  },
  categoryText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(145,167,255)"
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
  },
  madalText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  }
})
