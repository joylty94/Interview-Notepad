import React from "react";
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { SimpleLineIcons } from "@expo/vector-icons";

import NoteScreenContainer from './containers/NoteScreenContainer';
import InitialScreenContainer from "./containers/InitialScreenContainer";
import LoginScreenContainer from "./containers/LoginScreenContainer";
import WritingNotesContainer from "./containers/WritingNotesContainer";

export const StackNoteScreen = createStackNavigator({
  NoteScreen: {
    screen: NoteScreenContainer,
  },
  WritingNotesScreen: {
    screen: WritingNotesContainer,
    navigationOptions: () => {
      header = null;
      return {header}
    }
  }
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

export const StackLogin = createStackNavigator({
  InitialScreen: {
    screen: InitialScreenContainer
  },
  LoginScreen: {
    screen: LoginScreenContainer
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
})
