import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import CategoryListComponent from "../components/CategoryListComponent";
import CategoryListHeaderComponent from "../components/CategoryListHeaderComponent";
import CategoryAddModalComponent from "../components/CategoryAddModalComponent";
import { fetchCategoryListScreen, fetchAddCategory } from "../thunk/categoryListScreen";

class CategoryListScreenContainer extends Component{
  componentDidMount() {
    this.props.onMount()
  }
  render() {
    const { ...rest } = this.props
    return(
      <View style={{flex: 1}}>
        <CategoryListHeaderComponent {...rest }/>
        <CategoryListComponent {...rest }/>
        <CategoryAddModalComponent {...rest}/>
      </View>
    )
  }
}

export default connect(
  state => ({
    currentCategory: state.categoryListScreen.currentCategory,
    categoryItem: state.categoryListScreen.categoryItem,
    addPrompt: state.categoryListScreen.addPrompt
  }),
  dispatch => ({
    onMount: () => {
      dispatch(fetchCategoryListScreen())
    },
    onPrompt: (text) => {
      dispatch(fetchAddCategory(text))
    }
  })
)(CategoryListScreenContainer)
