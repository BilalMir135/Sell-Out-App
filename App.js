import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import Card from './app/components/Card';

import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        icon='apps'
        items={categories}
        placeholder='Category'
      />
      <AppTextInput placeholder='Username' icon='email' />
    </Screen>
  );
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
