import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Search from "./app/Search/Search";
import SearchInputComponent from "./app/Search/SearchInput";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      // @ts-ignore
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };

  // @ts-ignore
  return (
    <View style={styles.container}>
      {/*<Search />*/}
      <SearchInputComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
