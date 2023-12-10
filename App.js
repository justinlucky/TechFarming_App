import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Home from './src/screens/Home/Home';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <SafeAreaView style={{
      paddingTop: Platform.OS === 'android' ? 35 : 40,
      flex: 1,
    }}>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
