import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, ToastAndroid, StatusBar} from 'react-native';

const Calculator = () => {
    const [first,setFirst]=useState(null);
    const [second,setSecond]=useState(null);
    const [ans,setAns]=useState(null);

const Add=()=>{
    setAns("")
    if(first!='' || second!='')
    {
        // ToastAndroid.show("correct",ToastAndroid.SHORT);
        let f=Number.parseInt(first);
        let g=Number.parseInt(second);
        setAns(f+g)
    }
    else{
        ToastAndroid.show("Enter Filds",ToastAndroid.SHORT);

    }
}
const Sub=()=>{
    setAns("")
    if(first!='' || second!='')
    {
        // ToastAndroid.show("correct",ToastAndroid.SHORT);
        let f=Number.parseInt(first);
        let g=Number.parseInt(second);
        setAns(f-g)
    }
    else{
        ToastAndroid.show("Enter Filds",ToastAndroid.SHORT);

    }
}
const Mul=()=>{
    setAns("")
    if(first!='' || second!='')
    {
        // ToastAndroid.show("correct",ToastAndroid.SHORT);
        let f=Number.parseInt(first);
        let g=Number.parseInt(second);
        setAns(f*g)
    }
    else{
        ToastAndroid.show("Enter Filds",ToastAndroid.SHORT);

    }
}
const Div=()=>{
    setAns("")
    if(first!='' || second!='')
    {
        // ToastAndroid.show("correct",ToastAndroid.SHORT);
        let f=Number.parseInt(first);
        let g=Number.parseInt(second);
        setAns(f/g)
    }
    else{
        ToastAndroid.show("Enter Filds",ToastAndroid.SHORT);

    }
}



    return (
        <View style={styles.container}>
                    <Text style={styles.heading}>Calculator</Text>
                    <TextInput style={styles.input} placeholderTextColor="white"  placeholder="Enter First Value" value={first} onChangeText={setFirst} keyboardType='numeric'  />
                    <TextInput style={styles.input} placeholderTextColor="white"  placeholder="Enter Second Value" value={second} onChangeText={setSecond} keyboardType='numeric'  />

                    {/* answeert */}
                    <Text style={styles.heading}>Answer  : {ans} </Text>
                    {/* endansert */}

                   <View style={styles.button}>
                   <Button  title='Addition (+) ' onPress={Add}  />
                   </View>
                   <View style={styles.button}>
                   <Button title='Subtraction (-) ' onPress={Sub} />
                   </View>
                   <View style={styles.button}>
                   <Button title='Multiplication (X) ' onPress={Mul} />
                   </View>
                   <View style={styles.button}>
                   <Button title='Division (/) ' onPress={Div}/>
                   </View>

                   
                  <StatusBar color={"auto"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"purple"
    },
    heading:{
        fontSize:30,
        fontWeight:"bold",
        color:"white",
        textDecorationLine:"underline",
        marginBottom:20
    },
    input:{
        borderWidth:1,
        height:40,
        padding:12,
        color:"white",
        width:"70%",
        borderColor:"white",
        marginBottom:20

    },
    button:{
        marginBottom:20,
        width:"60%"
    }
})

export default Calculator;
