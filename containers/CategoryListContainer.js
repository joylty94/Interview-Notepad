import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import CategoryListComponent from "../components/CategoryListComponent";
import CategoryDeleteModalComponent from "../components/CategoryDeleteModalComponent";
import CategoryUpdateModalComponent from "../components/CategoryUpdateModalComponent";

export default class CategoryListContainer extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <CategoryListComponent/>

      </View>
    )
  }
}
