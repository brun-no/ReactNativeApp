import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [idTarefaEditada, setIdTarefaEditada] = useState('');
  const [tarefaEdit, setTarefaEdit] = useState('');
  const [tarefa, setTarefa] = useState('');
  const [abrirModal, setAbrirModal] = useState(false);
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('Tarefas').then((tarefasSalvas) => {
      if (tarefasSalvas) {
        setTarefas(JSON.parse(tarefasSalvas));
      }
    });
  }, []);

  function adicionaTarefa() {
    if (tarefa.trim() !== '') {
      const novaTarefa = {
        id: String(new Date().getTime()),
        nome: tarefa,
      };

      AsyncStorage.getItem('Tarefas').then((tarefasSalvas) => {
        let tarefas = [];

        if (tarefasSalvas) {
          tarefas = JSON.parse(tarefasSalvas);
        }

        tarefas.push(novaTarefa);

        AsyncStorage.setItem('Tarefas', JSON.stringify(tarefas)).then(() => {
          setTarefas(tarefas);
          setTarefa('');
        });
      });
    } else {
      alert('Digite uma tarefa');
    }
  }

  function deletarTarefa(id) {
    AsyncStorage.getItem('Tarefas').then((tarefasSalvas) => {
      let tarefas = [];

      if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
      }

      tarefas = tarefas.filter((tarefa) => tarefa.id !== id);

      AsyncStorage.setItem('Tarefas', JSON.stringify(tarefas)).then(() => {
        setTarefas(tarefas);
      });
    });
  }

  return (
    <>
      <View style={styles.titulo}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>
          Minhas Tarefas
        </Text>
      </View>

      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={abrirModal}>
          <View style={styles.telaEdit}>
            <TouchableOpacity
              style={styles.botaoexcluir}
              onPress={() => setAbrirModal(false)}
            >
              <EvilIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </Modal>

        <TextInput
          value={tarefa}
          returnKeyType="done"
          style={styles.entradadetexto1}
          onChangeText={setTarefa}
          placeholder="Digite uma tarefa"
        />

        <TouchableOpacity style={styles.botao} onPress={adicionaTarefa}>
          <Text style={styles.textbotao}>Adicionar</Text>
        </TouchableOpacity>

        <View style={styles.exibirResultado}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>
            Minhas tarefas
          </Text>
        </View>

        <View>
          <FlatList
            data={tarefas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.tarefaUnidade}>
                <View style={styles.icones}>
                  <Text style={styles.textoTarefa}>{item.nome}</Text>
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity
                      onPress={() => deletarTarefa(item.id)}
                    >
                      <AntDesign name="delete" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

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

  entradadetexto1: {
    marginTop: 20,
    width: 256,
    height: 60,
    borderWidth: 2,
    borderColor: '#000000',
    marginLeft: 30,
    backgroundColor: 'white',
    color: '#black',
    fontSize: 18,
    margin: 'center',
    borderRadius: 7,
    padding: 15,
  },

  icones: {
    flexDirection: 'row',
    display: 'flex',
    alignSelf: 'stretch',
    width: '100%',
    justifyContent: 'space-between',
  },

  tarefaUnidade: {
    backgroundColor: 'blue',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },

  textoTarefa: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    width: 170,
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

  textbotao: {
    fontFamily: 'courier-regular',
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    width: 256,
    height: 65,
  },

  botaoexcluir: {
    display: 'flex',
    marginLeft: 178,
  },

  exibirResultado: {
    fontFamily: 'courier-regular',
    textAlign: 'center',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'rgba(155,155,155,1)',
    marginTop: 5,
  },
});
