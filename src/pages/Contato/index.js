import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

// import { Container } from './styles';

export default function Contato() {
  const contato = {
    email: 'thaynanbreno@gmail.com',
    telefone: '(86) 999797405',
    instagram: '@t.brenoo',
    linkedin: 'taynan-silva'
  };


  return (
    <View style={styles.container}>

      <View style={styles.contatoContainer}>

        <Text style={styles.principal}>Contato</Text>

          <View style={styles.contato}>
            <Image style={styles.contatoImagem} source={require('../../../assets/images/email.png')}/>
            <Text style={styles.contatoTexto}>{contato.email}</Text>
          </View>

          <View style={styles.contato}>
            <Image style={styles.contatoImagem} source={require('../../../assets/images/telefone.png')}/>
            <Text style={styles.contatoTexto}>{contato.telefone}</Text>
          </View>

          <View style={styles.contato}>
            <Image style={styles.contatoImagem} source={require('../../../assets/images/instagram.png')}/>
            <Text style={styles.contatoTexto}>{contato.instagram}</Text>
          </View>

          <View style={styles.contato}>
            <Image style={styles.contatoImagem} source={require('../../../assets/images/linkedin.png')}/>
            <Text style={styles.contatoTexto}>{contato.linkedin}</Text>
          </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: "#cccccc",
    justifyContent: 'center',
    alignItems: 'center'
  },
  contatoContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
  },
  contato: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  contatoImagem: {
    height: 25,
    width: 25,
  },
  contatoTexto: {
    marginLeft: 5,
  },
  principal: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
})
