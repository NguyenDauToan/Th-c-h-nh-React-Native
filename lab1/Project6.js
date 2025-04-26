import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Square = ({ text, bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text>{text}</Text>
  </View>
);

const Project6 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item, index) => (
        <Square key={index} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
};

export default Project6;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 20,
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    elevation: 3, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
