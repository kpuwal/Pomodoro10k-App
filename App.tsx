import React from 'react';
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/inter";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Root from "./src/Root";
import Home from "./src/views/Home";
import Settings from "./src/views/Settings";
import Statistics from "./src/views/Statistics";
import GoBackIcon from "./src/views/tabs/GoBackIcon";
import { settingsHeader, statisticsHeader } from "./src/views/tabs/Headers";

const Stack = createStackNavigator();

const NavigationWrapper: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("./assets/Roboto/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/Roboto/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitle: " ",
            headerBackTitleVisible: true,
            headerBackAccessibilityLabel: "back",
            headerBackImage: GoBackIcon,
            headerTintColor: "#29304D",
            headerStyle: {
              backgroundColor: "#EFF0F4",
              shadowOpacity: 0,
            },
          }}
        >
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />
          <Stack.Screen
            name="Settings"
            options={{
              headerShown: true,
              headerTitle: settingsHeader,
            }}
            component={Settings}
          />
          <Stack.Screen
            name="Statistics"
            options={{
              headerShown: true,
              headerTitle: statisticsHeader,
            }}
            component={Statistics}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const App: React.FC = () => {
  return (
    <Root>
      <NavigationWrapper />
    </Root>
  );
};

export default App;
