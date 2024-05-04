import { StyleSheet, View } from "react-native";
import SearchInputComponent from "../Search/SearchInput";
import AppHeader from "../Header/Header";
import TwoColumnTable from "../Dictionary-Page/Dictionary";

export default function StartingPage() {
  // @ts-ignore
  return (
    <View style={styles.container}>
      <AppHeader />
      <TwoColumnTable />
      <SearchInputComponent />
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
