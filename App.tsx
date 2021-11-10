import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={estilo.container}>

      <View style={estilo.header}>
        <View style={estilo.perfil}>
          <Image source={{uri:"https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"}} style={estilo.imgperfil}/> 
      </View>

      <View style={estilo.titulo}>
        <Text style={estilo.nome}> Pedro de Oliveira </Text>
        <Text style={estilo.descricao}> Programador </Text>
      </View>

      <View style={estilo.pesquisa}>
        <Image source={{uri:"https://w7.pngwing.com/pngs/321/177/png-transparent-computer-icons-magnifier-magnifying-glass-magnifying-glass-text-share-icon-magnifier.png"}} style={estilo.imgpesquisa}/>
      
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
