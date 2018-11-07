import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet, Alert } from "react-native";
import Modal from "react-native-modal";

export default class CategoryAddModalComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      text: ""
    }
  }
  handlePrompt = () => {
    this.props.changecheck("")
    this.props.onAddPrompt("")
  }
  handleAdd = (text) => {
    this.props.onAddPrompt(text)
  }
  handleChangeText = (text) => {
    this.props.changeText(text)
    this.props.changecheck(text)
  }
  render(){
    const { addPrompt, changeText, text, check } = this.props;
    return(
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        transparent={true}
        isVisible={addPrompt}
        onBackdropPress={this.handlePrompt}
        onBackButtonPress={this.handlePrompt}
        style={styles.container}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>카테고리 추가</Text>
          {check
          ?
          <View>
            <View style={styles.modalInputContainer}>
              <TextInput
                underlineColorAndroid="rgb(241,243,245)"
                autoCapitalize="none"
                autoFocus={true}
                style={styles.modalInput}
                onChangeText={(text) => this.handleChangeText(text)} />
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                onPress={() => { this.handleAdd(text) }}
                style={styles.modalButton}>
                <Text style={styles.buttonText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handlePrompt}
                style={styles.modalButton}>
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View>
            <View style={styles.modalNoPassInputContainer}>
              <TextInput
                underlineColorAndroid="rgb(241,243,245)"
                autoCapitalize="none"
                autoFocus={true}
                style={styles.modalInput}
                onChangeText={(text) => this.handleChangeText(text)} />
            </View>
            <Text style={styles.noPassText}>사용 중인 카테고리 이름입니다.</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}>
                <Text style={styles.buttonNoPassText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handlePrompt}
                style={styles.modalButton}>
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
            </View>
          </View>
          }
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  modalContainer: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(241,243,245)",
    borderWidth: 1,
    borderColor: "rgb(73,80,87)",
    borderRadius: 5,
    paddingVertical: 20,
  },
  modalTitle: {
    fontFamily: "GodoB",
    fontSize: 20,
    color: "rgb(52,58,64)",
    marginBottom: 15,
  },
  modalInputContainer: {
    marginBottom: 5,
    borderBottomWidth:1,
    borderColor: "rgb(134,142,150)"
  },
  modalNoPassInputContainer: {
    borderBottomWidth:1,
    borderColor: "rgb(201,42,42)"
  },
  modalInput: {
    width: 250,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10
  },
  noPassText: {
    color: "rgb(201,42,42)"
  },
  modalButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "rgb(73,80,87)",
    borderRadius: 5
  },
  buttonText: {
    fontFamily: "GodoB",
    fontSize: 14,
    color: "rgb(52,58,64)",
  },
  buttonNoPassText: {
    fontFamily: "GodoB",
    fontSize: 14,
    color: "rgb(173,181,189)",
  }
})
