import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet, Alert } from "react-native";
import Modal from "react-native-modal";

export default class CategoryAddModalComponent extends Component {
  handlePrompt = () => {
    this.props.changecheck("")
    this.props.onUpdatePrompt("")
  }
  handleUpdate = (text, category) => {
    this.props.onUpdatePrompt(text, category)
  }
  handleDelete = (category) => {
    this.props.onDeleteButton(category)
  }
  handleChangeText = (text) => {
    this.props.changeText(text)
    this.props.changecheck(text)
  }
  render() {
    const { updatePrompt, changeText, category, text, check } = this.props;
    return (
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        underlineColorAndroid="rgb(241,243,245)"
        transparent={true}
        isVisible={updatePrompt}
        onBackdropPress={this.handlePrompt}
        onBackButtonPress={this.handlePrompt}
        style={styles.container}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>카테고리 수정</Text>
          {check
          ?
          <View>
            <View style={styles.modalInputContainer}>
              <TextInput
                underlineColorAndroid="rgb(241,243,245)"
                autoCapitalize="none"
                autoFocus={true}
                style={styles.modalInput}
                onChangeText={(text) => this.handleChangeText(text)}
                value={text}
              />
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                onPress={() => this.handleUpdate(text, category)}
                style={styles.modalButton}>
                <Text style={styles.buttonText}>수정</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.handleDelete(category)}
                style={styles.modalButton}>
                <Text style={styles.buttonText}>삭제</Text>
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
                onChangeText={(text) => this.handleChangeText(text)}
                value={text}
              />
            </View>
            <Text style={styles.noPassText}>사용 중인 카테고리 이름입니다.</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}>
                <Text style={styles.buttonNoPassText}>수정</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.handleDelete(category)}
                style={styles.modalButton}>
                <Text style={styles.buttonText}>삭제</Text>
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
    fontWeight: "400",
    fontSize: 20,
    color: "rgb(52,58,64)",
    marginBottom: 20
  },
  modalInputContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "rgb(134,142,150)"
  },
  modalNoPassInputContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "rgb(201,42,42)"
  },
  modalInput: {
    width: 250,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
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
    fontWeight: "300",
    fontSize: 14,
    color: "rgb(52,58,64)",
  },
  noPassText: {
    fontFamily: "GodoB",
    color: "rgb(201,42,42)"
  },
  buttonNoPassText: {
    fontFamily: "GodoB",
    fontWeight: "300",
    fontSize: 14,
    color: "rgb(173,181,189)",
  }
})
