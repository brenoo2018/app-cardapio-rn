import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// import { Container } from './styles';

export default function ListaProdutos({data}) {
  const {name,img} = data;
  return (
    <View style={styles.produtoItem}>
      <Image resizeMode="contain" source={img} style={styles.produtoImagem}/>
      <Text style={styles.produtoNome}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({ 
  produtoItem: {
    height: 100,
    backgroundColor: "#ffffff",
    margin:10,
    borderRadius: 5,
    padding: 10,
    flex: 1,
    flexDirection:'row',
    alignItems: 'center'
  },
  produtoImagem: {
    width: 150,
    height: 80,
  },
  produtoNome: {
    fontSize: 16,
  }
})