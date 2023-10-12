import { StatusBar } from "react-native";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeNavigation from "../navigation/HomeNavigation";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "red",
    background: "white",
  },
};

const RootNavigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
      <HomeNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
