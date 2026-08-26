// import { StyleSheet } from "react-native";
// import styled from "styled-components/dist/constructors/styled";
// import styled from 'styled-components/native';

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "ghostwhite",
//   },

//   box: {
//     width: 100,
//     height: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "lightgray",
//   },

//   boxText: {
//     color: "darkslategray",
//     fontWeight: "bold",
//   },

// const Box = styled.View`
//  width: 100px;
//  height: 100px;
//  justify-content: center;
//  align-items: center;
//  background-color: lightgray;
// `;
// const BoxText = styled.Text`
//  color: darkslategray;
//  font-weight: bold;
// `;
// });
// import styled from 'styled-components/native';

// export const Container = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
// `;

// export const Box = styled.View`
//   width: 100px;
//   height: 100px;
//   justify-content: center;
//   align-items: center;
//   background-color: lightgray;
// `;

// export const BoxText = styled.Text`
//   color: darkslategray;
//   font-weight: bold;
// `;

// import { StyleSheet } from 'react-native';

// export const styles = StyleSheet.create({
//     container: {
//         flex: 4,
//         flexDirection: 'column',    
//         alignItems: 'center', //improvement so that the boxes are spaced evenly across the screen
//         justifyContent: 'center',
//         backgroundColor: 'ghostwhite',
//     },
//     box: {
//         // width: 300,
//         height: 100, 
//         justifyContent: 'center',
//         alignSelf: 'stretch',
//         alignItems: 'center',
//         backgroundColor: 'lightgray',
//         borderWidth: 1,
//         borderStyle: 'dashed',
//         borderColor: 'darkslategray',
//     },

//     boxText: {
//         color: 'darkslategray',
//         fontWeight: 'bold',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     input: {
//         height: 40,
//         width: '80%',
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 10,
//         paddingHorizontal: 10,
//     },
//     button: {
//         backgroundColor: 'pickerblue',
//         padding: 10,
//         shadowColor: 'black',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },
// });

//flexible rows
// import { StyleSheet } from 'react-native';

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     // alignItems: 'center',
//     justifyContent: 'space-around',
//     backgroundColor: 'ghostwhite',
//     },
//     box: {
//     width: 100,
//     // height: 100,
//     alignSelf: 'stretch',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightgray',
//     },
//     boxText: {
//     color: 'darkslategray',
//     fontWeight: 'bold',
//     },
// }); 

//flexible grid
// import { StyleSheet } from "react-native";

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     backgroundColor: "ghostwhite",
//     alignItems: "center",
//   },

//   box: {
//     height: 100,
//     width: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "lightgray",
//     borderWidth: 1,
//     borderStyle: "dashed",
//     borderColor: "darkslategray",
//     margin: 10,
//   },

//   boxText: {
//     color: "darkslategray",
//     fontWeight: "bold",
//   },
// });

//flexible rows and columns
// import { StyleSheet } from "react-native";

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "ghostwhite",
//     alignItems: "center",
//     justifyContent: "space-around",
//   },

//   box: {
//     width: 100,
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderStyle: "dashed",
//     borderColor: "darkslategray",
//     backgroundColor: "lightgray",
//   },

//   boxText: {
//     color: "darkslategray",
//     fontWeight: "bold",
//   },

//   row: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignSelf: "stretch",
//   },

//   column: {
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "space-around",
//     alignSelf: "stretch",
//   },
// });

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});