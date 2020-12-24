import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';
import PickerItme from './PickerItem';
import Screen from './Screen';

const AppPicker = ({ icon, items, onSelectItem, placeholder, selectedItem }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />
          <AppText style={styles.text}>{selectedItem ? selectedItem : placeholder}</AppText>
          <MaterialCommunityIcons name='chevron-down' size={20} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItme
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item.label);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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
  text: {
    flex: 1,
  },
});

export default AppPicker;
