import React from "react";

// Core Components
import { View, Text, TextInput } from "react-native";

// Styles
import styles from "./styles";

const InputField = ({
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
          textContentType={"none"}
        />
      </View>
      {showError && (
        <Text style={[styles.textError]}>
          {errorMessageString && errorMessageString}
        </Text>
      )}
    </View>
  );
};

export default InputField;
