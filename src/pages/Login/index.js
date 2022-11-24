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



export default function Login() {

    const navigation = useNavigation();
    const [Nome, setNome] = useState("");
    const [Senha, setSenha] = useState("");
    const [showRealApp, setShowRealApp] = useState(false);

    if(showRealApp){
        edit( Nome , Senha );
    }
    async function edit(Nome,Senha){
        await AsyncStorage.removeItem("@nome");
        await AsyncStorage.removeItem("@senha");
        await AsyncStorage.setItem("@nome", Nome);
        await AsyncStorage.setItem("@senha", Senha);
        navigation.navigate('Tabs');
    }
    
    return (

        <Area style={styles.container}>
        <Titulo> Realize login na sua conta aqui:</Titulo>
            <Titulo2> Nome</Titulo2>
            <TextInput style={styles.input} placeholder="Digite seu nome"
            value = {Nome}
            placeholderTextColor={'#fff'}
            onChangeText={text => {setNome(text)}}
            />
            <Titulo2> Senha</Titulo2>
            <TextInput style={styles.input} placeholder="Digite sua senha"
            value={Senha}
            placeholderTextColor={'#fff'}
            onChangeText={text => {setSenha(text)}}/>
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



