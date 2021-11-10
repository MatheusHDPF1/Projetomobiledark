import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#090909'
    },
    header:{
        flexDirection:'row',
        paddingTop:20,
        paddingLeft:10,
        paddingRight:20,
        paddingBottom:30,
        justifyContent:'center'

    },
    perfil:{

    },
    imgperfil:{
        width:80,
        height:80,
        resizeMode:'contain',
        borderRadius:100

    },
    nome:{
        color:'989cac',
        fontWeight:'bold',
        fontSize:20,
        padding:10

    },
    descricao:{
        color:'989cac',
        paddingLeft:20,

    },
    imgpesquisa:{
        flex:1,
        width:30,
        height:50,
        resizeMode:'contain'

    }, 
    pesquisa:{

    },
    titulo:{
        flex:2

    }

})