import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';

export default function ListaCardapio({data, navigation}) {
/*
  const corFundo = data.bg;
  const imgCardapio = data.img;
  const titulo = data.titulo;
  */

  const {title, description, img, bg, products} = data;

  function clicouItem(){
    navigation.navigate('HomeProducts', {title,products}); 
  }

  return (
    <TouchableHighlight 
      onPress={clicouItem}
      underlayColor="#cccccc">

      <View style={[styles.listaItem, {backgroundColor:bg}]}>
        <Image source={img} style={styles.listaImagem}/>
        <View>
          <Text style={styles.listaTitle}>{title}</Text>
          <Text style={styles.listaDescription}>{description}</Text>
        </View>
      </View>

    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  listaItem: {
    height: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listaImagem:{
    width: 64,
    height: 64,
    marginLeft: 20,
    marginRight: 20,
  },
  listaTitle:{
    color: "#ffffff",
    fontSize: 25,
    fontWeight: 'bold',
  },
  listaDescription: {
    color: "#ffffff",
    fontSize: 16,
  }
})
