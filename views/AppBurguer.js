import React, { useState, useEffect, Component } from 'react';
import { Button, 
Text, 
View, 
StyleSheet, 
TextInput, 
TouchOpacity, 
ScrollView, 
Image,
ImageBackground,
TouchableOpacity  } from 'react-native';


export default function App(){
return(

<View style={styles.container}>
      <View style={styles.buttonStackStack}>
        
         <Image
            source={require("../assets/lanches.png")}
            resizeMode="contain"
            style={styles.image9}
          ></Image>
        
        <View style={styles.buttonStack}>


          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../assets/icone_informacoes.png")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
            <Text style={styles.informacoes}>Informações</Text>
          </TouchableOpacity>
         
        </View>


        <TouchableOpacity style={styles.button1}>
          <Image
            source={require("../assets/icone_compartilhe.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <Text style={styles.compartilhe}>Compartilhe</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button2}>
          <Image
            source={require("../assets/icone_conta.png")}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
          <Text style={styles.minhaConta}>Minha conta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button5Row}>
        <TouchableOpacity style={styles.button5}>
          <View style={styles.image3Stack}>
            <Image
              source={require("../assets/icone_cardapio.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
            <Text style={styles.cardapio}>Cardápio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
          <View style={styles.image7Stack}>
            <Image
              source={require("../assets/icone_ganhe.png")}
              resizeMode="contain"
              style={styles.image7}
            ></Image>
            <Text style={styles.junteEGanhe}>Junte e ganhe</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Image
            source={require("../assets/icone_pedidos.png")}
            resizeMode="contain"
            style={styles.image8}
          ></Image>
          <Text style={styles.meusPedidos}>Meus pedidos</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/logo.png")}
        resizeMode="contain"
        style={styles.image10}
      ></Image>
    </View>
);
}

//estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(28,28,28,1)"
  },
  button: {
    top: 0,
    left: 88,
    width: 97,
    height: 79,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 16,
    shadowColor: "rgba(248,231,28,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  image5: {
    width: 50,
    height: 50,
    marginTop: 8,
    marginLeft: 22
  },
  informacoes: {
    fontFamily: "impact-regular",
    color: "#121212",
    fontSize: 10,
    marginTop: 4,
    marginLeft: 21
  },
  image9: {
    top: 8,
    left: 0,
    width: 277,
    height: 308,
    position: "absolute"
  },
  buttonStack: {
    top: 0,
    left: 12,
    width: 277,
    height: 316,
    position: "absolute"
  },
  button1: {
    top: 0,
    left: 200,
    width: 97,
    height: 79,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,1)",
    borderRadius: 16,
    shadowColor: "rgba(248,231,28,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  image4: {
    width: 50,
    height: 40,
    marginTop: 13,
    marginLeft: 22
  },
  compartilhe: {
    fontFamily: "impact-regular",
    color: "#121212",
    fontSize: 10,
    marginTop: 9,
    marginLeft: 22
  },
  button2: {
    top: 0,
    left: 0,
    width: 97,
    height: 79,
    position: "absolute",
    backgroundColor: "rgba(250,250,250,1)",
    borderRadius: 16,
    shadowColor: "rgba(248,231,28,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  image6: {
    width: 40,
    height: 40,
    marginTop: 9,
    marginLeft: 30
  },
  minhaConta: {
    fontFamily: "impact-regular",
    color: "#121212",
    fontSize: 10,
    marginTop: 13,
    marginLeft: 24
  },
  buttonStackStack: {
    width: 297,
    height: 316,
    marginTop: 330,
    marginLeft: 12
  },
  button5: {
    width: 97,
    height: 79,
    backgroundColor: "rgba(250,250,250,1)",
    borderRadius: 16,
    shadowColor: "rgba(248,231,28,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  image3: {
    top: -1,
    left: 0,
    width: 50,
    height: 60,
    position: "absolute"
  },
  cardapio: {
    top: 58,
    left: 6,
    position: "absolute",
    fontFamily: "impact-regular",
    color: "#121212",
    fontSize: 10
  },
  image3Stack: {
    width: 50,
    height: 72,
    marginTop: 3,
    marginLeft: 23
  },
  button4: {
    width: 97,
    height: 79,
    backgroundColor: "#E6E6E6",
    borderRadius: 16,
    shadowColor: "rgba(248,231,28,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 3
  },
  image7: {
    top: 0,
    left: 5,
    width: 50,
    height: 50,
    position: "absolute"
  },
  junteEGanhe: {
    top: 49,
    left: 0,
    position: "absolute",
    fontFamily: "impact-regular",
    color: "#121212",
    fontSize: 10
  },
  image7Stack: {
    width: 55,
    height: 63,
    marginTop: 12,
    marginLeft: 19
  },
  button3: {
    width: 97,
    height: 79,
    backgroundColor: "rgba(230,230, 230,1)",
    borderRadius: 16,
    shadowColor: "rgba(248,231,28,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 3
  },
  image8: {
    width: 45,
    height: 45,
    marginTop: 12,
    marginLeft: 23
  },
  meusPedidos: {
    fontFamily: "impact-regular",
    color: "#121212",
    fontSize: 10,
    marginTop: 4,
    marginLeft: 18
  },
  button5Row: {
    height: 79,
    flexDirection: "row",
    marginTop: -406,
    marginLeft: 12,
    marginRight: 51
  },
  image10: {
    width: 221,
    height: 199,
    marginTop: -287,
    marginLeft: 50
  }
});