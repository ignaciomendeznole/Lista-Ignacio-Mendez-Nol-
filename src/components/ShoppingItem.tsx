import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { ShoppingItemProps } from '../types/types';
import { useState } from 'react';

export const ShoppingItem = ({
  shoppingItem,
  deleteProduct,
}: ShoppingItemProps) => {
  const [completed, setCompleted] = useState<boolean>(false);
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity
          style={styles.square}
          onPress={() => setCompleted(!completed)}
        >
          {completed ? (
            <AntDesign name={'check'} size={30} color={'white'} />
          ) : (
            <MaterialIcons
              name='radio-button-unchecked'
              size={30}
              color='white'
            />
          )}
        </TouchableOpacity>
        <Text style={styles.itemText}>{shoppingItem}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteContainer}
        activeOpacity={0.8}
        onPress={() => deleteProduct(shoppingItem)}
      >
        <AntDesign name='delete' size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor: '#55bcf6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 30,
  },
  deleteContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100,
    height: 30,
    width: 30,
    backgroundColor: '#eb3737',
    borderRadius: 10,
  },
  itemText: {
    maxWidth: '80%',
    fontSize: 20,
    alignSelf: 'center',
  },
});
