import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen({ route, navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
        }}
      >
        This is an awesome game I developed using React Native, React Navigation
        and my phones accelerometer!
      </Text>
    </View>
  );
}
