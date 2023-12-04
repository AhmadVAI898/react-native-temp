import React from "react";

// Core Components
import { View, Text, Image, Button, StyleSheet } from "react-native";

const WelcomeTab = ({
  image,
  title,
  description,
  nextButtonText = "Next",
  proceedButtonText = "Proceed",
  index,
  setIndex,
  tabsNumber,
  nextScreen,
  navigation,
}) => {
  function tabManager() {
    if (index < tabsNumber - 1) {
      setIndex(index + 1);
    } else {
      // Navigate to next screen
      navigation.navigate(nextScreen);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={image} style={{ width: 200, height: 200 }} />
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Button
        onPress={tabManager}
        title={index === tabsNumber - 1 ? proceedButtonText : nextButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default WelcomeTab;
