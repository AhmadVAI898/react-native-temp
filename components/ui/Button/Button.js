import React from "react";

// Core Components
import { Text, StyleSheet, Pressable } from "react-native";

const Button = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  disabled = false,
  isLoading = false,
}) => {
  return (
    <Pressable
      onPress={disabled || isLoading ? undefined : onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
        isLoading || disabled ? styles.containerDisabled : {},
      ]}
      disabled={disabled}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>
        {isLoading ? "Loading..." : text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },

  container_SECONDARY: {
    borderColor: "#3B77",
    backgroundColor: "#4444",

    borderWidth: 2,
  },
  containerDisabled: {
    opacity: 0.7,
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_SECONDARY: {
    color: "white",
  },
});

export default Button;
