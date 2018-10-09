import React from "react";
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { SimpleLineIcons } from "@expo/vector-icons";

import NoteScreenContainer from './containers/NoteScreenContainer';
import InitialScreenContainer from "./containers/InitialScreenContainer";
import LoginScreenContainer from "./containers/LoginScreenContainer";
import WritingNotesContainer from "./containers/WritingNotesContainer";

export const NoteScreenScreen = createStackNavigator({
  NoteScreenScreen: {
    screen: NoteScreenContainer,
  }
})

export const TabNavigator = createBottomTabNavigator(
  {
    StackNoteScreen: {
      screen: NoteScreenScreen,
      navigationOptions: ({
        tabBarIcon: () => <SimpleLineIcons name="note" size={28} color="black" />
      })
    },
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'black',
      labelStyle: {
        fontSize: 13,
      },
      style: {
        backgroundColor: 'white',
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
  WritingNotesScreen: {
    screen: WritingNotesContainer,
  }
})
