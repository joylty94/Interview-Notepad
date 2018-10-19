import React, { Component } from "react";
import { View, Text, Textinput, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

export default class CategoryUpdateModalComponent extends Component {
  render() {
    return (
      <View>
        <Modal
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          transparent={true}
          isVisible={false}>
          <View>
            <Textinput
              placeholder="category"
              placeholderTextColor="rgb(134,142,150)"
              underlineColorAndroid="#fff"/>
            <View>
              <TouchableOpacity>
                <Text>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
