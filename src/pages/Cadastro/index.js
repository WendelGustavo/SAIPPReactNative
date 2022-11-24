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
import { ModalMy2 } from "../../components/Modal2";



export default function Cadastro(){  
    const navigation = useNavigation();
    const [Nome, setNome] = useState('');
    const [Senha, setSenha] = useState('');
    const [Cep, setCep] = useState('');
    const [showRealApp, setShowRealApp] = useState(false);
    const CepRef = useRef(null);
    const [ModalVisible, setModalVisible] = useState(false);


    if(showRealApp){
        salvar( Nome , Cep , Senha );
    }

    function salvar(Nome,Cep,Senha){
         console.log(Nome, Cep, Senha);
         AsyncStorage.setItem('@nome', Nome);
         AsyncStorage.setItem('@cep', Cep);
         AsyncStorage.setItem('@senha', Senha);
         const unmaksed = CepRef?.current.getRawValue();
        AsyncStorage.setItem('@cep2', unmaksed);
        navigation.navigate('Slider');
    }

return(
    <Area style={styles.container}>
    <Titulo> Faça o Cadastro em nosso aplicativo</Titulo>
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
        <Titulo2> CEP</Titulo2>
        <TextInputMask 
        style={styles.input} placeholder="Digite seu CEP"
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
            <Textobotao2> Cadraste-se </Textobotao2>
        </Button>
        <Buttoncad onPress={() =>{navigation.navigate('Login')}}>
            <Textobotao> Ja possui uma conta? Logue-se.</Textobotao>
        </Buttoncad>
        <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.button}
                >
                    <Text>
                    Esqueceu seu CEP? Clique aqui!
                    </Text>
                </TouchableOpacity>
                
    <Modal
                visible={ModalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
                animationType="slide"
                >
                    <ModalMy2
                    handleClose={() => setModalVisible(false)}
                    />
                </Modal>
    </Area>
   




)
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
