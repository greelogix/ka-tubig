import React, { useState } from "react";
import { userLoginService } from "../../service/authService";
import { Alert } from "react-native";

const UserAuthService = () => {
  const [loading, setLoading] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    email: "basitshahid903@gmail.com",
    password: "password",
  });
  //just for testing these are the valid login credentials

  const getUserLoginService = async () => {
    const checkEmailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (checkEmailValidation.test(registerForm?.email) === false) {
      Alert.alert("Email is not valid");
      return;
    }
    setLoading(true);
    try {
      const response = await userLoginService(registerForm);
      if (response?.data?.code === 200) {
        Alert.alert("Logged in successfully");
      } else {
        Alert.alert("Email and Password are not existed..");
      }
      setLoading(false);
    } catch (error) {
      console.log(error.stack);
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    registerForm,
    setRegisterForm,
    getUserLoginService,
  };
};

export default UserAuthService;
