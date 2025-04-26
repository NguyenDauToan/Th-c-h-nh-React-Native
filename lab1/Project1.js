
import { StyleSheet,Text,View } from "react-native";
const Project1 = () => {
    return (
        <View style ={myStyle.container}>
            <Text style ={myStyle.text}>Hello</Text>
        </View>
    )
}
export default Project1

const myStyle = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    box:{
      height:100,
      width:100,
      backgroundColor: "aqua"
    },
    text:{
      fontSize:20,
      fontWeight: "bold"
  
    }
  });
  