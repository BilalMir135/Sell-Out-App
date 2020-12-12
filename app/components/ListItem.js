import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

const ListItem = ({ title, subtitle, image, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
  },
  subtitle: {
    color: colors.medium,
    fontSize: 16,
  },
});

export default ListItem;
