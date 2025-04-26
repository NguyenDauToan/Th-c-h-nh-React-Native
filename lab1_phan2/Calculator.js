import { StyleSheet,Text,TouchableOpacity,Vibration,View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

const Calculator =()=>{
    const [darkMode, setDartMode] = useState(false)
    const bgColorFunction = (darkMode)? "#414853" : "#ededed"
    const bgColorNumber = (darkMode)? "#303946" : "#fff"
    const bgColorResult = (darkMode)? "#282f3b" : "#f5f5f5"
    const bgColorThemButton = (darkMode)? "#7b8084" : "#e5e5e5"
    const textColorHistory = (darkMode)? "#B5B7BB" : "#7c7c7c"
    const colorIcon = (darkMode)? "white" : "black"
    const buttonsLeft = [
        ["C", "Del"],
        [7, 8, 9],
        [4, 5 ,6],
        [1, 2, 3],
        [0, "."]
    ]
    const buttonsRight = [
        "/", "*","-","+","="
    ]
    
    const [currentNumber, setCurrentNumber] = useState("")
    const [lastNumber,setLastNumber] = useState("")
    const calculator = ()=>{
        let lastChar = currentNumber[currentNumber.length-1]
        if ((lastChar==="+")||(lastChar==="-")||(lastChar==="*")||(lastChar==="/")||(lastChar==="."))
        {
            setCurrentNumber(currentNumber)
        }
        else
        {
            let result = eval(currentNumber).toString()
            setCurrentNumber(result)
        }
    }

    const handleInput = (buttonPress) =>{
        switch (buttonPress){
            case "+": case"-": case"*": case"/":
                Vibration.vibrate(35);
                setCurrentNumber(currentNumber+ buttonPress)
                break;
            case "Del": 
                Vibration.vibrate(35)
                setCurrentNumber(currentNumber.substring(0,(currentNumber.length-1)))
                break
            case "C": 
                Vibration.vibrate(35)
                setCurrentNumber("")
                setLastNumber("")
                break
            case "=":
                Vibration.vibrate(35)
                setLastNumber(currentNumber+"=")
                calculator()
                break
            default: 
            Vibration.vibrate(35)
            setCurrentNumber(currentNumber+buttonPress)
            break
        }
    }
    
    return(
        <View style = {myStyles.container} >
            <View style = {{...myStyles.containerResult, backgroundColor:"red"}}>
            <TouchableOpacity
            style = {{...myStyles.themeButton, backgroundColor:bgColorThemButton}}
            onPress={()=> setDartMode(!darkMode)}>
                <Entypo name={(darkMode)? "light-up": "moon"} size={40} style={{color:colorIcon}}/>
            </TouchableOpacity>
            <Text style = {{...myStyles.historyText, color: textColorHistory}}>{lastNumber}</Text>
            <Text style={myStyles.resultText}>{currentNumber}</Text>
            </View>
            <View style={myStyles.containerButton}>
                <View style = {{...myStyles.containerButtonLeft, backgroundColor:"aqua"}}>
                    {
                        buttonsLeft.map((row,index)=>
                        <View style ={{...myStyles.containerRow,backgroundColor:(index==0)?bgColorFunction:bgColorNumber}}>
                            {
                                row.map(item=>
                                    <TouchableOpacity style = {myStyles.button} onPress={()=> handleInput(item)}>
                                        <Text style = {myStyles.buttonText}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            }
                            </View>
                    )
                    }
                        
                </View>
    
                <View style = {{...myStyles.containerButtonRight, backgroundColor:"blue"}}>
                    {
                        buttonsRight.map((item)=>
                            <TouchableOpacity style={{...myStyles.button}} onPress={()=> handleInput(item)}>
                                <Text style = {{...myStyles.buttonText,color:"#fff"}}>{item}</Text>
                            </TouchableOpacity>
                    )
                    }
                </View>                
            </View>

        </View>
    )

}
export default Calculator
const myStyles = StyleSheet.create(
{
    container: {
        flex:1,
        },
        
    containerResult: {
        flex:1,
        justifyContent: "space-around",
        alignItems: "flex-end",
        },
    containerButtonLeft:{
        flex:3,
        },
    containerButtonRight:{
        flex: 1,
        backgroundColor: "#00b9d6",
        },
    containerButton: {
        flex:2,
        flexDirection: "row",
        },
    themeButton: {
        marginTop: 50,
        marginLeft: 20,
        borderRadius:90,
        height:60,
        width: 60,
        justifyContent:"center",
        alignItems:"center",
        alignSelf: "flex-start"
    },
    historyText: {
            fontSize:20,
            marginRight:10,
            },
    resultText: {
            color: "#00b9d6",
            fontSize: 35,
            margin:15
            },
    button:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            },
    buttonText: {
            fontSize: 30,
            fontweight: "bold",
            },
    containerRow:{
            flex:1,
            flexDirection:"row"
            }
        
})