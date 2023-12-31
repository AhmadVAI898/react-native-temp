import { useState } from "react";

// Core components
import { Text, View, Image, Alert } from "react-native";

// UO Components
import { Button, InputField } from "../../components/ui";

// Libraries
import useUser from "./../../vendors/Hooks/useUser";

import RNPickerSelect from "react-native-picker-select";
import * as SecureStore from "expo-secure-store";
import useQuery from "@hybris-software/use-query";
import ToastManager, { Toast } from "toastify-react-native";

// Constants
import endPoints from "../../data/endPoints";

// Assets
import profile from "../../assets/profile.png";

// Styles
import { styles, pickerStyle } from "./styles";

const Profile = ({ navigation }) => {
  // States
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  // Hooks
  const { userInfo } = useUser();

  // Queries
  const logoutAPI = useQuery({
    url: endPoints.auth.LOGOUT,
    method: "POST",
    executeImmediately: false,
    onSuccess: (response) => {
      SecureStore.deleteItemAsync("token").then(navigation.navigate("Login"));
    },
    onError: (error) => {
      Toast.error("Something went wrong, Please try agin later.");
    },
  });

  // Functions
  const showConfirmDialog = () => {
    return Alert.alert("Are your sure?", "Are you sure you want to Logout?", [
      {
        text: "Yes",
        onPress: () => {
          logoutAPI.executeQuery();
        },
      },
      // The "No" button do nothing but dismiss the alert box
      {
        text: "No",
      },
    ]);
  };
  return (
    <>
      <ToastManager textStyle={{ fontSize: 12 }} />
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={profile} />
      <View style={styles.body}>
        <Text style={styles.name}>
          {userInfo?.firstName} {userInfo?.lastName}
        </Text>
        <Text style={styles.info}>@{userInfo?.username}</Text>
      </View>
      <View style={[styles.wrapper]}>
        <InputField
          placeholder="Email"
          label="Email"
          value={userInfo?.email}
          readOnly={true}
        />
        <Text style={[styles.computedLabel]}>App Language</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedLanguage(value)}
          style={pickerStyle}
          value={selectedLanguage}
          items={[
            { label: "English", value: "EN" },
            { label: "French", value: "FR" },
            { label: "Italian", value: "IT" },
          ]}
        />
      </View>
      <View style={styles.bottom}>
        <Button
          text="Log out"
          type="DANGER"
          onPress={showConfirmDialog}
          isLoading={logoutAPI?.isLoading}
        />
      </View>
    </>
  );
};
export default Profile;
