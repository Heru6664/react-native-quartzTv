import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import Home from "../screen/index";
import Sidebar from "../assets/module/Sidebar";

const navigation = createStackNavigator(
  {
    Home: Home
  },
  {
    headerMode: "none",
    initialRouteName: "Home"
  }
);

const Root = createDrawerNavigator(
  {
    navigation: navigation
  },
  {
    contentComponent: props => {
      const navigate = route => {
        props.navigation.navigate(route);
        props.navigation.dispatch(DrawerActions.closeDrawer());
      };
      return <Sidebar handlePress={navigate} {...props} />;
    }
  }
);

export default Root;
