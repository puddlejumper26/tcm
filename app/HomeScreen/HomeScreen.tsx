import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import SearchInputComponent from "../Search/SearchInput";

const HomeScreen = ({ navigation }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle the burger menu toggle
  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const pressTwoColumn = () => {
    navigation.navigate("CommonDictionary");
    setMenuOpen(false);
  };

  const pressLogin = () => {
    navigation.navigate("Login");
    setMenuOpen(false);
  };

  // @ts-ignore
  return (
    <View>
      <View style={styles.header}>
        {/* Burger menu */}
        <TouchableOpacity style={styles.burgerMenu} onPress={handleMenuToggle}>
          <View style={styles.burgerLine} />
          <View style={styles.burgerLine} />
          <View style={styles.burgerLine} />
        </TouchableOpacity>

        {/* Logo in the middle */}
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: "https://your-logo-url.com/logo.png" }} // Replace with your logo URL
            style={styles.logo}
          />
        </View>

        {/* Placeholder for right-side icons or empty space */}
        <View style={styles.rightContainer}>
          <Text>Avatar</Text>
        </View>

        {/* The menu content */}
        {menuOpen && (
          <View style={styles.menu}>
            <Text style={styles.menuItem} onPress={pressLogin}>
              Login
            </Text>
            <Text style={styles.menuItem} onPress={pressTwoColumn}>
              Common Dictionary
            </Text>

            {/*Could only be seen after logged in */}
            <Text style={styles.menuItem}>Profile</Text>
            <Text style={styles.menuItem}>Personal Dictionary</Text>
            <Text style={styles.menuItem}>Log Out</Text>
          </View>
        )}
      </View>
      {/*Search*/}
      <SearchInputComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    zIndex: 99,
  },
  burgerMenu: {
    padding: 10,
  },
  burgerLine: {
    width: 25,
    height: 3,
    backgroundColor: "black",
    marginVertical: 2,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  rightContainer: {
    width: 40, // Can adjust this width if you want to add icons
  },
  menu: {
    position: "absolute",
    top: 60, // Adjust this value as needed
    left: 0,
    right: 0,
    backgroundColor: "#f8f8f8",
    padding: 10,
    zIndex: 10, // Ensure the menu is on top
  },
  menuItem: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default HomeScreen;
