//introduction to flexbox, react-native style
// import { StyleSheet } from "react-native";


// export default StyleSheet.create({
// container: {
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
// });

//styled-components
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

//building flexbox layout
// import { StyleSheet } from 'react-native';

// export const styles = StyleSheet.create({
//     container: {
//         flex: 4,
//         flexDirection: 'column',    
//         alignItems: 'center', 
//         justifyContent: 'space-around',
//         backgroundColor: 'ghostwhite',
//     },
//     box: {
//         width: 300,
//         height: 100, 
//         justifyContent: 'center',
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

// import { StyleSheet } from "react-native";

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

//smarthome dashboard
// import { StyleSheet } from "react-native";

// export default StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },

//   container: {
//     flex: 1,
//     padding: 20,
//   },

//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   title:{
//     fontSize: 28,
//     fontWeight: 'bold',
//   },

//   icon: {
//     width: 30,
//     height: 30,
//     resizeMode: 'contain',
//   },

//   temperature: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // borderWidth: 1,
//     // borderRadius:10,
//     marginBottom: 10,
//   },

//   temp: {
//     fontSize: 40,
//     fontWeight: 'bold',
//   },

//   deviceRow: {
//     // flex: 1,
//     flexDirection: 'row',
//     gap: 10,
//     marginBottom: 10,
//   },

//   card: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderRadius: 10,
//   },

// });


//react-navigation
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 20,
  },

  // HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  // TEMPERATURE
  temperature: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
  },

  tempIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  temp: {
    fontSize: 42,
    fontWeight: 'bold',
  },

  location: {
    fontSize: 16,
    marginTop: 5,
  },

  // DEVICES
  deviceRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },

  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },

  cardIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginBottom: 8,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardStatus: {
    marginTop: 4,
  },

  viewDevices: {
    alignItems: 'center',
    paddingVertical: 10,
  },

  viewDevicesText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});