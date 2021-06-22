import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { ShoppingItem } from '../../components/ShoppingItem';
import styles from './styles';

export const HomeScreen = () => {
  const [shoppingProduct, setShoppingProduct] = useState<string>('');
  const [shoppingList, setShoppingList] = useState<string[]>([]);

  const addShoppingItem = () => {
    if (!shoppingProduct) {
      return Alert.alert('Error', '¡Debes ingresar un nombre!', [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]);
    }
    setShoppingList([...shoppingList, shoppingProduct]);
    setShoppingProduct('');
  };

  const deleteShoppingItem = (productName: string) => {
    const newList = shoppingList.filter((item) => item !== productName);
    setShoppingList(newList);
  };
  return (
    <View style={styles.container}>
      <View style={styles.listWrapper}>
        <Text style={styles.sectionTitle}>
          Shopping List ({shoppingList.length})
        </Text>
      </View>
      <FlatList
        data={shoppingList}
        renderItem={({ item }) => (
          <ShoppingItem
            shoppingItem={item}
            deleteProduct={deleteShoppingItem}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.addProductWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder='Add a Shopping Item'
          value={shoppingProduct}
          onChangeText={setShoppingProduct}
        />
        <TouchableOpacity onPress={addShoppingItem}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
