import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#090909'
    },
    header:{
        flexDirection:'row',
        paddingTop:60,
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
        color:'#989cac',
        fontWeight:'bold',
        fontSize:18,
        padding:10

    },
    descricao:{
        color:'#989cac',
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

    },
    stories:{


    },
    titulostories:{
        color:'#989cac',
        fontSize:20,
        margin:20
    },
    scrollstories:{

    },
    imgstories:{
        width:200,
        height:300,
        resizeMode:'contain',
        borderRadius:50,
        margin:9
    },
    blackbox:{
        backgroundColor:'#090909',
        color:'#989cac',
        fontSize:15,
        padding:10,
        width:50,
        borderRadius:9,
        position:"absolute",
        zIndex:1000,
        top:20,
        left:20,
        textAlign:'center',
        
    },
    redbox:{
        backgroundColor:'#F5635D',
        color:'#000000',
        fontSize:15,
        padding:9,
        width:99,
        borderRadius:8,
        position:"absolute",
        zIndex:1000,
        top:24,
        left:25,
        textAlign:'center',
    },
    txticon:{
        flexDirection:"row",
        alignItems:'center'

    },
    txt:{
        color:"#989cac",
        fontSize:17,
        padding:10
    },
    icon:{
        width:18,
        height:15,
        resizeMode:'contain'
    }
    

})