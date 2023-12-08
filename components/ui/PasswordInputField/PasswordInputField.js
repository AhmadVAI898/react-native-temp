import React, { useState } from "react";

// Core Components
import { View, Text, TextInput, TouchableOpacity } from "react-native";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Styles
import styles from "./styles";

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

export default PasswordInputField;
