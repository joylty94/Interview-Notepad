import React from "react";
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { SimpleLineIcons } from "@expo/vector-icons";

import NoteScreenContainer from "./containers/NoteScreenContainer";
import SignUpScreenContainer from "./containers/SignUpScreenContainer";
import SignInScreenContainer from "./containers/SignInScreenContainer";
import WritingNoteScreenContainer from "./containers/WritingNoteScreenContainer";
import CategoryListScreenContainer from "./containers/CategoryListScreenContainer";
import DetailNoteScreenContainer from "./containers/DetailNoteScreenContainer";
import WithAuth from "./containers/WithAuth";
import SharedNotesScreenContainer from "./containers/SharedNotesScreenContainer";
import detailSharedNotesScreenContainer from "./containers/DetailSharedNotesScreenContainer";

export const StackApp = createStackNavigator({
  NoteScreen: {
    screen: NoteScreenContainer,
    navigationOptions: () => {
      header = null;
      return { header }
    }
  },
  WritingNoteScreen: {
    screen: WritingNoteScreenContainer,
    navigationOptions: () => {
      header = null;
      return { header }
    }
  },
  DetailNoteScreen: {
    screen: DetailNoteScreenContainer,
    navigationOptions: () => {
      header = null;
      return { header }
    }
  },
  CategoryListScreen: {
    screen: CategoryListScreenContainer,
    navigationOptions: () => {
      header = null;
      return { header }
    }
  },
  SharedNotesScreen: {
    screen: SharedNotesScreenContainer,
    navigationOptions: () => {
      header = null;
      return { header }
    }
  },
  DetailSharedNotesScreen: {
    screen: detailSharedNotesScreenContainer,
    navigationOptions: () => {
      header = null;
      return { header }
    }
  },
})


export const StackAuth = createStackNavigator({
  SignInScreen: {
    screen: SignInScreenContainer,
    navigationOptions: () => {
      let header = null;
      return { header }
    }
  },
  SignUpScreen: {
    screen: SignUpScreenContainer,
    navigationOptions: () => {
      let header = null;
      return { header }
    }
  },
})

export const SwitchApp = createSwitchNavigator(
  {
    AuthLoading: {
      screen: WithAuth
    },
    App: {
      screen: StackApp
    },
    Auth: {
      screen: StackAuth
    },
  },
  {
    initialRouteName: "AuthLoading",
  }
);
