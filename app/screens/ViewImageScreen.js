import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}>
        <MaterialCommunityIcons name='close' color='white' size={40} />
      </View>
      <View style={styles.deleteButton}>
        <MaterialCommunityIcons name='trash-can-outline' color='white' size={40} />
      </View>
      <Image style={styles.image} resizeMode='contain' source={require('../assets/chair.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteButton: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
