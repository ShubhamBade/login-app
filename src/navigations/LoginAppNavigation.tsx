import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SendOtpScreen } from "../screens/SendOtpScreen";
import { ValidateotpScreen } from "../screens/ValidateotpScreen";

const Stack = createStackNavigator();

export const LoginAppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"SendOtpScreen"}
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          cardStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Screen name="SendOtpScreen" component={SendOtpScreen} />
        <Stack.Screen name="ValidateotpScreen" component={ValidateotpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
