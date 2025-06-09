// App.js

import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    // Wraps content to avoid notches/status bar
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // fill the screen
    backgroundColor: '#8B0000',  // default white background
  },
});
