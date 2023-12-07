// Core Components
import { View, Image, StyleSheet, KeyboardAvoidingView } from "react-native";

// UI Components
import InputField from "../../components/ui/InputField/InputField";
import Button from "../../components/ui/Button/Button";
import PasswordInputField from "../../components/ui/PasswordInputField/PasswordInputField";

// Libraries
import ToastManager, { Toast } from "toastify-react-native";
import useQuery from "@hybris-software/use-query";
import useForm from "@hybris-software/use-ful-form";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

// Images
import splash from "../../assets/splash.png";

// Data
import endPoints from "../../data/endPoints";

const Login = ({ onLayoutRootView }) => {
  // Hooks
  const navigation = useNavigation();
  // Form
  const form = useForm({
    inputs: {
      username: {
        validator: (value) => {
          if (!value || value === "") return [false, "This field is required"];
          return [true, ""];
        },
      },
      password: {
        validator: (value) => {
          if (!value || value === "") return [false, "This field is required"];
          return [true, ""];
        },
      },
    },
  });

  // Queries
  const loginApi = useQuery({
    url: endPoints.auth.LOGIN,
    method: "POST",
    executeImmediately: false,
    onSuccess: (response) => {
      SecureStore.setItemAsync("token", response.data.token);
      navigation.navigate("HomeTab");
    },
    onError: (error) => {
      if (error?.response?.status === 422) {
        form.fetchQueryErrors(error.response.data);
      } else {
        Toast.error(error.response.data.message);
      }
    },
  });
  // Functions
  const handleLogin = () => {
    loginApi.executeQuery(form.getApiBody());
  };

  return (
    <KeyboardAvoidingView
      // KeyboardAvoidingView is used to avoid the keyboard to cover the input fields
      behavior="padding"
      style={styles.containerKeyboardAvoidingView}
    >
      <ToastManager textStyle={{ fontSize: 12 }} />

      <View style={styles.container} onLayout={onLayoutRootView}>
        <Image source={splash} style={{ width: 200, height: 200 }} />
        <InputField
          placeholder="Username"
          label="Username"
          {...form.getInputProps("username")}
        />
        <PasswordInputField
          placeholder="Password"
          label="Password"
          {...form.getInputProps("password")}
        />

        <Button
          text="Sign In"
          onPress={handleLogin}
          disabled={!form.isValid()}
          isLoading={loginApi.isLoading}
        />
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
