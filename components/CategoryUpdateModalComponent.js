import React, { Component } from "react";
import { View, Modal, Text, Textinput, TouchableOpacity, StyleSheet } from "react-native";

export default class CategoryUpdateModalComponent extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={false}>
          <View>
            <Textinput
              placeholder="질문을 입력하세요"
              //placeholder={`${category}`}
              //value
              placeholderTextColor="rgb(134,142,150)"
              underlineColorAndroid="#fff"/>
            <View>
              <TouchableOpacity>
                <Text>삭제</Text>
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
