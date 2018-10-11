import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, BackHandler } from "react-native";

import HeaderButtonComponent from "../components/HeaderButtonComponent";
import PlusButtonComponent from "../components/PlusButtonComponent";
import CategoryButtonComponent from "../components/CategoryButtonComponent";

export default class NoteScreenContainer extends Component{
  static navigationOptions = ({ navigation }) => {
    let headerLeft = (
      <CategoryButtonComponent/>
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
    console.log(this.props.navigation)
    return(
      <View style={styles.container}>
        <Text>NOTE</Text>
        <PlusButtonComponent {...rest}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
