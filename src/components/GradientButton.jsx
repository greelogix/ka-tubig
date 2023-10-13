import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../theme/colors";

const { height } = Dimensions.get("window");

const GradientButton = ({
  colors = ["#5DBDE0", "#0484FF"],
  btnText = "",
  onPress,
  loading,
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1.2, y: 0.5 }}
      colors={colors}
      style={styles.linearGradient}
    >
      <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
        {loading ? (
          <ActivityIndicator size={"small"} color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{btnText}</Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    height: 50,
    borderRadius: 4,
    marginTop: 20,
    margin: 10,
  },
  buttonText: {
    fontSize: height * 0.02,
    fontWeight: "700",
    lineHeight: 34,
    textAlign: "center",
    color: colors.white,
  },
  btnStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default GradientButton;
