import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import colors from "../theme/colors";

const Inputfield = ({ headerText, placeHolderText, text, setText }) => {
  return (
    <View style={styles.marginTop}>
      <Text style={styles.text}>{headerText}</Text>
      <View style={styles.textField}>
        <TextInput
          placeholder={placeHolderText}
          onChangeText={(t) => setText(t)}
          value={text}
          style={styles.input}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  marginTop: {
    margin: 10,
  },
  text: {
    color: colors.darkGray,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 26,
  },
  textField: {
    marginTop: 5,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.primary,
    width: "100%",
  },
  input: {
    flex: 1,
    color: colors.darkGray,
    marginLeft: 5,
  },
});
export default Inputfield;
