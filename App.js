import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SCREENS } from "./const/screens";
import MainScreen from "./screens/main-screen/main-screen";
import WelcomeScreen from "./screens/welcome-screen/welcome-screen";
import { theme } from "./theme";

const queryClient = new QueryClient();

const { text } = theme.dark;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <StatusBar style="light" />
          <Stack.Navigator>
            <Stack.Screen
              name={SCREENS.WELCOME}
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={SCREENS.MAIN}
              component={MainScreen}
              options={{
                headerShown: true,
                headerBackVisible: false,
                headerTransparent: true,
                headerTitleStyle: {
                  color: text,
                },
                title: "Your Pull Requests",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

const styles = {
  container: {
    flexGrow: 1,
  },
};
