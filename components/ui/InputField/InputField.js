import React from "react";

// Libraries
import { Controller } from "react-hook-form";

// Core Components
import { View, Text, TextInput, StyleSheet } from "react-native";

const InputField = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View style={[styles.container]}>
          <View style={[styles.componentWrapper]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[styles.input, { borderColor: error ? "red" : "#e8e8e8" }]}
              secureTextEntry={secureTextEntry}
            />
          </View>
          <Text style={[styles.textError]}>
            {error && <>{error.message || "Error"} </>}
          </Text>
        </View>
      )}
    />
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
