import React, { useCallback, useEffect, useState } from "react";

// Core Components
import { StatusBar } from "react-native";

// Advanced Components
import NotificationButton from "./components/advanced/NotificationButton/NotificationButton";

// Screens
import FirstStep from "./screens/firstStep/firstStep";
import HomePage from "./screens/homePage/homePage";
import News from "./screens/news/news";
import QrCodeReader from "./screens/qrCodeReader/qrCodeReader";
import Login from "./screens/login/login";
import Profile from "./screens/profile/profile";

// Libraries
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";
import { ApiProvider } from "@hybris-software/use-query";
import { generateApiClient } from "./Api/client";
import AuthProvider from "./vendors/Components/AuthProvider";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Data
import config from "./data/config";
import NewsPost from "./screens/newsPost/newsPost";

// Initialize the Navigation Stack
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

  const TabNavigator = () => {
    return (
      <>
        <NotificationButton />
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Home"
            component={HomePage}
            unmountOnBlur={true}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="home" color={color} size={size} />;
              },
            }}
          />
          <Tab.Screen
            name="News"
            component={News}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="newspaper" color={color} size={size} />
              ),
              unmountOnBlur: true, // Add the unmountOnBlur this tab to avoid keeping the camera working
            }}
          />
          <Tab.Screen
            name="Qr Reader"
            component={QrCodeReader}
            unmountOnBlur={true}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="qr-code" color={color} size={size} />
              ),
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            unmountOnBlur={true}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </>
    );
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
