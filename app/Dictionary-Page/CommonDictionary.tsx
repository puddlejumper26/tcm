import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import axios from "axios";

const dotenv = require("dotenv");

import { DICTIONARY_DATA_TYPE } from "../Utils/dataType";

// const COMMON_DIC_FETCH_URL = process.env["COMMON_DIC_FETCH_URL "];

const CommonDictionary: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [loaded, setLoading] = useState(false);
  const [sortedData, setSortedData] = useState<DICTIONARY_DATA_TYPE[]>([]);
  const [col1SortOrder, setCol1SortOrder] = useState<"asc" | "desc" | null>(
    null
  );
  const [col2SortOrder, setCol2SortOrder] = useState<"asc" | "desc" | null>(
    null
  );

  useEffect(() => {
    fetchData();
  }, [loaded]);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/getData")
      .then((data) => {
        if (!!data.data) {
          setSortedData(data.data);
          setLoading(true);
        }
      })
      .catch((e) => console.error(e));
  };

  // Function to handle sorting by column 1
  const sortCol1 = () => {
    const newOrder = col1SortOrder === "asc" ? "desc" : "asc";
    setCol1SortOrder(newOrder);
    const sorted = [...sortedData].sort((a, b) => {
      if (newOrder === "asc") {
        return a.Chinese_character.localeCompare(b.Chinese_character);
      } else {
        return b.Chinese_character.localeCompare(a.Chinese_character);
      }
    });
    setSortedData(sorted);
  };

  // Function to handle sorting by column 2
  const sortCol2 = () => {
    const newOrder = col2SortOrder === "asc" ? "desc" : "asc";
    setCol2SortOrder(newOrder);
    const sorted = [...sortedData].sort((a, b) => {
      if (newOrder === "asc") {
        return a.English_character.localeCompare(b.English_character);
      } else {
        return b.English_character.localeCompare(a.English_character);
      }
    });
    setSortedData(sorted);
  };

  // Render each item (row)
  const renderItem = ({ item }: { item: DICTIONARY_DATA_TYPE }) => (
    <TouchableOpacity
      style={styles.row}
      onLongPress={() => handleLongPress(item)}
    >
      <Text style={styles.cell}>{item.Chinese_character}</Text>
      <Text style={styles.cell}>{item.English_character}</Text>
    </TouchableOpacity>
  );

  // Long press event handler
  const handleLongPress = (item: DICTIONARY_DATA_TYPE) => {
    // Handle long press event; here we show the row data in an alert dialog
    Alert.alert(
      "Row Data",
      `ID: ${item._id}\nColumn 1: ${item.Chinese_character}\nColumn 2: ${item.English_character}`
    );
    // Add logic for sending data, e.g., sending data through a network request
  };

  return (
    <View style={styles.container}>
      {/* Header row with sort buttons */}
      <View style={styles.row}>
        <TouchableOpacity onPress={sortCol1} style={styles.cell}>
          <Text>
            Chinese
            {col1SortOrder === "asc"
              ? " 🔼"
              : col1SortOrder === "desc"
              ? " 🔽"
              : ""}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={sortCol2} style={styles.cell}>
          <Text>
            English
            {col2SortOrder === "asc"
              ? " 🔼"
              : col2SortOrder === "desc"
              ? " 🔽"
              : ""}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Data rows */}
      <FlatList
        data={sortedData}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
      />

      {/* Button to navigate to the "Home" page */}
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CommonDictionary;
