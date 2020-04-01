import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

// import { Container } from './styles';

export default function Horario() {

  const horarioFuncionamento = {
    segunda: '18:00 à 00:00',
    terca: '18:00 à 00:00',
    quarta: '18:00 à 00:00',
    quinta: '18:00 à 00:00',
    sexta: '18:00 à 01:00',
    sabado: '18:00 à 01:00',
    domingo: '18:00 às 23:00',
  }

  return (
    <View style={styles.container}>

      <View style={styles.horarioContainer}>

      <Text style={styles.principal}>Horário de Funcionamento</Text>

      <View style={styles.horario}>
            <Image style={styles.contatoImagem} source={require('../../../assets/images/clock.png')}/>
            <Text style={styles.contatoTexto}>Segunda-feira: {horarioFuncionamento.segunda}</Text>
      </View>

      <View style={styles.horario}>
            <Image style={styles.contatoImagem} source={require('../../../assets/images/clock.png')}/>
            <Text style={styles.contatoTexto}>Terça-feira: {horarioFuncionamento.terca}</Text>
      </View>

      <View style={styles.horario}>
            <Image style={styles.contatoImagem} source={require('../../../assets/images/clock.png')}/>
            <Text style={styles.contatoTexto}>Quarta-feira: {horarioFuncionamento.quarta}</Text>
      </View>

      <View style={styles.horario}>
            <Image style={styles.contatoImagem} source={require('../../../assets/images/clock.png')}/>
            <Text style={styles.contatoTexto}>Quinta-feira: {horarioFuncionamento.quinta}</Text>
      </View>

      <View style={styles.horario}>
            <Image style={styles.contatoImagem} source={require('../../../assets/images/clock.png')}/>
            <Text style={styles.contatoTexto}>Sexta-feira: {horarioFuncionamento.sexta}</Text>
      </View>

      <View style={styles.horario}>
            <Image style={styles.contatoImagem} source={require('../../../assets/images/clock.png')}/>
            <Text style={styles.contatoTexto}>Sábado: {horarioFuncionamento.sabado}</Text>
      </View>

      <View style={styles.horario}>
            <Image style={styles.contatoImagem} source={require('../../../assets/images/clock.png')}/>
            <Text style={styles.contatoTexto}>Domingo: {horarioFuncionamento.domingo}</Text>
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
  horarioContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
  },
  horario: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  principal: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  contatoImagem: {
    height: 25,
    width: 25,
  },
  contatoTexto: {
    marginLeft: 5,
  }
})
