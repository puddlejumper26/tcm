import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CommonDictionary from "./app/Dictionary-Page/CommonDictionary";
import HomeScreen from "./app/HomeScreen/HomeScreen";
import LoginForm from "./app/Login/Login";
import RegistrationForm from "./app/Login/Register";
import CommentComponent from "./app/Comment/CommentComponent";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />

        {/*  Login Page */}
        <Stack.Screen name="Login" component={LoginForm} />

        {/*Registration Page*/}
        <Stack.Screen name="Register" component={RegistrationForm} />

        {/*  Profile Page*/}

        {/*Normal Dictionary Page*/}
        <Stack.Screen name="CommonDictionary" component={CommonDictionary} />
        {/*  Personal Dictionary Page*/}

        <Stack.Screen name="Comments" component={CommentComponent} />
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
