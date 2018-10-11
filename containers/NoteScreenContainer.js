import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, ScrollView, TouchableHighlight } from "react-native";
import Modal from 'react-native-modalbox';
import { Feather } from "@expo/vector-icons";

import HeaderButtonComponent from "../components/HeaderButtonComponent";
import PlusButtonComponent from "../components/PlusButtonComponent";
import CategoryButtonComponent from "../components/CategoryButtonComponent";

export default class NoteScreenContainer extends Component{
  static navigationOptions = ({ navigation }) => {
    const { parmas = {} } = navigation.state;
    let headerLeft = (
      <CategoryButtonComponent navigation={navigation}/>
    );
    let headerRight = (
      <HeaderButtonComponent/>
    );
    let headerStyle = ({
      backgroundColor: "rgb(145,167,255)"
    });
    return { headerLeft, headerRight, headerStyle }
  }
  _handleModal = () => {
    this.refs.modal1.open()
  }
  componentDidMount() {
    this.props.navigation.setParams({ handleModal: this._handleModal })
  }
  render(){
    const { ...rest } = this.props
    const defaultCategory = [{ category: '메모장' }, { category: '메모장' }]
    return(
      <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        this._handleModal()
      }}>
        <Text>NOTE</Text>
      </TouchableOpacity>
        <PlusButtonComponent {...rest}/>
        <Modal
          ref={"modal1"}
          position={"center"}
          backdrop={false}
          style={styles.modal}>
          <View style={{flex:1, flexDirection:"column", alignContent:"space-between"}}>
            <ScrollView style={{ alignContent:"space-between" }}>
              <FlatList
                data={defaultCategory}
                renderItem={({item, index}) => {
                  return (
                    <TouchableHighlight
                      item={item}
                      index={index}
                      style={styles.modalButton}>
                      <Text style={styles.madalText}>{item.category}</Text>
                    </TouchableHighlight>
                  )
                }}
                keyExtractor={(item, index) => item.category + `${index}`}>
              </FlatList>
            </ScrollView>
            <TouchableHighlight style={styles.modalButton}>
              {/* <Feather name="plus-circle" size={28} color="black"/> */}
              <Text style={styles.madalText}>카테고리 추가</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modal: {
    height: 250,
    width: 300,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  modalButton: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  madalText: {
    textAlign: "center",
    fontSize: 18,
    color: "rgb(52,58,64)"
  }
})
