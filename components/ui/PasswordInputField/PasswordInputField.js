import React, { useState } from "react";

// Core Components
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Libraries
import { Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

const PasswordInputField = ({ control, name, rules = {}, placeholder }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
              style={styles.input}
              secureTextEntry={!isPasswordVisible}
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
