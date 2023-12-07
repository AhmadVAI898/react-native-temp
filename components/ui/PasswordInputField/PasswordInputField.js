import React, { useState } from "react";

// Core Components
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Icons
import { Ionicons } from "@expo/vector-icons";

const PasswordInputField = ({
  placeholder,
  value,
  showError = true,
  errorDetails,
  isValid,
  label,
  setValue = () => {},
  onChange = () => {},
  onBlur = () => {},
  setShowErrors = () => {},
}) => {
  // States
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Consts
  const errorMessageString =
    errorDetails == null
      ? null
      : typeof errorDetails === "object"
      ? errorDetails.message
      : errorDetails;

  return (
    <View style={[styles.container]}>
      {label && <Text style={[styles.computedLabel]}>{label}</Text>}
      <View style={[styles.componentWrapper]}>
        <TextInput
          placeholder={placeholder}
          autoCorrect={false}
          value={value}
          onChangeText={(text) => {
            setValue(text);
            onChange(text);
          }}
          onBlur={(e) => {
            setShowErrors();
            onBlur(e);
          }}
          style={[styles.input, { borderColor: isValid ? "red" : "#e8e8e8" }]}
          secureTextEntry={!isPasswordVisible}
          textContentType={"none"}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.iconContainer}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
            size={25}
            style={styles.iconSvg}
            color="#666"
          />
        </TouchableOpacity>
      </View>
      {showError && (
        <Text style={[styles.textError]}>
          {errorMessageString && errorMessageString}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    height: "auto",
    alignSelf: "stretch",
  },
  componentWrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 50,
    paddingVertical: 25,
    marginBottom: 5,
  },
  computedLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  input: {
    flex: 1,
    width: "100%",
  },

  iconContainer: {
    position: "absolute",
    right: 15,
  },

  iconSvg: {
    marginRight: 5,
  },

  textError: {
    minHeight: 20,
    paddingVertical: 5,
    width: "100%",
    fontSize: 12,
    color: "red",
    textAlign: "left",
  },
});

export default PasswordInputField;
