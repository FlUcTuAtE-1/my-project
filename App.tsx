import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontWeight:"bold", fontSize: 30, color: "black"}
});
