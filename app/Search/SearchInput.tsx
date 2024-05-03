import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { fitlerDataEN2CN } from "../Utils/fitlerData";
import { MockData } from "../MockData/mockData";
import CrawlComponent from "../Crawl/Crawl";

const SearchInputComponent = () => {
  // State variables
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [responseText, setResponseText] = useState("");

  const prompt = "test";

  const handleGetResponse = async () => {
    try {
      console.log(11111);
      // const result = await getGPTResponse(prompt);
      // setResponseText(result);
    } catch (error) {
      console.error("Error fetching GPT response:", error);
    }
  };

  // Handle input change
  const handleInputChange = (text: string) => {
    setSearchQuery(text);

    // Filter the data based on the search query
    const filtered = fitlerDataEN2CN(MockData, text);

    if (text === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="获取 GPT 响应" onPress={handleGetResponse} />

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

      {/*  crawl result*/}
      <CrawlComponent />
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
