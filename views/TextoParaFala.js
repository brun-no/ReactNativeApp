import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import * as Speech from 'expo-speech';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textoBotaoSalvar: 'Salvar',
      textoBotaoLista: 'Lista',
      textoBotaoSom: 'Som',
      textoBotaoLimpar: 'Limpar',
      texto: '',
      titulo: 'Texto para Fala',
      mostrarMensagem: false,
    };
  }

  falar = () => {
    const palavra = this.state.texto;
    Speech.speak(palavra);
  };

  limparTexto = () => {
    this.setState({
      texto: '',
    });
  };

  baixarAudio = () => {
    this.setState({ mostrarMensagem: true });
    // Aqui você pode adicionar o código para baixar o áudio
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titulo}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>Texto para Fala: </Text>
        </View>

        <TextInput
          style={styles.caixaTexto}
          value={this.state.texto}
          placeholder="Toque aqui para digitar o texto"
          onChangeText={(data) => {
            this.setState({
              texto: data,
            });
          }}
          keyboardType="default"
          multiline={true}
          scrollEnabled={true}
          textAlignVertical="top"
        />

        <SafeAreaView style={styles.botoesInferiores}>
          <TouchableOpacity style={styles.botaoBaixar} onPress={this.baixarAudio}>
            <Image style={styles.iconeDesabilitarTeclado} source={require('../assets/save.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoSom} onPress={this.falar}>
            <Image style={styles.iconeSom} source={require('../assets/waves.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoLimpar} onPress={this.limparTexto}>
            <Image style={styles.iconeLimpar} source={require('../assets/x.png')} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.mensagem}>
          {this.state.mostrarMensagem && (
            <Text style={styles.textoMensagem}>Aguarde, o áudio já está sendo baixado na sua área de downloads</Text>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  titulo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: 'blue',
    marginTop: 5,
  },

  caixaTexto: {
    marginTop: 20,
    height: 440,
    width: 290,
    backgroundColor: 'lightyellow',
    borderRadius: 5,
    fontSize: 18,
    borderWidth: 10,
    borderColor: 'lightyellow',
    marginLeft: 30,
  },

  botaoBaixar: {
    marginTop: 5,
    width: 60,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeDesabilitarTeclado: {
    transform: [{ scaleX: 0.07 }, { scaleY: 0.07 }],
  },

  iconeSom: {
    transform: [{ scaleX: 0.15 }, { scaleY: 0.08 }],
  },

  botaoSom: {
    marginTop: 5,
    backgroundColor: 'blue',
    shadowColor: 'rgba(0,0,0,1)',
    borderWidth: 0,
    borderColor: 'rgba(0,0,0,1)',
    width: 110,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
  },

  botaoLimpar: {
    marginTop: 5,
    width: 60,
    height: 55,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeLimpar: {
    transform: [{ scaleX: 0.07 }, { scaleY: 0.07 }],
  },

  botoesInferiores: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mensagem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  textoMensagem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});