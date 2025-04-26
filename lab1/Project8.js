import React from "react";
import { SectionList, Text, View, StyleSheet, SafeAreaView } from "react-native";

const Project8 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>
              {item.name.first} {item.name.last}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const PEOPLE = [
  {
    name: {
      title: "Ms",
      first: "Maeva",
      last: "Scott",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maelle",
      last: "Henru",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Mohamoud",
      last: "Faaij",
    },
  },
];

const groupPeopleByLastName = (_data) => {
  const data = [..._data];
  const groupedData = data.reduce((accumulator, item) => {
    const group = item.name.last[0].toUpperCase();
    if (accumulator[group]) {
      accumulator[group].data.push(item);
    } else {
      accumulator[group] = {
        title: group,
        data: [item],
      };
    }
    return accumulator;
  }, {});

  const sections = Object.keys(groupedData).map((key) => groupedData[key]);

  return sections.sort((a, b) => {
    if (a.title > b.title) return 1;
    return -1;
  });
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "rgb(170,170,170)",
    marginHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: "#f4f4f4",
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Project8;
