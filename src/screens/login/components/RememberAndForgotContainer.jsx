import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import colors from "../../../theme/colors";

const RememberAndForgotContainer = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.alignCheckbox}>
      <View style={styles.alignRow}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? colors.primary : undefined}
        />
        <Text style={styles.rememberText}>remember me</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password</Text>
        <View style={styles.forgotDivider} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  alignCheckbox: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  alignRow: {
    flexDirection: "row",
    alignItem: "center",
  },
  alignForgotBtn: {
    alignItems: "flex-end",
    marginRight: 10,
  },
  forgotText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 27,
  },
  forgotDivider: {
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    borderColor: colors.primary,
  },
  rememberText: {
    marginLeft: 10,
    color: "#4D4C4C",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 20,
  },
});
export default RememberAndForgotContainer;
