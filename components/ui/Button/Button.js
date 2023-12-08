import React from "react";

// Core Components
import { Text, StyleSheet, Pressable } from "react-native";

// Styles
import styles from "./styles";

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

export default Button;
