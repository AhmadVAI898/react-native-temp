// Core Components
import {
  View,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";

// UI Components
import {
  InputField,
  Button,
  PasswordInputField,
} from "../../components/ui/index";

// Libraries
import ToastManager, { Toast } from "toastify-react-native";
import useQuery from "@hybris-software/use-query";
import useForm from "@hybris-software/use-ful-form";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import AuthRoute from "../../vendors/Components/AuthRoute";

// Images
import splash from "../../assets/splash.png";

// Data
import endPoints from "../../data/endPoints";

// Styles
import styles from "./styles";

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
  const loginAPI = useQuery({
    url: endPoints.auth.LOGIN,
    method: "POST",
    executeImmediately: false,
    onSuccess: (response) => {
      SecureStore.setItemAsync("token", response.data.token);
      navigation.navigate("HomeTab");
    },
    onError: (error) => {
      console.log(error);
      if (error?.response?.status === 422) {
        form.fetchQueryErrors(error.response.data);
      } else {
        if (error?.response?.data?.message) {
          Toast.error(error?.response?.data?.message);
        } else {
          console.log(error);
          Toast.error("Something went wrong, Please try agin later. ");
        }
      }
    },
  });

  // Functions
  const handleLogin = () => {
    loginAPI.executeQuery(form.getApiBody());
  };

  return (
    <AuthRoute
      minimumLoadingTime={100}
      loader={
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#aaa" />
        </View>
      }
      forLoggedUser={false}
      action={() => {
        navigation.navigate("HomeTab");
      }}
    >
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
            isLoading={loginAPI.isLoading}
          />
        </View>
      </KeyboardAvoidingView>
    </AuthRoute>
  );
};

export default Login;
