import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../theme/colors";
import HideIcon from "../assets/icons/HidePasswordIcon";

const InputPasswordfield = ({
  headerText,
  placeHolderText,
  name,
  setRegisterForm,
  value,
  registerForm,
  checkEmptyPasswordField,
}) => {
  const [isHide, setIsHide] = useState(true);
  const handleRegisterFormChange = (text, n) => {
    setRegisterForm({
      ...registerForm,
      [n]: text,
    });
  };

  return (
    <View style={styles.marginTop}>
      <Text style={styles.text}>{headerText}</Text>
      <View
        style={[
          styles.textField,
          {
            borderColor: checkEmptyPasswordField ? colors.red : colors.primary,
          },
        ]}
      >
        <TextInput
          placeholder={placeHolderText}
          secureTextEntry={isHide}
          onChangeText={(t) => handleRegisterFormChange(t, name)}
          value={value}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.alignIcon}
          onPress={() => setIsHide(!isHide)}
        >
          <HideIcon />
        </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  input: {
    flex: 1,
    color: colors.darkGray,
    marginLeft: 5,
  },
  alignIcon: {
    marginRight: 8,
    marginLeft: 10,
    width: "7%",
  },
});
export default InputPasswordfield;
