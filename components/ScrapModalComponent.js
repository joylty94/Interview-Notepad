import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { ListItem, Radio } from "native-base";

export default class ScrapModalComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryName: "",
      id:"",
    }
  }
  handleScrap = (item, id) => {
    this.props.onScrap(item, id)
    this.props.handleScrapModal()
  }
  cancelButton = () => {
    this.props.handleScrapModal()
  }
  render(){
    const { modal, categoryItem, handleScrapModal } = this.props;
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
              { (!categoryItem) ? null :
                categoryItem.map(({ categoryName, noteCount, id, itemProps = {} }) => (
                <View {...itemProps}>
                  <TouchableOpacity
                    style={styles.modalListButton}
                    onPress={() => this.setState(({ categoryName, id }))}>
                    <Text style={[styles.madalListText,
                      { color: (this.state.categoryName === categoryName) ? "rgb(230,119,0)" : "rgb(52,58,64)" }
                    ]}>
                      {(categoryName.length > 23) ? categoryName.substring(0, 20) + "..." : categoryName}
                    </Text>
                    <Text style={[styles.madalListText,
                      { color: (this.state.categoryName === categoryName) ? "rgb(230,119,0)" : "rgb(52,58,64)" }
                    ]}>
                      {noteCount}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))
              }
            </ScrollView>
          </View>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => this.handleScrap(this.state.categoryName, this.state.id)}>
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
    backgroundColor: "rgb(248,249,250)",
    alignItems: "center",
    borderRadius: 10
  },
  ListContainer: {
    width:280,
    maxHeight: 200,
    backgroundColor: "rgb(248,249,250)",
    paddingVertical:5,
    paddingHorizontal:10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "rgb(73,80,87)",
    backgroundColor: "rgb(248,249,250)",
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
    backgroundColor: "rgb(248,249,250)",
    borderWidth:1,
    borderColor:"rgb(73,80,87)",
    borderRadius: 5,
    marginHorizontal: 5,
  }
})
