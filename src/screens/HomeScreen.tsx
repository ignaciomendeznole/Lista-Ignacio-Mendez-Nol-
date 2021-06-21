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
import { ShoppingItem } from '../components/ShoppingItem';

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
        <Text style={styles.sectionTitle}>Shopping List</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
    marginHorizontal: 15,
  },
  listWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  addProductWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    paddingHorizontal: 10,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 30,
  },
});
