import { React} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image} from 'react-native'; 
import {Containerr ,Sub,Sub2} from './styles';
import { useEffect } from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';


export default function Start(){  

    const navigation = useNavigation();

    async function buscar(){
        const nome = await AsyncStorage.getItem('@nome');
        console.log(nome);
        if(nome===null){

            delay();
            
        }else{

            delay2();
        }

    }
    function delay(){
        setTimeout(() => {
            navigation.navigate('Bemvindo');
        }, 2000);
    }
    function delay2(){
        setTimeout(() => {
            navigation.navigate('Tabs');
        }, 2000);
    }
    useEffect(() => {
        buscar();
        }, []);
return(
    <Containerr>
            <Image
            source={require('../../../assets/saipp.png')}
            style={{width: '40%'}}
            resizeMode="contain"
            />
            <Sub>from</Sub>
            <Sub2> SAIPP </Sub2>
    </Containerr>
)
}

