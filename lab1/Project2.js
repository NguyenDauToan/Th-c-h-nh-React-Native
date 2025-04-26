import React from "react";
import {StyleSheet, View, Button, TouchableOpacity,Text } from "react-native";
const Project2 = ( ) => {
    return(
        <View style={myStyle.container}>
            <TouchableOpacity style={myStyle.button}  onPress={()=> alert("hello")}>
            <Text style={myStyle.text}>
                    Button 1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={myStyle.button} onPress={()=> alert("Hello")}>
                <Text style={myStyle.text}>
                    Button 2
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Project2

const myStyle = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center"
        },
        button:{
            backgroundColor: "skyblue", 
            paddingVertical: 8, 
            paddingHorizontal: 15, 
            borderRadius: 15, 
            marginBottom: 10, 
            shadowColor: "#000", 
            alignItems: "center",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3.5,
           
        },
        text:{
            color:"white",
            fontSize: 18
        },
    }
)