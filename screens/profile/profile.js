// Core components
import { Text, View, Image } from "react-native";

// UO Components
import { Button, InputField } from "../../components/ui";

// Libraries
import RNPickerSelect from "react-native-picker-select";
import * as SecureStore from "expo-secure-store";
import useQuery from "@hybris-software/use-query";
import ToastManager, { Toast } from "toastify-react-native";

// Data
import endPoints from "../../data/endPoints";

// Assets
import profile from "../../assets/profile.png";

// Styles
import { styles, pickerStyle } from "./styles";

const Profile = ({ navigation }) => {
  // Queries
  const logoutAPI = useQuery({
    url: endPoints.auth.LOGOUT,
    method: "POST",
    executeImmediately: false,
    onSuccess: (response) => {
      SecureStore.deleteItemAsync("token");
      navigation.navigate("Login");
    },
    onError: (error) => {
      Toast.error("Something went wrong, Please try agin later.");
    },
  });
  // Functions
  const handleLogout = () => {
    logoutAPI.executeQuery();
  };
  return (
    <View style={styles.container}>
      <ToastManager textStyle={{ fontSize: 12 }} />
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={profile} />
      <View style={styles.body}>
        <Text style={styles.name}>ALi Molhem</Text>
        <Text style={styles.info}>@ali.molhem</Text>
      </View>
      <View style={[styles.wrapper]}>
        <InputField
          placeholder="Email"
          label="Email"
          value="ali.molhem@gmail.com"
          readOnly={true}
        />
        <Text style={[styles.computedLabel]}>App Language</Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          style={pickerStyle}
          items={[
            { label: "English", value: "EN" },
            { label: "French", value: "FR" },
            { label: "Italian", value: "IT" },
          ]}
        />
      </View>
      <Button
        text="Log out"
        type="SECONDARY"
        onPress={handleLogout}
        isLoading={logoutAPI.isLoading}
      />
    </View>
  );
};
export default Profile;
