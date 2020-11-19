import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GameScreen from "./src/screens/GameScreen";
import HomeScreen from "./src/components/HomeScreen";
import AboutScreen from "./src/components/AboutScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
//
function GameTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Play" component={GameScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
