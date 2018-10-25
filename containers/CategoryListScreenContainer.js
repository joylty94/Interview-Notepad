import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import CategoryListComponent from "../components/CategoryListComponent";
import CategoryListHeaderComponent from "../components/CategoryListHeaderComponent";
import { fetchCategoryListScreen } from "../thunk/categoryListScreen";

class CategoryListScreenContainer extends Component{
  componentDidMount() {
    this.props.onMount()
  }
  render(){
    const { ...rest, } = this.props
    console.log("요거", this.props.currentCategory, this.props.categoryItem)
    return(
      <View style={{flex: 1}}>
        <CategoryListHeaderComponent {...rest }/>
        <CategoryListComponent {...rest }/>
      </View>
    )
  }
}

export default connect(
  state => ({
    currentCategory: state.categoryListScreen.currentCategory,
    categoryItem: state.categoryListScreen.categoryItem
  }),
  dispatch => ({
    onMount: () => {
      dispatch(fetchCategoryListScreen())
    }
  })
)(CategoryListScreenContainer)
