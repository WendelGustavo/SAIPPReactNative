
import { View, Text, Image, TouchableOpacity, ScrollView , SafeAreaView} from 'react-native';
import {React , useState,useEffect } from 'react';
import { Viex,Text3,Text2 ,Viex2,Text33, Button,  Textobotao2,Text333} from './styles';
import { Ionicons,   } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
  
    export default function Umidade(){
    const [Humidade, setHumidade] = useState('');
    const [Pressao, setPressao] = useState('');
    const [Color , setColor] = useState('');
    const [ max , setMax] = useState('');
    const [ min , setMin] = useState('');

    const navigation = useNavigation();



    async function Api(){
        await fetch('https://apidowendel.herokuapp.com/api.php')
        .then(async response => {
            const data = await response.json();
            setHumidade(data.temperatura);
        }
        )
        await fetch('https://apidowendel.herokuapp.com/api2.php')
        .then(async response => {
            const data = await response.json();
            setMax(data.max);
            setMin(data.min);
        }
        )

        test();
    } 


     function test(){
        if(Humidade > 70){
                setPressao('Umidade Alta');
                setColor("'red'");
                console.log(Color);
        }else{
                setPressao('Umidade Baixa');
                setColor("'red'");
                console.log(Color);
        }
    }

    useEffect(() => {
        Api();
    
        }, []);
  return (
    <Viex>

        <Text2>Umidade</Text2>
        <Ionicons 
        name="refresh-outline"
        size={30}
        style={{marginTop: 20, marginLeft: 20, position: 'absolute', zIndex: 1, right: '5%'}}
        color={"#02AB72"} 
        onPress={Api}
        />
        <Viex2>
        <Text33>{Pressao}</Text33>
        <Text3>{Humidade} %</Text3>
        <Button onPress={() => navigation.navigate('EditarU')}>
            <Textobotao2> Criar configuração </Textobotao2>
        </Button>
        <Text333>
            max: {max}% | min: {min}%
        </Text333>

        </Viex2>

    </Viex>
  );

}
