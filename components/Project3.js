import React from "react";
import{
    StyleSheet,
    Alert,
    Button,
    TouchableOpacity,
    Text,
    View,
    TouchableHighlight,
} from "react-native";
const Project3 = () => {
    const onPress = ()=> Alert.alert("Say hello")
    return(
        <View style={myStyle.container}>
    <TouchableOpacity style = {{...myStyle.button, backgroundColor:"red"}}
    onPress={()=> Alert.alert("say hello")}
    >
        <Text style={{...myStyle.buttonText, color: "blue"}}>Say Hello</Text>
    </TouchableOpacity>
    <TouchableHighlight style = {{...myStyle.button, backgroundColor:"blue"}}
    onPress={()=> Alert.alert("say goodbye")}
    >
        <Text style={{...myStyle.buttonText, color: "black"}}>Say Goodbye</Text>
    </TouchableHighlight>
    </View>
    )
}
export default Project3
const myStyle = StyleSheet.create({
    container:{
        flex: 1
    },
    button:{
        alignSelf: "center",
        padding: 10,
        margin: 10,

    },
    buttonText:{
        fontSize: 20,
        fontWeight: "bold"
    }
})