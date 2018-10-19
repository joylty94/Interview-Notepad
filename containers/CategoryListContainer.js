import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import CategoryListComponent from "../components/CategoryListComponent";
import CategoryDeleteModalComponent from "../components/CategoryDeleteModalComponent";
import CategoryUpdateModalComponent from "../components/CategoryUpdateModalComponent";
import CategoryListHeaderComponent from "../components/CategoryListHeaderComponent";

export default class CategoryListContainer extends Component{
  render(){
    const { ...rest } = this.props
    return(
      <View style={{flex: 1}}>
        <CategoryListHeaderComponent {...rest }/>
        <CategoryListComponent {...rest }/>
        <CategoryDeleteModalComponent {...rest }/>
        <CategoryUpdateModalComponent {...rest }/>
      </View>
    )
  }
}
