import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ListaCardapio from './ListaCardapio';

// import { Container } from './styles';

export default function HomeList({navigation}) {

  const [tipoCardapio, setTipoCardapio] = useState([{
      key: '1',
      title: 'Prato Executivo',
      img:require('../../../../assets/images/tipos/pe2.png'),
      description: 'Pratos com sabor caseiro.',
      bg:'#e35339',
      products: [
        {
          key: '1',
          name: 'Prato de Frango',
          img:require('../../../../assets/images/pe/executivos_frango.png')
        },
        {
          key: '2',
          name: 'Prato Parmegiana',
          img:require('../../../../assets/images/pe/executivos_parme.png')
        },
        {
          key: '3',
          name: 'Prato de Picanha',
          img:require('../../../../assets/images/pe/executivos_picanha.png')
        }, 
      ]
    },
    {
      key: '2',
      title: 'Saladas',
      img:require('../../../../assets/images/tipos/salada2.png'),
      description: 'Comidas saudáveis.',
      bg:'#a6bb24',
      products: [
        {
          key: '1',
          name: 'Salada de Frango',
          img:require('../../../../assets/images/saladas/saladas_frango.png')
        },
        {
          key: '2',
          name: 'Salada de Ovo',
          img:require('../../../../assets/images/saladas/saladas_ovo.png')
        },
        {
          key: '3',
          name: 'Salada Porção',
          img:require('../../../../assets/images/saladas/saladas_porcao.png')
        },
      ]
    },
    {
      key:'3',
      title: 'Bebidas',
      img:require('../../../../assets/images/tipos/bebida2.png'),
      description: 'Bebidas em geral.',
      bg:'#079ed4',
      products: [
        {
          key: '1',
          name: 'Caipirinha',
          img:require('../../../../assets/images/bebidas/bebidas_caipirinha.png')
        },
        {
          key: '2',
          name: 'Drink',
          img:require('../../../../assets/images/bebidas/bebidas_coquetel.png')
        },
        {
          key: '3',
          name: 'Cerveja Heineken',
          img:require('../../../../assets/images/bebidas/bebidas_heineken.png')
        },
        {
          key: '4',
          name: 'Old Parr',
          img:require('../../../../assets/images/bebidas/bebidas_oldpar.png')
        },
        {
          key: '5',
          name: 'Whisky',
          img:require('../../../../assets/images/bebidas/bebidas_whisky.png')
        },
      ]
    },
    {
      key:'4',
      title: 'Sobremesas',
      img:require('../../../../assets/images/tipos/sobremesa2.png'),
      description: 'Sobremesas para você se deliciar',
      bg:'#fcb81c',
      products: [
        {
          key: '1',
          name: 'Brownie',
          img:require('../../../../assets/images/sobremesas/sobremesas_brownie.png')
        },
        {
          key: '2',
          name: 'Cream Cheese',
          img:require('../../../../assets/images/sobremesas/sobremesas_cake.png')
        },
        {
          key: '3',
          name: 'Pudim',
          img:require('../../../../assets/images/sobremesas/sobremesas_pudim.png')
        },        
      ]
  }]);

  return (
    <View style={styles.container}>
      <FlatList
        data={tipoCardapio}
        renderItem={({item}) => <ListaCardapio data={item} 
        navigation={navigation}/>}
        />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})