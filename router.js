import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import NoteScreenContainer from './containers/NoteScreenContainer';
import InitialScreenContainer from "./containers/InitialScreenContainer";
import LoginScreenContainer from "./containers/LoginScreenContainer";

let routeConfigs = {
  Note: {
    screen: NoteScreenContainer
  },
  // SharedNotes: {
  //   screen: SharedNotesContainer,
  // },
  // Test: {
  //   screen: TestContainer,
  // }
};
let tabNavigatorConfig = {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'blue',
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: 'lightgray',
      padding: -10
    },
    // showLabel: false
  },
  // order: [Settings, Home, Cloud, Info],
};

export const TabNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig)

export const StackLogin = createStackNavigator({
  InitialScreen: {
    screen: InitialScreenContainer,
  },
  LoginScreen: {
    screen: LoginScreenContainer
  },
})

export const StackApp = createStackNavigator({
  StackLoginScreen: {
    screen: StackLogin,
    navigationOptions: {
      header: null
    }
  },
  TabScreen: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  }
})


