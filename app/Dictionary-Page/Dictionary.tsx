// should be a list table, could be modified
// based on the personal account

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Button,
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

/**
 * this is only for the two languages (any)
 * @functions
 *  1 direct translation between two languages
 *  2 each column has the reorder functions based on teh alphabets
 */
// @ts-ignore

const TwoColumnTable: React.FC = ({ navigation }) => {
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

  // Render each item (row) in the table
  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.col1}</Text>
      <Text style={styles.cell}>{item.col2}</Text>
    </View>
  );

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

export default TwoColumnTable;
