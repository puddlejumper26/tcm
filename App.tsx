import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StartingPage from "./app/Starting-Page/Starting-Page";

export default function App() {
  // @ts-ignore
  return (
    <View style={styles.container}>
      <StartingPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});
