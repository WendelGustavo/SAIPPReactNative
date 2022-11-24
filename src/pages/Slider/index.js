import {react , useState} from "react";
import { View, Text, StyleSheet, Image, Dimensions, Animated } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import { Home} from "../Home";
import { Viex ,Text3,Text2} from "./styles";

const array = [
    {
        key: '1',
        title: "Bem vindo ao App",
        text: "O Aplicativo tem seu layout baseado no tema padrão do seu dispositivo, para que você possa ter uma melhor experiência",
        image: require("../../../assets/Tema.png")
    },
    {
        key: '2',
        title: "O SAIPP possui uma interface que ira te auxiliar", 
        text: "Possuimos um campo aonde voce pode consultar algumas informações sobre o seu plantio \n Como por exemplo o nivel de umidade ideal para diferentes tipos de plantas",
        image: require("../../../assets/Slider.png")
    },
    {
        key: '3',
        title: "Para te auxiliar ainda mais possuimos um campo de previsão do tempo",
        text: "Onde mesmo a distancia voce pode saber como esta o clima na região onde seu sistema esta instalado",
        image: require("../../../assets/Prev.png")
    },
    {
        key: '4',
        title: "Para um maior controle sobre seu sistema de irrigação",
        text: "Proporcionamos um campo onde voce pode controlar o nivel de umidade da sua plantação mesmo a distancia \n Por padrao o sistema inicia-se com o minimo de 0 % e o maximo de 100%.",
        image: require("../../../assets/Umidade.png")
    }
];

export default function Slider() {
    const navigation = useNavigation();
    const [showRealApp, setShowRealApp] = useState(false);

    function renderItem({ item }) {
        return (
            <Viex style={{flex: 1}}>
                <Image 
                source={item.image} 
                style={{ width: 400, height: 400, alignSelf: 'center', margin : 150}}/>
                <Text3 style={styles.title}>{item.title}</Text3>
                <Text2 style={styles.text}>{item.text}</Text2>
            </Viex>
        );
    }
    if(showRealApp){
        navigation.navigate('Tabs');
    }
    else{
        return <AppIntroSlider 
        renderItem={renderItem} 
        data={array} 
        activeDotStyle={{
            backgroundColor: "#02AB72",
            width: 30
            }}
        onDone={() =>setShowRealApp(true)}
        renderNextButton={() => <Text style={{color: "#02AB72"}}>Próximo</Text>}
        renderPrevButton= {() => <Text style={{color: "#02AB72"}}>Anterior</Text>}
        renderDoneButton={() => <Text style={{color: "#02AB72", fontSize : 17}}>Pronto</Text>}

        />;
    }

}
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 20
    }
});
