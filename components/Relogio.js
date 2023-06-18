import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

export default function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const hora = date.getHours();
  const dia = date.getDate();
  const dias = date.getDay();
  const mes = date.getMonth();
  let ano = date.getYear();

  if (dia < 10) {
    dia = '0' + dia;
  }
  if (ano < 2000) {
    ano = 1900 + ano;
  }

  const NomeDiaWMOnline = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  const NomeMesWMOnline = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];

  let saudacao;

  if (hora >= 0 && hora < 6) {
    saudacao = 'Tenha uma ótima madrugada, ';
  } else if (hora >= 6 && hora < 12) {
    saudacao = 'Tenha um bom dia, ';
  } else if (hora >= 12 && hora < 18) {
    saudacao = 'Tenha uma boa tarde, ';
  } else {
    saudacao = 'Tenha uma boa noite, ';
  }

  const data = `${NomeDiaWMOnline[dias]}, ${dia} de ${NomeMesWMOnline[mes]} de ${ano}`;

  return (
    <View>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: '#000', fontFamily: 'verdana'}}>Horário: {date.toLocaleTimeString()} </Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: '#000', fontFamily: 'verdana'}}>Hoje é {data} </Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: '#000', fontFamily: 'verdana'}}>{saudacao} este app foi desenvolvido por: @brunno_u </Text>
<Text style={{fontSize: 12, fontWeight: 'bold', color: '#000', fontFamily: 'verdana'}}>nas Aulas do Prof. Caio</Text>
      
    </View>
  );
}
