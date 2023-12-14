import React, { useCallback, useEffect, useState } from "react";

// Core Components
import { StatusBar } from "react-native";

// Advances Components
import TabNavigator from "./components/advanced/tabNavigator/tabNavigator";

// Screens
import { FirstStep, Login, NewsPost } from "./screens/index";

// Libraries
import * as SplashScreen from "expo-splash-screen";
import { ApiProvider } from "@hybris-software/use-query";
import { generateApiClient } from "./Api/client";
import AuthProvider from "./vendors/Components/AuthProvider";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Data
import config from "./data/config";

// Initialize the Navigation Stack
const Stack = createNativeStackNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const apiClient = generateApiClient({
    baseUrl: config.API_BASE_URL,
    authorizationHeader: "Authorization",
    authorizationPrefix: "Token ",
  });
  // State to indicate if the app is ready or not
  const [appIsReady, setAppIsReady] = useState(false);
  const [isFirstLogin, setIsFirstLogin] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!

        setIsFirstLogin(true);
        // Here you can check if the user has already logged in or not, and set the state accordingly
        // setIsFirstLogin(true) or setIsFirstLogin(false)
        // This allow you to show the welcome screen only the first time the user opens the app
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    // Set the status bar style to 'dark-content' for iOS
    if (Platform.OS === "ios") {
      StatusBar.setBarStyle("dark-content");
    }
    // #TODO : check the statusBar style for Android devices
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // Render the app only if appIsReady is true
  if (!appIsReady) {
    return null;
  }

  // Default options for the Stack Navigator
  const screenOptions = {
    headerShown: false,
  };

  return (
    <ApiProvider apiClient={apiClient}>
      <AuthProvider apiClient={apiClient} authUrl="auth/user/">
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={isFirstLogin ? "Welcome" : "HomeTab"}
            screenOptions={screenOptions}
          >
            <Stack.Screen name="Welcome" options={screenOptions}>
              {(props) => (
                <FirstStep {...props} onLayoutRootView={onLayoutRootView} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Login" options={screenOptions}>
              {(props) => (
                <Login {...props} onLayoutRootView={onLayoutRootView} />
              )}
            </Stack.Screen>
            <Stack.Screen name="HomeTab" options={screenOptions}>
              {(props) => (
                <TabNavigator {...props} onLayoutRootView={onLayoutRootView} />
              )}
            </Stack.Screen>
            <Stack.Screen name="NewsPost" options={screenOptions}>
              {(props) => (
                <NewsPost {...props} onLayoutRootView={onLayoutRootView} />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </ApiProvider>
  );
}
