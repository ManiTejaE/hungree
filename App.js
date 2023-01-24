import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import Text from "./src/components/typography/text.component";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";

const Settings = () => (
  // <SafeAreaView>
  <Text>Settings</Text>
  // </SafeAreaView>
);
const Map = () => (
  <SafeAreaView>
    <Text>Map</Text>
  </SafeAreaView>
);

const TAB_ICON = {
  Restaurants: { focused: "restaurant", icon: "restaurant-outline" },
  Maps: { focused: "map", icon: "map-outline" },
  Settings: { focused: "settings", icon: "settings-outline" },
};

const tabBarIcon = (iconName, size, color) => (
  <Ionicons name={iconName} size={size} color={color} />
);

const screenOptions = ({ route }) => {
  const focusedIcon = TAB_ICON[route.name]?.focused;
  const normalIcon = TAB_ICON[route.name]?.icon;
  return {
    tabBarIcon: ({ focused, color, size }) => (
      <Ionicons
        name={focused ? focusedIcon : normalIcon}
        size={size}
        color={color}
      />
    ),
  };
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                ...screenOptions({ route }),
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Maps" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
