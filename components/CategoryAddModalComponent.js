import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export default class CategoryAddModalComponent extends Component{
  render(){
    return(
      <View>
        <Modal
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          transparent={true}
          isVisible={false}>
          <View>
            <Text>삭제하시겠습니까?</Text>
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
