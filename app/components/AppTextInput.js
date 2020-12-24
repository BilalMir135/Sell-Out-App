import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

const AppTextInput = ({ icon, ...ottherProps }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />
      <TextInput style={defaultStyles.text} {...ottherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.light,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;