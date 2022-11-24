import {useState , useEffect} from 'react';
import { View, TextInput, Image, TouchableOpacity, ScrollView , SafeAreaView, Modal} from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { Viex , Sub, Texto , Senha2,Nome2 , Cep2 , Viex2, Nome3 , But,TextBut, Text2} from './styles';
import { Ionicons,   } from '@expo/vector-icons';
import { ModalMy } from "../../components/Modal";
import { useNavigation } from '@react-navigation/native';


export default function Perfil(){

    const navigation = useNavigation();
    const [Nome, setNome] = useState('');
    const [Senha, setSenha] = useState('');
    const [Cep , setCep] = useState('');
    const [ModalVisible, setModalVisible] = useState(false);

    function Edit(){

        navigation.navigate('Editar');


    }
    function Deslog(){
        AsyncStorage.clear();
        navigation.navigate('Bemvindo');
    }

    async function buscar(){
        const Nome = await AsyncStorage.getItem('@nome');
        const Senha = await AsyncStorage.getItem('@senha');
        const Cep = await AsyncStorage.getItem('@cep');
        setNome(Nome);
        setSenha(Senha);
        setCep(Cep);
    }
    useEffect(() => {
        buscar();
    }, []);
    return(

            <Viex>
                <Text2 style={{ color : "#02AB72"}}>
                    Perfil de Usuário
                </Text2>
                <Ionicons 
        name="refresh-outline"
        size={30}
        style={{marginTop: 20, marginLeft: 20, position: 'absolute', zIndex: 1, right: '5%'}}
        color={"#02AB72"} 
        onPress={buscar}
        />
                <Sub>
                    <Ionicons name="person-outline" size={170} color={"#fff"} style={ { textAlign: 'center', margin :0 , marginTop: 25 }} />
                </Sub>

                <Viex2>
                <Nome3>
                    Suas informações:
                </Nome3>

                <Nome2>Nome:</Nome2>
                <TextInput
                value={Nome}
                onChangeText={setNome}
                placeholder="Nome"
                editable={false} 
                style={{borderBottomWidth: 1, borderBottomColor: '#fff', color: '#909090', fontSize: 20, margin: 10, width: 300, alignSelf: 'center'}}
                />
                <Nome2>Senha:</Nome2>
                <TextInput
                value={Senha}
                onChangeText={setSenha}
                placeholder="Nome"
                editable={false} 
                style={{borderBottomWidth: 1, borderBottomColor: '#fff', color: '#909090', fontSize: 20, margin: 10, width: 300, alignSelf: 'center'}}
                />
                <Nome2>CEP:</Nome2>
                 <TextInput
                value={Cep}
                onChangeText={setCep}
                placeholder="Nome"
                editable={false} 
                style={{borderBottomWidth: 1, borderBottomColor: '#fff', color: '#909090', fontSize: 20, margin: 10, width: 300, alignSelf: 'center'}}
                />
                </Viex2>
                <But
                onPress={() => setModalVisible(true)}
                >
                    <TextBut>
                        Opções	
                    </TextBut>


                </But>
                
                <Modal
                visible={ModalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
                animationType="slide"
                >
                    <ModalMy
                    handleClose={() => setModalVisible(false)}
                    handleDeslog={() => {Deslog()}}
                    handleEdit={() => {Edit()}}
                    />


                </Modal>


            </Viex>
    );

                
}