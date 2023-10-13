import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import AppLogo from "../../assets/icons/AppLogo";
import colors from "../../theme/colors";
import InputPasswordfield from "../../components/InputPasswordField";
import GradientButton from "../../components/GradientButton";
import RememberAndForgotContainer from "./components/RememberAndForgotContainer";
import UserAuthService from "../components/userAuthService";
import FormTextInput from "../../components/FormTextInput";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const LoginScreen = () => {
  const { loading, registerForm, setRegisterForm, getUserLoginService } =
    UserAuthService();
  const [checkEmptyEmailField, setCheckEmptyEmailField] = useState(false);
  const [checkEmptyPasswordField, setCheckEmptyPasswordField] = useState(false);

  const handleLoginService = () => {
    if (
      registerForm?.email?.length === 0 &&
      registerForm?.password?.length === 0
    ) {
      setCheckEmptyEmailField(true);
      setCheckEmptyPasswordField(true);
    } else if (registerForm?.email?.length === 0) {
      setCheckEmptyEmailField(true);
    } else if (registerForm?.password?.length === 0) {
      setCheckEmptyPasswordField(true);
    } else {
      setCheckEmptyEmailField(false);
      setCheckEmptyPasswordField(false);
      getUserLoginService();
    }
  };
  const logoHeight = height * 14.4;
  const logoWidth = width * 22.1;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: colors.white }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <AppLogo width={logoWidth} height={logoHeight} />
        <Text style={styles.headerText}>Log In</Text>
        <View style={styles.credentialsContainer}>
          <View style={styles.widthContainer}>
            <FormTextInput
              headerText="Email"
              placeHolderText={"Enter your Email"}
              name={"email"}
              setRegisterForm={setRegisterForm}
              value={registerForm?.email}
              registerForm={registerForm}
              checkEmptyEmailField={checkEmptyEmailField}
            />
            <InputPasswordfield
              headerText="Password"
              placeHolderText="Enter your Password"
              name={"password"}
              setRegisterForm={setRegisterForm}
              value={registerForm?.password}
              registerForm={registerForm}
              checkEmptyPasswordField={checkEmptyPasswordField}
            />
            <RememberAndForgotContainer />
            <GradientButton
              btnText="Log In"
              onPress={handleLoginService}
              loading={loading}
            />
          </View>
          <View style={[styles.alignInRow, styles.alignCenter]}>
            <Text style={styles.accountText}>Don’t Have a Accounts?</Text>
            <TouchableOpacity style={{ marginLeft: 5 }}>
              <Text style={styles.registerText}>Register</Text>
              <View style={styles.registerDivider} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  widthContainer: {
    width: width * 0.8,
  },
  alignCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: colors.primary,
    fontSize: height * 0.03,
    fontWeight: "700",
    lineHeight: 27,
  },
  credentialsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  alignInRow: {
    marginTop: 20,
    flexDirection: "row",
  },
  accountText: {
    color: colors.gray,
    fontSize: height * 0.02,
    fontWeight: "400",
  },
  registerText: {
    color: colors.primary,
    fontSize: height * 0.02 + 6,
    fontWeight: "700",
    lineHeight: 27,
  },
  registerDivider: {
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    borderColor: colors.primary,
  },
});
export default LoginScreen;
