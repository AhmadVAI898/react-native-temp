import React from "react";

// Core Components
import { View, Text, TextInput, StyleSheet } from "react-native";

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
  textError: {
    minHeight: 20,
    paddingVertical: 5,
    width: "100%",
    fontSize: 12,
    textAlign: "left",
    color: "red",
  },
});

export default InputField;
