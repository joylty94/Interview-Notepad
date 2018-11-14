import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { ListItem, Radio } from "native-base";

export default class ScrapModalComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {},
    }
  }
  handleScrap = (item) => {
    this.props.onScrap(item)
  }
  cancelButton = () => {
    this.props.handleScrapModal()
  }
  handleOnPressCategory = (item) => {
    this.setState({ item })
  }
  render(){
    const { modal, categoryItem, handleScrapModal } = this.props;
    console.log(modal)
    return(
      <Modal
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        transparent={true}
        isVisible={modal}
        onBackdropPress={handleScrapModal}
        onBackButtonPress={handleScrapModal}
        style={styles.modalContainer}>
        <View style={styles.container}>
          <View style={styles.ListContainer}>
            <ScrollView>
              <FlatList
                data={categoryItem}
                extraData={this.state.item}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.modalListButton}
                      onPress={() => this.handleOnPressCategory(item)}>
                      <Text style={[styles.madalListText,
                      { color: (this.state.item.categoryName === item.categoryName) ? "rgb(230,119,0)" : "rgb(52,58,64)" }
                      ]}>
                        {((item.categoryName).length > 23) ? item.categoryName.substring(0, 20) + "..." : item.categoryName}
                      </Text>
                      <Text style={[styles.madalListText,
                      { color: (this.state.item.categoryName === item.categoryName) ? "rgb(230,119,0)" : "rgb(52,58,64)" }
                      ]}>
                        {item.noteCount}
                      </Text>
                    </TouchableOpacity>
                  )
                }}
                keyExtractor={(item, index) => item.category + `${index}`}>
              </FlatList>
            </ScrollView>
          </View>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => this.handleScrap(this.state.item)}>
              <Text style={styles.madalListText}>스크랩</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.cancelButton}
              style={styles.modalButton}>
              <Text style={styles.madalListText}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    width: 300,
    minHeight: 100,
    borderWidth: 1,
    borderColor: "rgb(73,80,87)",
    backgroundColor: "rgb(255,255,255)",
    alignItems: "center",
    borderRadius: 10
  },
  ListContainer: {
    width:280,
    maxHeight: 200,
    backgroundColor: "rgb(255,255,255)",
    paddingVertical:5,
    paddingHorizontal:10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "rgb(73,80,87)",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 5
  },
  modalListButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
  },
  madalListText: {
    textAlign: "center",
    fontSize: 18,
    color:"rgb(73,80,87)"
  },
  modalButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    padding: 10,
    borderTopWidth: 1,
    borderColor: "rgb(206,212,218)"
  },
  modalButton:{
    alignItems: "center",
    justifyContent: "center",
    paddingVertical:5,
    width: 60,
    backgroundColor: "rgb(255,255,255)",
    borderWidth:1,
    borderColor:"rgb(73,80,87)",
    borderRadius: 5,
    marginHorizontal: 5,
  }
})
