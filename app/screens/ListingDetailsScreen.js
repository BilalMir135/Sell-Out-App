import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$ 100</AppText>
        <View style={styles.userContainer}>
          <ListItem title='John Doe' subtitle='5 Listings' image={require('../assets/person.jpg')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailsScreen;
