
//introducing flexbox, react-native style
// import { SafeAreaView } from "react-native-safe-area-context";
// import { View, Text } from "react-native";
// import styles from "./styles";


// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.box}>
//         <Text style={styles.boxText}>I'm in a box!</Text>
//       </View>
//     </SafeAreaView>
    
//   );  
// }




//styled-components
// import React from "react";
// import { Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Container, Box, BoxText } from "./styles";

// export default function App() {
//   return (
//     <Container>
//       <Box>
//         <BoxText>Box ko!</BoxText>
//       </Box>
//     </Container>
//   );
// }

//buidling flexbox layout
// import React from 'react';
// import { View , Text} from 'react-native';
// import {styles} from './styles';

// export default function App() {
//   return (
//     <View style={styles.container}> 
//       <View style={styles.box}>
//         <Text style={styles.boxText}> 1 </Text>
//       </View>
//       <View style={styles.box}>
//         <Text style={styles.boxText}> 2 </Text>
//       </View>
//       <View style={styles.box}>
//         <Text style={styles.boxText}> 3 </Text>
//       </View>
//     </View>

//   );
// }

// import React from 'react';
// import { View, Text, TextInput, Button,  } from 'react-native';
// import { styles } from './styles';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>My App</Text>

//       <TextInput placeholder="Email" style={styles.input} />
//       <TextInput placeholder="Password" style={styles.input} />
      
//       <View style={styles.button}>
//         <Button title="LOGIN" />
//       </View>

//       <Text>Forgot Password?</Text>
//     </View>
//   );  
// }

//flexible rows
// import React from 'react';
// import {View, Text} from 'react-native';
// import {styles} from './styles';
// import Box from './component/Box';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Box>#1</Box>
//       <Box>#2</Box>
//     </View>
//   );
// }

//flexible grid
// import React from 'react';
// import { View } from 'react-native';
// import styles from './styles';
// import Box from './Box';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { useEffect } from 'react';
// import * as ScreenOrientation from 'expo-screen-orientation';
// import { StatusBar } from 'expo-status-bar';

// const boxes = new Array(20).fill(null).map((v, i) => i + 1);

// export default function App() {
//   // useEffect(() => {
//   //   async function changeOrientation() {
//   //     await ScreenOrientation.lockAsync(
//   //       ScreenOrientation.OrientationLock.PORTRAIT
//   //     );
//   //   }

//   //   changeOrientation();
//   // }, []);
//   return (
//     <View style={styles.container}>
//       <StatusBar hidden={false} />
//       {boxes.map((i) => (
//         <Box key={i}>#{i}</Box>
//       ))}
//     </View>
//   );
// }

//flexible rows and columns
// import React from "react";
// import { View } from "react-native";
// import styles from "./styles";
// import Row from "./Row";
// import Column from "./Column";
// import Box from "./Box";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Row>
//         <Column>
//           <Box>#1</Box>
//           <Box>#2</Box>
//         </Column>
//         <Column>
//           <Box>#3</Box>
//           <Box>#4</Box>
//         </Column>
//       </Row>
//       <Row>
//         <Column>
//           <Box>#5</Box>
//           <Box>#6</Box>
//         </Column>
//         <Column>
//           <Box>#7</Box>
//           <Box>#8</Box>
//         </Column>
//       </Row>
//       <Row>
//         <Column>
//           <Box>#9</Box>
//           <Box>#10</Box>
//         </Column>
//         <Column>
//           <Box>#11</Box>
//           <Box>#12</Box>
//         </Column>
//       </Row>
//     </SafeAreaView>
//   );
// }

//react-navigation
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "./components/screens/Home";
// import Settings from "./components/screens/Settings";
// import Details from "./components/screens/Details";
// import {RootStackParamList} from './router';
// import { Button } from "react-native";
// const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen 
//         name="Details" 
//         component={Details}
//         options={({route}) => ({
//           headerRight: () => {
//             return (
//               <Button 
//               title="Buy" 
//               onPress={() => {}}
//               disabled={route.params.stock === 0}
//               />
//             );
//           },
//         })} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

//smarthome dashboard

//without styles
// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import styles from './styles';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>

//         {/* header */}
//         <View style={styles.header}>
//           <Text style={styles.title}>Smart Home</Text>
//           <Image style={styles.icon} source={require('./assets/icons/settings.png')} />
//         </View>

//         {/* Temperature */}
//         <View style={styles.temperature}>
//           <Image style={styles.icon} source={require('./assets/icons/low-temperature.png')} />
//           <Text style={styles.temp}>26°C</Text>
//           <Text>Living Room</Text>
//         </View>

//         {/* First Row */}
//         <View style={styles.deviceRow}>
//           <View style={styles.card}>
//             <Image style={styles.icon} source={require('./assets/icons/bulb.png')} />
//             <Text>Light</Text>
//             <Text>ON</Text>
//           </View>

//           <View style={styles.card}>
//             <Image style={styles.icon} source={require('./assets/icons/air-conditioner.png')} />
//             <Text>AC</Text>
//             <Text>24°C</Text>
//           </View>
//         </View>

//         {/* Second Row */}
//         <View style={styles.deviceRow}>
//           <View style={styles.card}>
//             <Image style={styles.icon} source={require('./assets/icons/locked.png')} />
//             <Text>Door</Text>
//             <Text>LOCKED</Text>
//           </View>

//           <View style={styles.card}>
//             <Image style={styles.icon} source={require('./assets/icons/camera.png')} />
//             <Text>Camera</Text>
//             <Text>ON</Text>
//           </View>
//         </View>

//       </View>
//     </SafeAreaView>
//   );
// }


//react-navigation

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './components/screens/Dashboard';
import Settings from './components/screens/Settings';
import Devices from './components/screens/Devices';

export type RootStackParamList = {
  Dashboard: undefined;
  Settings: undefined;
  Devices: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Smart Home',
          }}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'Settings',
          }}
        />

        <Stack.Screen
          name="Devices"
          component={Devices}
          options={{
            title: 'My Devices',
          }}
        />
       

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}