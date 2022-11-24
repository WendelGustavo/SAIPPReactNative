
import { View, Text, Image, TouchableOpacity, ScrollView , SafeAreaView} from 'react-native';
import {React , useState,useEffect } from 'react';
import {  Text2, ViewPrev, Nome2,Temp2 ,Descricao2,Maxmin,Umidade ,Umidade2} from './styles';
import{ Ionicons} from '@expo/vector-icons';

 







export default function  Previsão(){
    async function Api(){
        await fetch('https://api.openweathermap.org/data/2.5/weather?q=parobe&lang=pt_br&units=metric&APPID=64ed82577ced7f69cb1687f0ce536131')
        .then(async response => {
            const data = await response.json();
            setNome(data.name + ', ' + data.sys.country);
            const temp = (Math.trunc(data.main.temp));
            setTemp(temp);
            const min = (Math.trunc(data.main.temp_min));
            const max = (Math.trunc(data.main.temp_max));
            setTempmax(max);
            setTempmin(min);
            setHumidade(data.main.humidity);
            setVelocidade(data.wind.speed);
            setGraus(data.wind.deg);
            setRajada(data.wind.gust);
            setDescricao(data.weather[0].description);
            setIcone(data.weather[0].icon);
    
        }
        )
    }    
    const [Nome, setNome] = useState('');
    const [Temp, setTemp] = useState('');
    const [Tempmax, setTempmax] = useState('');
    const [Tempmin, setTempmin] = useState('');
    const [Humidade, setHumidade] = useState('');
    const [Velocidade, setVelocidade] = useState('');
    const [Descricao, setDescricao] = useState('');
    const [Graus, setGraus] = useState('');
    const [Rajada, setRajada] = useState('');
    
    useEffect(() => {
        Api();
        }, []);
  return (
     <ViewPrev>
         <Text2 style={{color :"#02AB72"}}>
            Previsão do Tempo
        </Text2>
        <Ionicons 
        name="refresh-outline"
        size={30}
        style={{marginTop: 20, marginLeft: 20, position: 'absolute', zIndex: 1, right: '5%'}}
        color={"#02AB72"} 
        onPress={Api}
        />
        <Nome2>{Nome}</Nome2>
        <Temp2>{Temp}°C</Temp2>
        <Descricao2>{Descricao} 🌥</Descricao2>
        <Maxmin>max | {Tempmax}°C  min |{Tempmin}°C</Maxmin>
        <Umidade>Referente a umidade do ar:</Umidade>
        <Umidade2>
            Umidade de : {Humidade}</Umidade2>
        <Umidade>
            Referente ao vento: 💨 
        </Umidade>
        <Umidade2>
            Velocidade: {Velocidade}
        </Umidade2>
        <Umidade2>
            Graus: {Graus}
        </Umidade2>
        <Umidade2>
            Rajada: {Rajada}
        </Umidade2>
    </ViewPrev>
  );

}


