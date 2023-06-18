import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

// Importando biblioteca para usar o Cronômetro e o Temporizador
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const App = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(10000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>Cronômetro </Text>
        </View>
        <View style={styles.exibirResultado}>
          <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            // Para iniciar
            reset={resetStopwatch}
            // Para resetar
            options={options}
            // Opções de estilo
            getTime={(time) => {
              console.log(time);
            }}
          />
          <TouchableHighlight
            style={styles.botao}
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}
          >
            <Text style={styles.textobotao}>
              {!isStopwatchStart ? 'INICIAR' : 'PARAR'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.botao}
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}
          >
            <Text style={styles.textobotao}>RESETAR</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

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

 botao: {
    backgroundColor: 'blue',
    marginTop: 15,
    borderWidth: 0,
    borderColor: 'rgba(0,0,0,1)',
    borderRadius: 15,
    flexDirection: 'row',
    shadowColor: 'rgba(0,0,0,1)',
    marginLeft: 32,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    overflow: 'visible',
    width: 250,
    height: 40,
  },
  textobotao: {
    fontFamily: 'courier-regular',
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    width: 256,
    height: 65,
  },
  exibirResultado: {
    fontFamily: 'courier-regular',
    textAlign: 'center',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 80,
  },
});

const options = {
  container: {
    backgroundColor: 'blue',
    marginTop: 0,
    borderWidth: 0,
    borderColor: 'rgba(0,0,0,1)',
    borderRadius: 10,
    flexDirection: 'center',
    shadowColor: 'rgba(0,0,0,1)',
    marginLeft: 32,
    width: 230,
    height: 60,
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};