import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={estilo.container}>


      {/* {Inicio do Header} */}
      <View style={estilo.header}>

        <View style={estilo.perfil}>
          <Image source={{uri:"https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"}} style={estilo.imgperfil}/> 
        </View>

        <View style={estilo.titulo}>
         <Text style={estilo.nome}> Pedro de Oliveira </Text>
         <Text style={estilo.descricao}> Programador </Text>
        </View>

        <View style={estilo.pesquisa}>
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/meta/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png"}}style={estilo.imgpesquisa}/>
      
        </View>
        </View>
       {/* {Fim do Header} */}
       
       <ScrollView horizontal={false}>

       {/* {Inicio do Stores} */}

      <View style={estilo.stories}>
         <Text style={estilo.titulostories}>
           Stories
         </Text>

         <ScrollView horizontal={true} style={estilo.scrollstories}>
           <View>
             <Text style={estilo.blackbox}>Live</Text>
              <Image source={{uri:"https://images.unsplash.com/photo-1635454022133-e287f3924950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} style={estilo.imgstories}/>
              
              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Savannah</Text>
                <Image source={require("./assets/iconverifiedcópia.png")} style={estilo.icon}/>

              </View>
           </View>

           <View>
             <Text style={estilo.redbox}>Live</Text>
              <Image source={{uri:"https://images.unsplash.com/photo-1635876988521-35f66cda80ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"}} style={estilo.imgstories}/>
              
              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Cooper</Text>
                <Image source={require("./assets/iconverifiedcópia.png")} style={estilo.icon}/>

              </View>
           </View>

           <View>
              <Image source={{uri:"https://images.unsplash.com/photo-1633950291913-41d5727b9b73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80"}} style={estilo.imgstories}/>
              
              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Howard</Text>
                <Image source={require("./assets/iconverifiedcópia.png")} style={estilo.icon}/>

              </View>
           </View>

           <View>
              <Image source={{uri:"https://images.unsplash.com/photo-1635672978235-a5677e4a6131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"}} style={estilo.imgstories}/>
              
              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Woman</Text>
                <Image source={require("./assets/iconverifiedcópia.png")} style={estilo.icon}/>

              </View>
           </View>

           <View>
              <Image source={{uri:"https://images.unsplash.com/photo-1634423623074-de676f545acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"}} style={estilo.imgstories}/>
              
              <View style={estilo.txticon}>
                <Text style={estilo.txt}>Woman</Text>
                <Image source={require("./assets/iconverifiedcópia.png")} style={estilo.icon}/>

              </View>
           </View>
          </ScrollView>

      </View>
      {/* {Fim do Stores ###################} */}

      {/* Início do Trending ###############*/}
      <View style={estilo.trending}>

      <View style={estilo.cxtitulo}>
        <Text style={estilo.trendingtitulo}>
          Trending
        </Text>
        <Image source={require("./assets/more.png")} style={estilo.tredingmore}/>
        
        
      </View>  

      <View style={estilo.cxtredingdetalhe}>
        <View>
          <Image source={{uri:"https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/276091/d5d7840c7bc6fa0e0fbda6542d3853afmaartenduineveld1411485unsplash/61,0,1164,695/670,400,0.45/0/default.jpg"}} style={estilo.detalheimg}/>
          <Text style={estilo.detalhelike}>Like</Text>
        </View>


        <View style={estilo.tredingusuario}>
          <Image source={{uri:"https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-user-profile-vector-png-image_4830519.jpg"}} style={estilo.tredingusuarioimg}/>
          <View>
            <Text style={estilo.tredingusuariotitulo}> João</Text>
            <Text style={estilo.tredingusuariosub}>2 minutos atras</Text>
          </View>
        </View>

        <Text style={estilo.tredingobs}>               

         Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sit animi saepe iure. Laborum fugit sapiente labore tenetur accusamus quo, amet hic, expedita dicta cum iusto obcaecati vel provident voluptas.

        </Text>
        
      </View>


      </View>


      {/* Fim do Treding */}

      {/* Todos os elementos devem ficar acima do ScrollView */}
      </ScrollView>
    </View>
  );
}
