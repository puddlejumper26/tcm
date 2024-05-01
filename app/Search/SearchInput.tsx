import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";
import { fitlerData } from "../Utils/fitlerData";
import { MockData } from "../MockData/mockData";

const SearchInputComponent = () => {
  // State variables
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]);

  // Handle input change
  const handleInputChange = (text: any) => {
    setSearchQuery(text);

    // Filter the data based on the search query
    const filtered = fitlerData(MockData, text);
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Search input */}
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleInputChange}
      />
      {/*search button*/}
      {/*<View>*/}
      {/*  <Button title="Press me" onPress={handleInputChange} />*/}
      {/*</View>*/}
      {/* List of filtered items */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.English_character}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  item: {
    padding: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default SearchInputComponent;
