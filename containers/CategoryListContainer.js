import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import CategoryListComponent from "../components/CategoryListComponent";
import CategoryListHeaderComponent from "../components/CategoryListHeaderComponent";

export default class CategoryListContainer extends Component{
  render(){
    const { ...rest } = this.props
    return(
      <View style={{flex: 1}}>
        <CategoryListHeaderComponent {...rest }/>
        <CategoryListComponent {...rest }/>
      </View>
    )
  }
}
