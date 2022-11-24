import { react} from 'react';
import { View, StyleSheet } from 'react-native'; 
import { Containerft, Textobotao, Tela , Titulo, Sub , Button} from './styles';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


export default function Bemvindo(){  

    const navigation = useNavigation();
return(
    <Containerft>
        <View style={styles.containerlogo}>      
            <Animatable.Image
            animation="flipInY"
            source={require('../../../assets/saipp.png')}
            style={{width: '50%'}}
            resizeMode="contain"
            />
        </View> 
        <Tela  delay={4000}>
            <Titulo style={{color: "#02AB72"}}> Realize seu cadastro abaixo</Titulo>
            <Sub> O SAIPP fica feliz em receber você aqui !</Sub>
        <Button style={styles.botao} onPress={() => {navigation.navigate('Cadastro')}}>
            <Textobotao> Cadastrar ➜</Textobotao>
        </Button>
        <Button style={styles.botao} onPress={() => {navigation.navigate('Login')}}>
            <Textobotao> Login ➜</Textobotao>
        </Button>
        </Tela>
    </Containerft>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },containerlogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})