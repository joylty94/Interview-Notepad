import React, { Component } from "react";
import { View, Text, Modal, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

export default class CategoryModal extends Component{
  render(){
    const defaultCategory = [{ category: '메모장011111111111111111111111111111111111111111111111', number: 1 }, { category: '메모장', number: 23 }, { category: '메모장', number: 333 }, { category: '메모장0', number: 1 }, { category: '메모장', number: 23 }]
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
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryText}>카태고리</Text>
              <TouchableOpacity>
                <MaterialIcons name="settings" size={25} color="rgb(248,249,250)" />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <FlatList
                data={defaultCategory}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      // item={item}
                      // index={index}
                      style={styles.modalButton}>
                      <Text style={styles.madalText}>{((item.category).length > 23) ? (item.category).substring(0, 20) + "..." : item.category}</Text>
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
    maxHeight: "92%",
    marginTop: 14,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 2,
    borderColor: "rgb(52,58,64)",
    backgroundColor: "rgb(248,249,250)",
  },
  categoryHeader: {
    backgroundColor: "rgb(145,167,255)",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(248,249,250)"
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  madalText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "rgb(52,58,64)",
  }
})
