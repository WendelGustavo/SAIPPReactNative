import { SafeAreaView , View , TouchableOpacity, Text , StyleSheet} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Textz ,TouchableOpaciti} from "./styles"


export  function ModalMy({handleClose ,handleDeslog, handleEdit}) {

    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
            style={{ flex: 1, zIndex: 9}}
            onPress={handleClose}
            >


            </TouchableOpacity>
            <View style={styles.modal}>
            <TouchableOpaciti
            style={styles.but}
            onPress={handleEdit}
            >
            <Textz style={styles.text}>Editar</Textz>
            
            </TouchableOpaciti>
            <TouchableOpacity
            style={styles.but2}
            onPress={handleDeslog}
            >
            <Text style={styles.cantext}>Deslogar</Text>
            
            </TouchableOpacity>

            </View>
        </SafeAreaView>


)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    modal: {
        marginVertical :20,
        marginLeft : 10 ,
        marginRight : 10 
    },
    but: {
        zIndex : 99,
        borderRadius: 8,
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
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
    but2: {
        zIndex : 99,
        borderRadius: 8,
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#121212',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
    }, 
    backgroundColor: 'red',  
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84
    },
    text: {
        fontSize: 20,
        textBold: 'bold',
        textAlign: 'center'
    },
    cantext: {
        fontSize: 20,
        textBold: 'bold',
        color: 'pink',  
        textAlign: 'center'
    }
});

    