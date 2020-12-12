import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import { View, StyleSheet } from 'react-native';
import Card from './app/components/Card';

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100,
  },
});

{
  /* <View style={styles.container}>
      <Card title='Red jacket for sale' subTitle='$100' image={require('./app/assets/jacket.jpg')} />
    </View> */
}
