import { React, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image,View, StyleSheet} from 'react-native'; 
import {ViewHome,ViewBotao, Text2,ViewHome2,Text22,Text23 } from './styles';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Ionicons} from '@expo/vector-icons';




export default function Home(){  
    const navigation = useNavigation();
    async function buscar(){
        const nome = await AsyncStorage.getItem('@nome');
        console.log(nome);
        if(nome===null){
            navigation.navigate('Bemvindo');
        }
        fetch('https://apidowendel.herokuapp.com/api.php').then(async response => {
            const data = await response.json();

            if(data.temp==1){
                setEstado("Sistema de Irrigação Ligado");
                setEstado2(data.temp);
                setCreito("https://apidowendel.herokuapp.com/imagens/ligado.png")

            }
            else{
                setEstado("Sistema de Irrigação Desligado");
                setEstado2(data.temp);
                setCreito("https://apidowendel.herokuapp.com/imagens/desligado.png")
            }
            
    }
    )
    }

    function click (){
        if(estado2==1){
        fetch('https://apidowendel.herokuapp.com/envio.php?estado=0')

        }
        else{
        fetch('https://apidowendel.herokuapp.com/envio.php?estado=1')

        }
        setTimeout(() => {
        buscar();
        }, 3000);
        
    }
        

    
    const [estado, setEstado] = useState('');
    const [estado2, setEstado2] = useState('');
    const [ creito , setCreito] = useState('');
    useEffect(() => {
        buscar();
    }, []);
        
return(
    <ViewHome>
        <Text2 style={{color :"#02AB72"}}>
            Home
        </Text2>
        <Ionicons 
        name="refresh-outline"
        size={30}
        style={{marginTop: 20, marginLeft: 20, position: 'absolute', zIndex: 1, right: '5%'}}
        color={"#02AB72"} 
        onPress={buscar}
        />
        <ViewHome2>
        <Text22>
            {estado}
        </Text22>
        </ViewHome2>
        <ViewBotao
        onPress={click}
        >
            <Text23 style={{color :"#02AB72"}}>
                {estado2==1 ? "DESLIGAR" : "LIGAR"}
            </Text23>
        </ViewBotao>
        <Image 
        source={{uri: creito}}
        style={{width: 500, height: 400 ,bottom : 50, alignContent : 'center',alignItems: 'center', alignSelf : 'center' , position: 'absolute', zIndex: -1}}
        
        />
    </ViewHome>
)
}


