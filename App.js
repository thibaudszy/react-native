// import React, { useRef } from "react";
// import GameScreen from "./src/screens/GameScreen";

// import {
//   Button,
//   Text,
//   Alert,
//   View,
//   ActivityIndicator,
//   StyleSheet,
//   Image,
//   FlatList,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "./src/screens/GameScreen";
import HomeScreen from "./src/components/HomeScreen";

function MyHeader() {
  return (
    <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
        Hello React Native
      </Text>
    </View>
  );
}

function MyFooter() {
  const [value, onChangeText] = React.useState("");
  return (
    <View>
      <View
        style={{
          borderWidth: 2,
          borderColor: "black",
          padding: 20,
          marginBottom: 30,
        }}
      >
        <Text>Hello again!</Text>
      </View>
      <Button
        onPress={() => Alert.alert("Learning RN is so easy")}
        title="Learn More"
        color="#c1262c"
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        placeholder={"placeholder"}
        value={value}
      />
    </View>
  );
}

// export default function App() {
//   const randomNum = useRef(Math.random()).current;

//   return (
//     <FlatList
//       ListHeaderComponent={MyHeader}
//       data={[0, 1, 2, 3, 4]}
//       renderItem={({ item }) => {
//         return (
//           <TouchableOpacity
//             onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
//           >
//             <Image
//               source={{
//                 uri: `https://picsum.photos/500/300?random=${randomNum + item}`,
//               }}
//               style={{ width: "100%", height: 160, marginBottom: 30 }}
//             />
//           </TouchableOpacity>
//         );
//       }}
//       keyExtractor={(item) => String(item)}
//       ListFooterComponent={MyFooter}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default function App() {
//   return <GameScreen />;
// }
const Stack = createStackNavigator();

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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome!" }}
        />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
