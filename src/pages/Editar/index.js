import { useState , useRef} from 'react';
import { SafeAreaView, Text , View, StyleSheet ,TextInput , Modal,TouchableOpacity } from 'react-native'; 
import { Titulo,
    Area, 
    Titulo2, 
    Button, 
    Textobotao,
    Textobotao2,
    Buttoncad} from './styles';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Editar() {

    const navigation = useNavigation();
    const [Nome, setNome] = useState("");
    const [Cep, setCep] = useState("");
    const [Senha, setSenha] = useState("");
    const CepRef = useRef(null);
    const [showRealApp, setShowRealApp] = useState(false);

    if(showRealApp){
        edit( Nome , Cep , Senha );
    }

    async function edit(Nome,Cep,Senha){
        await AsyncStorage.removeItem("@nome");
        await AsyncStorage.removeItem("@cep");
        await AsyncStorage.removeItem("@senha");
        await AsyncStorage.setItem("@nome", Nome);
        await AsyncStorage.setItem("@cep", Cep);
        await AsyncStorage.setItem("@senha", Senha);
        const unmaksed = CepRef?.current.getRawValue();
        AsyncStorage.removeItem("@cep2");
        AsyncStorage.setItem('@cep2', unmaksed);
        navigation.navigate('Tabs');
    }
    
    return (

        <Area style={styles.container}>
        <Titulo> Realize alterações nas suas informações:</Titulo>
            <Titulo2> Nome</Titulo2>
            <TextInput style={styles.input} placeholder="Digite seu novo nome"
            value = {Nome}
            placeholderTextColor={'#fff'}
            onChangeText={text => {setNome(text)}}
            />
            <Titulo2> Senha</Titulo2>
            <TextInput style={styles.input} placeholder="Digite sua nova senha"
            value={Senha}
            placeholderTextColor={'#fff'}
            onChangeText={text => {setSenha(text)}}/>
            <Titulo2> CEP</Titulo2>
            <TextInputMask 
            style={styles.input} placeholder="Digite seu novo CEP"
            keyboardType='numeric'
            type={'custom'}
            options={{
                mask: '95630-000'
            }}
            value={Cep}
            placeholderTextColor={'#fff'}
            color={'#fff'}
            onChangeText={text => {setCep(text)}}
            ref={CepRef}
            />
            <Button onPress={() =>setShowRealApp(true)}>
                <Textobotao2> Salvar alterações</Textobotao2>
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



