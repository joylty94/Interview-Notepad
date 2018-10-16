import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, ScrollView, TouchableHighlight } from "react-native";

import HeaderButtonComponent from "../components/HeaderButtonComponent";
import PlusButtonComponent from "../components/PlusButtonComponent";
import CategoryButtonComponent from "../components/CategoryButtonComponent";
import CategoryListModalComponent from "../components/CategoryListModalComponent";

export default class NoteScreenContainer extends Component{
  static navigationOptions = ({ navigation }) => {
    console.log(navigation)
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
  render(){
    const { ...rest } = this.props
    return(
      <View style={styles.container}>
        <Text>NOTE</Text>
        <PlusButtonComponent {...rest}/>
        <CategoryListModalComponent {...rest} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
