import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const projects = [
  { name: 'Project1', label: 'Dự án 1' },
  { name: 'Project2', label: 'Dự án 2' },
  { name: 'Project3', label: 'Dự án 3' },
  { name: 'Project4', label: 'Dự án 4' },
  { name: 'Project5', label: 'Dự án 5' },
  { name: 'Project6', label: 'Dự án 6' },
  { name: 'Project7', label: 'Dự án 7' },
  { name: 'Project8', label: 'Dự án 8' },
  { name: 'Calculator', label: 'Calculator' },
  { name: 'Lab2', label: 'TabNavigator' },

];

const Main = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Danh sách bài</Text>
      {projects.map((project, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate(project.name)}
        >
          <Text style={styles.buttonText}>{project.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 28,
      fontWeight: '600', 
      color: '#333', 
      marginBottom: 30, 
      fontFamily: 'Arial', 
    },
    button: {
      backgroundColor: '#ff8c00', 
      paddingVertical: 12, 
      width: '70%',
      marginVertical: 15, 
      borderRadius: 20, 
      alignItems: 'center', 
      elevation: 5, 
    },
    buttonText: {
      color: '#fff',
      fontSize: 18, 
      fontWeight: 'bold', 
      letterSpacing: 1, 
      textTransform: 'uppercase', 
    },
  });
  

export default Main