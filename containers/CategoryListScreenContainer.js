import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Font } from "expo";

import CategoryListComponent from "../components/CategoryListComponent";
import CategoryListHeaderComponent from "../components/CategoryListHeaderComponent";
import CategoryAddModalComponent from "../components/CategoryAddModalComponent";
import CategoryUpdateModalComponent from "../components/CategoryUpdateModalComponent";
import { fetchCategoryListScreen, fetchAddCategory, fetchUpdateCategory, fetchDeleteCategory } from "../thunk/categoryListScreen";
import LoadingContainer from "./LoadingContainer";

class CategoryListScreenContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      text : "",
      category: {},
      check: true,
      fontLoaded: false,
    }
  }
  async componentDidMount() {
    {
      try {
        await Font.loadAsync({
          "BMYEONSUNG": require("../assets/fonts/BMYEONSUNG.ttf"),
          "GodoB": require("../assets/fonts/GodoB.ttf"),
        });
        this.setState({ fontLoaded: true });
        this.props.onMount()
      } catch (e) {
        console.log(e)
      }
    }
  }
  changeText = (text) => {
    this.setState({
      text
    })
  }

  changeCategory = (category) => {
    this.setState({
      category
    })
  }

  changecheck = (text) => {
    const { categoryItem } = this.props
    if (categoryItem.find(item => item.categoryName === text)) {
      this.setState({
        check: false,
      })
    } else {
      this.setState({
        check: true,
      })
    }
  }

  render() {
    const { loading, ...rest } = this.props
    if(loading || !this.state.fontLoaded){
      return (<LoadingContainer/>)
    }
    return(
      <View style={{flex: 1}}>
        <CategoryListHeaderComponent {...rest }/>
        <CategoryListComponent {...rest} changeCategory={this.changeCategory} changeText={this.changeText} />
        <CategoryAddModalComponent {...rest} changeText={this.changeText} text={this.state.text}
          check={this.state.check} changecheck={this.changecheck}/>
        <CategoryUpdateModalComponent {...rest} changeText={this.changeText} category={this.state.category}
          text={this.state.text} changecheck={this.changecheck} check={this.state.check}/>
      </View>
    )
  }
}

export default connect(
  state => ({
    loading: state.categoryListScreen.loading,
    currentCategory: state.categoryListScreen.currentCategory,
    categoryItem: state.categoryListScreen.categoryItem,
    addPrompt: state.categoryListScreen.addPrompt,
    updatePrompt: state.categoryListScreen.updatePrompt,
    check: state.categoryListScreen.check
  }),
  dispatch => ({
    onMount: () => {
      dispatch(fetchCategoryListScreen())
    },
    onAddPrompt: (text) => {
      dispatch(fetchAddCategory(text))
    },
    onUpdatePrompt: (text, category) => {
      dispatch(fetchUpdateCategory(text, category))
    },
    onDeleteButton: (category) => {
      dispatch(fetchDeleteCategory(category))
    },
  })
)(CategoryListScreenContainer)
