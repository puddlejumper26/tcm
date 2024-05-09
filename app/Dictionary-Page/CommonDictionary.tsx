import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Button,
  Alert,
} from "react-native";

type DataItem = {
  id: number;
  col1: string;
  col2: string;
};

const initialData: DataItem[] = [
  { id: 1, col1: "Apple", col2: "Banana" },
  { id: 2, col1: "Orange", col2: "Pineapple" },
  { id: 3, col1: "Grapes", col2: "Mango" },
  // Add more data rows as needed
];

const CommonDictionary: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [sortedData, setSortedData] = useState<DataItem[]>(initialData);
  const [col1SortOrder, setCol1SortOrder] = useState<"asc" | "desc" | null>(
    null
  );
  const [col2SortOrder, setCol2SortOrder] = useState<"asc" | "desc" | null>(
    null
  );

  // Function to handle sorting by column 1
  const sortCol1 = () => {
    const newOrder = col1SortOrder === "asc" ? "desc" : "asc";
    setCol1SortOrder(newOrder);
    const sorted = [...sortedData].sort((a, b) => {
      if (newOrder === "asc") {
        return a.col1.localeCompare(b.col1);
      } else {
        return b.col1.localeCompare(a.col1);
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
        return a.col2.localeCompare(b.col2);
      } else {
        return b.col2.localeCompare(a.col2);
      }
    });
    setSortedData(sorted);
  };

  // Render each item (row)
  const renderItem = ({ item }: { item: DataItem }) => (
    <TouchableOpacity
      style={styles.row}
      onLongPress={() => handleLongPress(item)}
    >
      <Text style={styles.cell}>{item.col1}</Text>
      <Text style={styles.cell}>{item.col2}</Text>
    </TouchableOpacity>
  );

  // Long press event handler
  const handleLongPress = (item: DataItem) => {
    // Handle long press event; here we show the row data in an alert dialog
    Alert.alert(
      "Row Data",
      `ID: ${item.id}\nColumn 1: ${item.col1}\nColumn 2: ${item.col2}`
    );
    // Add logic for sending data, e.g., sending data through a network request
  };

  return (
    <View style={styles.container}>
      {/* Header row with sort buttons */}
      <View style={styles.row}>
        <TouchableOpacity onPress={sortCol1} style={styles.cell}>
          <Text>
            Column 1
            {col1SortOrder === "asc"
              ? " 🔼"
              : col1SortOrder === "desc"
              ? " 🔽"
              : ""}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={sortCol2} style={styles.cell}>
          <Text>
            Column 2
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
        keyExtractor={(item) => item.id.toString()}
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
