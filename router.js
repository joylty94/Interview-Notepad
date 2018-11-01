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

export const StackNoteScreen = createStackNavigator({
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
})

export const StackSharedNotesScreen = createStackNavigator({
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

export const TabNavigator = createBottomTabNavigator(
  {
    StackNoteScreen: {
      screen: StackNoteScreen,
      navigationOptions: ({
        tabBarIcon: ({ tintColor }) => <SimpleLineIcons name="note" size={28} color={tintColor} />
      })
    },
    StackShareNotesScreen: {
      screen: StackSharedNotesScreen,
      navigationOptions: ({
        tabBarIcon: ({ tintColor }) => <SimpleLineIcons name="notebook" size={28} color={tintColor}/>
      })
    },
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "rgb(116,192,252)",
      inactiveTintColor: "rgb(73,80,87)",
      showIcon: true,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: "rgb(233,236,239)",
        padding: -10
      },
      showLabel: false,
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
