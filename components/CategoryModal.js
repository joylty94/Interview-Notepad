import React, { Component } from "react";
import { View, Text, Modal, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native";

export default class CategoryModal extends Component{
  render(){
    const defaultCategory = [{ category: '메모장011111111111111111111111111111111111111111111111', number: 1 }, { category: '메모장', number: 23 }, { category: '메모장', number: 333 }, { category: '메모장0', number: 1 }, { category: '메모장', number: 23 }, { category: '메모장', number: 333 }, { category: '메모장0', number: 1 }, { category: '메모장', number: 23 }, { category: '메모장', number: 333 }, { category: '메모장0', number: 1 }, { category: '메모장', number: 23 }, { category: '메모장', number: 333 }, { category: '메모장0', number: 1 }, { category: '메모장', number: 23 }, { category: '메모장', number: 333 }, { category: '메모장0', number: 1 }, { category: '메모장', number: 23 }, { category: '메모장', number: 333 }, { category: '메모장0', number: 1 }, { category: '메모장', number: 23 }, { category: '메모장', number: 333 }, { category: '메모장0', number: 1 }, { category: '메모장', number: 23 }, { category: '메모장', number: 333 }]
    return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <ScrollView>
              <FlatList
                data={defaultCategory}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      // item={item}
                      // index={index}
                      style={styles.modalButton}>
                        <Text style={styles.madalText}>{item.category}</Text>
                        <Text style={styles.madalText}>{item.number}</Text>
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
  },
  modalView: {
    width: "90%",
    maxHeight: "50%",
    marginTop: "4%",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "rgb(248,249,250)"
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  madalText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "rgb(52,58,64)",
  },
  addCategoryButton: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderTopWidth: 1,
  },
})
