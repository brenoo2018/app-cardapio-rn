import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ListaProdutos from './ListaProdutos';

// import { Container } from './styles';

export default function HomeProducts({route}) {

  const {products} = route.params;
  const [listaProdutos, setListaProdutos] = useState(products);

  return (
    <View style={styles.container}>
      <FlatList
        data={listaProdutos}
        renderItem={({item}) => <ListaProdutos data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#cccccc"
  }
})
