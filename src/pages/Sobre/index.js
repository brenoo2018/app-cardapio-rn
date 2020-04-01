import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Sobre() {

  const sobre = 'Um simples projeto feito em React Native com o objetivo de praticar a ferramenta.';

  return (
    <View style={styles.container}>

      <View style={styles.sobreContainer}>

        <Text style={styles.principal}>Sobre</Text>

        <View style={styles.sobre}>
          <Text style={styles.sobreTexto}>{sobre}</Text>
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
  sobreContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
  },
  sobre: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  principal: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
  },
  sobreTexto: {
    marginLeft: 5,
  }
})