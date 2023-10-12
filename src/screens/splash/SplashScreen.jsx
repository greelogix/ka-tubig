import { View, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
import { StackActions } from "@react-navigation/native";
import AppLogo from "../../assets/icons/AppLogo";

const SplashScreen = ({ navigation }) => {
  const navRef = useRef(false);

  const _handleNavigation = useCallback(() => {
    const replace = StackActions.replace("LoginScreen");
    navigation.dispatch(replace);
    navRef.current = true;
  }, [navigation]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (!navRef.current) {
        _handleNavigation();
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [_handleNavigation]);

  return (
    <View style={styles.container}>
      <AppLogo />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SplashScreen;
