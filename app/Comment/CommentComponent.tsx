import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import * as Email from "expo-mail-composer";

const CommentComponent = () => {
  const [comment, setComment] = useState("");

  const handleSendComment = async () => {
    if (comment.trim() === "") {
      Alert.alert("Error", "Please enter a comment.");
      return;
    }

    try {
      await Email.composeAsync({
        recipients: ["xiang.wu@hotmail.de"],
        subject: "New Comment",
        body: comment,
      });
      setComment("");
      Alert.alert("Success", "Comment sent successfully.");
    } catch (error) {
      console.error("Error sending email:", error);
      Alert.alert(
        "Error",
        "An error occurred while sending the email. Please try again later."
      );
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={{
          width: "80%",
          height: 100,
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
        }}
        multiline
        placeholder="Write your comment here..."
        value={comment}
        onChangeText={(text) => setComment(text)}
      />
      <Button title="Send Comment" onPress={handleSendComment} />
    </View>
  );
};

export default CommentComponent;
