import { useState , useRef} from 'react';
import { SafeAreaView, Text , View, StyleSheet ,TextInput , Modal,TouchableOpacity } from 'react-native'; 
import { Titulo,
    Area,
    Titulo2,
    Button,
    Textobotao,
    Textobotao2,
    Buttoncad} from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function EditarU() {

    const navigation = useNavigation();
    const [Min, setMin] = useState("");
    const [Max, setMax] = useState("");
    const [showRealApp, setShowRealApp] = useState(false);

    if(showRealApp){
        edit( Max , Min );
    }
    async function edit( Max , Min ){ 
        const Max2= Max;
        const Min2= Min;
        const link = 'https://apidowendel.herokuapp.com/envio2.php?max='+Max2+'&min='+Min2+'';

        fetch(link)
        navigation.navigate('Tabs');
    }
    
    return (

        <Area style={styles.container}>
        <Titulo>Programe uma quantidade maxima e uma minima para seu sistema funcionar de forma automatica</Titulo>
            <Titulo2> Max</Titulo2>
            <TextInput style={styles.input} placeholder="Digite valor Maximo"
            value = {Max}
            placeholderTextColor={'#fff'}
            onChangeText={text => {setMax(text)}}
            />
            <Titulo2> Min</Titulo2>
            <TextInput style={styles.input} placeholder="Digite valor Minimo"
            value={Min}
            placeholderTextColor={'#fff'}
            onChangeText={text => {setMin(text)}}/>
            <Button onPress={() =>setShowRealApp(true)}>
                <Textobotao2> Salvar configuração</Textobotao2>
            </Button>
            </Area>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },input: {
       borderBottomWidth: 1,
       height: 40,
        marginBottom: 12,
        fontSize: 16,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: '#fff',
        color: '#fff',
        placeholderTextColor: '#fff',

    },button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#909090',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        width: 450,
        height: 50,
        marginTop: 130,
        color: '#121212',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        textAlign: 'center',
    }

})



