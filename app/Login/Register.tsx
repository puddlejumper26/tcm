import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as Google from "expo-auth-session/providers/google";

const RegistrationForm = () => {
  // Initialize state variables for name, email, and password inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Set up Google authentication
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId: "YOUR_ANDROID_CLIENT_ID",
  //   iosClientId: "YOUR_IOS_CLIENT_ID",
  // });

  // Function to handle registration form submission
  const handleRegistration = () => {
    // Perform desired action when the registration form is submitted
    // For instance, you can send the data to your backend or database
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    Alert.alert("Registration", `Name: ${name}, Email: ${email}`);
  };

  // // Handle Google login response
  // if (response?.type === "success") {
  //   const { access_token } = response.params;
  //   // Use the access token to fetch Google profile data or perform other actions
  //   console.log("Google access token:", access_token);
  // }

  return (
    <View style={styles.container}>
      {/* Name input */}
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      {/* Email input */}
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      {/* Password input */}
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      {/* Submit button for registration */}
      <Button title="Register" onPress={handleRegistration} />

      {/* Google login button */}
      {/*<TouchableOpacity*/}
      {/*  style={styles.googleButton}*/}
      {/*  onPress={() => promptAsync()}*/}
      {/*>*/}
      {/*<Text style={styles.googleButtonText}>Login with Google</Text>*/}
      {/*</TouchableOpacity>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
    marginBottom: 12,
  },
  googleButton: {
    marginTop: 16,
    backgroundColor: "#4285F4",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  googleButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default RegistrationForm;
