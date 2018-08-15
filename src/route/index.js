import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import Home from "../screen/index";
import Sidebar from "../assets/module/Sidebar";
import Details from "../screen/Details";
import List from "../screen/List";
import NetworkNotice from "../screen/NetworkNotice";

const navigation = createStackNavigator(
  {
    List: List,
    NetworkNotice: NetworkNotice,
    Details: Details,
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
