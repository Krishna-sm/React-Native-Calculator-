import React, { useState } from "react";
import image from './assets/icon.png';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  ActivityIndicator,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Image,
  ImageBackground,
  ToastAndroid
} from "react-native";
import Calculator from "./screen/Calculator";
const App=()=>{
  return (
    <Calculator/>
  )
}

// const Name=(props)=>{
//   return (
//     <View>
//       <Text>My Name is {props.name}   </Text>
//       <Text>My Age is {props.age}   </Text>
//     </View>
//   )
// }
// const ALertHandler = () => {
//   Alert.alert("Alert Title", "plese Make sure you are not a good boy", [
//     {
//       text: "Ask Me later",
//       onPress: () => console.log("ask me letter pressed"),
//     },
//     { text: "cancel", onPress: () => console.log("cancel pressed") },
//     { text: "ok", onPress: () => console.log("ok pressed") },
//   ]);
// };
// const DATA = [
//   {
//     id: 1,
//     name: "Krishna",
//   },
//   {
//     id: 2,
//     name: "kana",
//   },
//   {
//     id: 3,
//     name: "Hari",
//   },
//   {
//     id: 5,
//     name: "radha",
//   },
//   {
//     id: 4,
//     name: "guru",
//   },
//   {
//     id: 5,
//     name: "radha",
//   },
//   {
//     id: 4,
//     name: "guru",
//   },
//   {
//     id: 5,
//     name: "radha",
//   },
//   {
//     id: 4,
//     name: "guru",
//   },
// ];
// // const App = () => {
// //   const [state,setState]=useState('');
// //   const [roll,setroll]=useState(null);
// // //   return (
// // //     // <View style={[styles.container,{
// // //     //   color:"white",
// // //     //   backgroundColor:"pink"
// // //     // }]}>
// // //     //   {/* <Text style={{fontSize:98}} >Hello world</Text> */}
// // //     //   {/* <Name name="Krishna" age="27" />
// // //     //   <Name name="Kana" age="28" />
// // //     //   <Name name="Hari" age="29" /> */}
// // //     //   {/* <Name name="Guru" age="35" /> */}
// // //     //   {/* <Text style={{fontSize:28}} numberOfLines={3} onPress={()=>console.log("Text Clicked")} selectable6 >
// // //     //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque, labore a repellendus sunt autem, sequi amet deserunt alias laborum ex dicta explicabo nemo saepe quidem et est repellat laudantium ullam fugiat voluptas. Tempore esse libero aut repudiandae veniam ratione tempora iure saepe harum adipisci?
// // //     //     </Text> */}

// // //     //   {/* <Text
// // //     //     style={{
// // //     //       fontSize: 28,
// // //     //       paddingTop: 45,
// // //     //       fontWeight: "blod",
// // //     //       color: "red",
// // //     //     }}
// // //     //   >
// // //     //     Learn Styling in React Native
// // //     //   </Text> */}
// // //     //   {/* <Text  >Hello Krishna</Text> */}
// // //     //   {/* <Button title="Click" color={"pink"}/> */}
// // //     //   {/* <Button title="Click" color={"pink"} onPress={()=>alert("clicked Wow")}/> */}
// // //     //   {/* <Button title="Click"  disabled={false} color={"pink"} onPress={()=>alert("clicked Wow")}/> */}
// // //     //   <Button title="click me " color={"purple"} onPress={ALertHandler} />
// // //     // </View>
// // //     <View style={styles.container}>
// // //       <TextInput   style={styles.input} value={state}  onChangeText={setState} placeholder="write your name" />
// // //       <TextInput style={styles.input} value={roll}  onChangeText={setroll} placeholder="write your Roll No"  keyboardType="numeric"  />
// // //       {/* <TextInput   style={styles.input} keyboardType="numeric"  onChangeText={()=>console.log("text updated")} placeholder="write your Roll" /> */}
// // //       {/* <Button title="Click Me " onPress={()=>ToastAndroid.show("this is Toast",ToastAndroid.SHORT)}  /> */}
// // //       {/* <Image source={image} style={{height:300,width:215}} />
// // //       <Image source={{uri:"https://m.media-amazon.com/images/I/41pgojG9wbL.jpg"}} style={{height:200,width:200}} resizeMode='repeat' /> */}

// // //       {/* <ImageBackground  source={{uri:"https://m.media-amazon.com/images/I/41pgojG9wbL.jpg"}} style={{height:200,width:200}}>
// // //         <Button title="Click me" />
// // //         <Text style={{
// // //           backgroundColor:"white",
// // //           width:"100%",
// // //           padding:20,
// // //           textAlign:"center"
// // //         }}>Hello world</Text>
// // //       </ImageBackground> */}
// // //       {/* <Pressable onPress={()=>console.log("pressed ")} onPressIn={()=>console.log("pressed in")} onPressOut={()=>console.log("pressed out")} >
// // //         <Text>Hello i am simple test</Text>
// // //       </Pressable> */}
// // //       {/* <TouchableWithoutFeedback onPress={()=>console.log("predded")} >
// // //         <Text>Hello </Text>
// // //       </TouchableWithoutFeedback> */}
// // //       {/* <ActivityIndicator size="large"  color="red" /> */}
// // //       {/* {DATA.map((arr,i)=>{
// // //         return <Text key={i}>{arr.name}</Text>
// // //       })
// // //       } */}
// // //       {/* <ScrollView showsVerticalScrollIndicator={false} >
// // //  {DATA.map((arr,i)=>{
// // //         return <Text style={{fontSize:50,padding:25}} key={i}>{arr.name}</Text>
// // //       })
// // //       }
// // //       </ScrollView> */}
// // //       {/* <ScrollView  showsVerticalScrollIndicator={false}  horizontal>
// // //  {DATA.map((arr,i)=>{
// // //         return <Text style={{fontSize:50,padding:25}} key={i}>{arr.name}</Text>
// // //       })
// // //       }
// // //       </ScrollView> */}
// // //       {/* <FlatList showsVerticalScrollIndicator={false} data={DATA} renderItem={(obj)=><Text style={{fontSize:28,padding:40}} key={obj.item.id}>{obj.item.name}</Text>} keyExtractor={item=>item.id}
// // //       onRefresh={()=>console.log("refresh active")} refreshing={false}  /> */}
// // // {/* 
// // //       <FlatList
// // //         showsVerticalScrollIndicator={false}
// // //         data={DATA}
// // //         renderItem={(obj) => (
// // //           <TouchableOpacity onPress={()=>console.log(`${obj.item.name} Pressed`)} y>
// // //           <Text style={{ fontSize: 28, padding: 40 }} key={obj.item.id}>
// // //             {obj.item.name}
// // //           </Text>
// // //           </TouchableOpacity>
// // //         )}
// // //         keyExtractor={(item) => item.id}
// // //         onRefresh={() => console.log("refresh active")}
// // //         refreshing={false}
// // //       />


// // // <FlatList
// // //         showsVerticalScrollIndicator={false}
// // //         data={DATA}
// // //         renderItem={(obj) => (
// // //           <TouchableHighlight  onPress={()=>console.log(`${obj.item.name} Pressed`)} y>
// // //           <Text style={{ fontSize: 28, padding: 40 }} key={obj.item.id}>
// // //             {obj.item.name}
// // //           </Text>
// // //           </TouchableHighlight>
// // //         )}
// // //         keyExtractor={(item) => item.id}
// // //         onRefresh={() => console.log("refresh active")}
// // //         refreshing={false}
// // //       /> */}


// // //     </View>
// // //   );
// //     return (
// //       <>
// //           {/* <View style={{flex:1,backgroundColor:"white",paddingTop:10,flexDirection:"column-reverse"}}>
// //           <View style={{flex:1,backgroundColor:"red",marginBottom:10}}>
// //             <Text style={{fontSize:50}}>1</Text>
// //             </View>
// //             <View style={{flex:1,backgroundColor:"blue",marginBottom:10}}>
// //             <Text style={{fontSize:50}}>2</Text>
// //             </View>
// //             <View style={{flex:1,backgroundColor:"green",marginBottom:10}}>
// //             <Text style={{fontSize:50}}>3</Text>
// //             </View>
// //           </View> */}
// //     {/* <View style={{flex:1,backgroundColor:"grey",paddingTop:10,justifyContent:"center",alignItems:"center"}}>
// //             <View style={{backgroundColor:"red",height:120,width:120,marginBottom:20}}></View>
// //             <View style={{backgroundColor:"blue",height:120,width:120,marginBottom:20}}></View>
// //             <View style={{backgroundColor:"green",height:120,width:120,marginBottom:20}}></View>
// //     </View> */}

// //       </>
// //     )
// // };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     fontSize: 23,
//     justifyContent: "center",
//     alignContent: "center",
//     alignItems: "center",
//   },
//   button: {
//     padding: 120,
//     backgroundColor: "red",
//     color: "white",
//   },
//   input:{
//     height:40,
//     margin:12,
//     borderWidth:1,
//     width:"80%",
//     padding:10
//   }
// });
// function Name(props){
//   return (
//     <View>
//       <Text>My Name is {props.name}   </Text>
//       <Text>My Age is {props.age}   </Text>
//     </View>
//   )
// }

export default App;
