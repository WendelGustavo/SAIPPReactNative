import { SafeAreaView , View , TouchableOpacity, Text , StyleSheet , TextInput , TouchableWithoutFeedback, Keyboard}  from 'react-native';
import React, { useState, useEffect } from 'react';
import { Textz ,TouchableOpaciti ,Viex,Textzz,Textzz2, Titulo, SubTitulo,Textz123} from "./styles"


export function ModalMy2({handleClose}) {
    const [Nome, setNome] = useState('');
    const [Rua, setRua] = useState('');
    const [finalidade, setFinalidade] = useState('');

    function api(){
        Keyboard.dismiss();
        fetch(`https://viacep.com.br/ws/RS/${Nome}/${Rua}/json/`).then((response) => response.json()).then((json) => {
            json.forEach(json => {
                setFinalidade(json.cep);
            });
        }
        )

    }
    return (

        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
            style={{ flex: 1, zIndex: 9}}
            onPress={handleClose}
            >
            </TouchableOpacity>
            <Viex style={styles.modal}>
                <Titulo> Pesquise seu CEP</Titulo>
                <SubTitulo>Caso não saiba o CEP da localidade onde está instalado seu sistema, digite abaixo o nome da cidade e da rua aonde o sistema está situado para pesquisar o CEP.</SubTitulo>
                <Textzz2> Cidade: </Textzz2>
                <TextInput
                placeholder="Digite o nome da cidade"
                style={{  width: '90%',alignSelf: 'center', height: 40, backgroundColor: '#fff', borderRadius: 10, padding: 10, marginBottom: 10}}
                value={Nome}
                onChangeText={text => {setNome(text)}}
                />
                <Textzz> Rua: </Textzz>
                <TextInput
                placeholder="Digite o nome da rua"
                style={{  width: '90%',alignSelf: 'center', height: 40, backgroundColor: '#fff', borderRadius: 10, padding: 10, marginBottom: 10}}
                value={Rua}
                onChangeText={text => {setRua(text)}}
                />
            <TouchableOpaciti
            style={styles.but}
            onPress={api}
            >
            <Textz style={styles.text}>Pesquisar</Textz>
            
            </TouchableOpaciti>
            <TouchableWithoutFeedback
            >
            <Textz123>
                {finalidade}
            </Textz123>
            </TouchableWithoutFeedback>
            </Viex>
        </SafeAreaView>


)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    modal: {
        height: 430,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    but: {
        zIndex : 99,
        borderRadius: 8,
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderColor: '#121212',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
    }, 
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84
    },
    text: {
        fontSize: 20,
        textBold: 'bold',
        textAlign: 'center'
    }
});

    