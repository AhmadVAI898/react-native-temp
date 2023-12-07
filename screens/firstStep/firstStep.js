import React, { useState } from "react";

// Images
import splash from "../../assets/splash.png";

// Core Components
import { View, StyleSheet } from "react-native";

// Advanced Components
import WelcomeTab from "../../components/advanced/welcomeTab/welcomeTab";

const FirstStep = ({ onLayoutRootView, navigation }) => {
  const [index, setIndex] = useState(0);

  const tabs = [
    {
      image: splash,
      title: "Ciao",
      description: "This is a description",
    },
    {
      image: splash,
      title: "Sono",
      description: "This is a description",
    },
    {
      image: splash,
      title: "Io",
      description: "This is a description",
    },
  ];

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <WelcomeTab
        image={tabs[index].image}
        title={tabs[index].title}
        description={tabs[index].description}
        buttonText={tabs[index].buttonText}
        onButtonPress={tabs[index].onButtonPress}
        index={index}
        setIndex={setIndex}
        // nextScreen={"Login"}
        nextScreen={"HomeTab"}
        tabsNumber={tabs.length}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FirstStep;
