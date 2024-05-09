import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const CrawlComponent = () => {
  const [data, setData] = useState(null);
  const [hasPrinted, setHasPrinted] = useState(false); // 用于跟踪数据是否已经输出过一次

  useEffect(() => {
    // 在数据更新时输出数据，并确保只输出一次
    if (data && !hasPrinted) {
      console.log("Data:", data);
      setHasPrinted(true); // 设置标志变量为 true，表示已经输出过一次
    }
  }, [data, hasPrinted]); // 在数据和 hasPrinted 更新时运行这个 useEffect

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts") // 修改成实际的 URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  function removeData() {
    setData(null);
  }

  function beautifyData() {}

  return (
    <View>
      <Text>Express Data:</Text>
      <Button title="Fetch Data" onPress={fetchData} />
      <Button title="Remove Data" onPress={removeData} />
      {data ? <Text>{JSON.stringify(data)}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default CrawlComponent;
