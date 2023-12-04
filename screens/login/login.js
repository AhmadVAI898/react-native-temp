import React, { useState } from "react";

// Libraries
import { useForm } from "react-hook-form";

// Core Components
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

// UI Components
import InputField from "../../components/ui/InputField/InputField";
import Button from "../../components/ui/Button/Button";
import PasswordInputField from "../../components/ui/PasswordInputField/PasswordInputField";

// Images
import splash from "../../assets/splash.png";

const Login = ({ onLayoutRootView, navigation }) => {
  // Form
  const { control, handleSubmit, formState } = useForm({
    //  make useFrom triggering the validation on change and submit events
    mode: "onChange",
  });
  const { isValid } = formState;

  const handleLogin = () => {
    // Perform login logic here
    navigation.navigate("HomeTab");
  };

  return (
    // KeyboardAvoidingView is used to avoid the keyboard to cover the input fields
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.containerKeyboardAvoidingView}
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Image source={splash} style={{ width: 200, height: 200 }} />
        <InputField
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <PasswordInputField
          control={control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          }}
          placeholder="Password"
        />

        <Button text="Sign In" onPress={handleLogin} disabled={!isValid} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerKeyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    rowGap: 10,
  },
});

export default Login;
