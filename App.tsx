import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TwoColumnTable from "./app/Dictionary-Page/Dictionary";
import HomeScreen from "./app/HomeScreen/HomeScreen";
import LoginForm from "./app/Login/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />

        {/*  Login Page */}
        <Stack.Screen name="Login" component={LoginForm} />

        {/*  Profile Page*/}

        {/*Normal Dictionary Page*/}
        <Stack.Screen name="TwoColumn" component={TwoColumnTable} />
        {/*  Personal Dictionary Page*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});
