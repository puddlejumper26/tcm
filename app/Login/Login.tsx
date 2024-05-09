import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginForm = () => {
  // Initialize state variables for name and email inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle button press (e.g., form submission)
  const handleSubmit = () => {
    // Perform desired action when the button is pressed, such as form submission
    // Here, you can replace the following line with your own logic
    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <View style={styles.container}>
      {/* Text input for name */}
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      {/* Text input for email */}
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      {/* Button to submit the form */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

// Define the styles for the component
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
});

// Export the component as default
export default LoginForm;
