import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.alignCenter}>
        <AppLogo width={221} height={144} />
        <Text style={styles.headerText}>Log In</Text>
      </View>
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
          <Text style={styles.accountText}>Don’t Have a Accounts</Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  widthContainer: {
    width: width * 0.85,
  },
  alignCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: colors.primary,
    fontSize: 30,
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
    fontSize: 20,
    fontWeight: "400",
  },
  registerText: {
    marginLeft: 5,
    color: colors.primary,
    fontSize: 25,
    fontWeight: "700",
  },
});
export default LoginScreen;
