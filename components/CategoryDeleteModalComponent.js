import React, { Component } from "react";
import { View, Modal, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class CategoryDeleteModalComponent extends Component{
  render(){
    return(
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={false}>
          <View>
            <Text>삭제하시겠습니까?</Text>
            <View>

            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
