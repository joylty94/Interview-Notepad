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

export const StackNoteScreen = createStackNavigator({
  NoteScreen: {
    screen: NoteScreenContainer,
    navigationOptions: () => {
      header = null;
      return { header }
    }
  },
  WritingNotesScreen: {
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
})

export const TabNavigator = createBottomTabNavigator(
  {
    StackNoteScreen: {
      screen: StackNoteScreen,
      navigationOptions: ({
        tabBarIcon: () => <SimpleLineIcons name="note" size={28} color="black" />
      })
    },
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'rbg(52,58,64)',
      labelStyle: {
        fontSize: 13,
      },
      style: {
        backgroundColor: 'rgb(248,249,250)',
        padding: -10
      },
      showLabel: false
    },
  // order: [Settings, Home, Cloud, Info],
  }
)

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

export const StackApp = createStackNavigator({
  TabScreen: {
    screen: TabNavigator,
    navigationOptions: () => {
      let header = null;
      return { header }
    }
  },
  CategoryListScreen: {
    screen: CategoryListScreenContainer,
    navigationOptions: () => {
      header = null;
      return { header }
    }
  }
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
