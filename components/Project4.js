import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// Component dùng props
const Greeting = (props) => {
  return (
    <Text style={myStyle.text}>
      Xin chào, {props.name}!
    </Text>
  );
};

// Component dùng state
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={myStyle.counterBox}>
      <Text style={myStyle.text}>Bạn đã nhấn {count} lần.</Text>
      <Button title="Nhấn tôi" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const Project4 = () => {
  return (
    <View style={myStyle.container}>
      <Greeting name="Toàn" />
      <Counter />
    </View>
  );
};

export default Project4

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  counterBox: {
    marginTop: 20,
    alignItems: "center",
  },
});
