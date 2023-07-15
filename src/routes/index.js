import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bemvindo from '../pages/Bemvindo';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Start from '../pages/start';
import Home from '../pages/Home';
import Slider from '../pages/Slider';
import Umidade from '../pages/Umidade';
import Perfil from '../pages/Perfil';
import Previsão from '../pages/Previsão';
import Controle from '../pages/Controle';
import { Ionicons,   } from '@expo/vector-icons';
import Editar from '../pages/Editar';
import EditarU from '../pages/EditarU';

const  Stack = createNativeStackNavigator();
const  Tab = createBottomTabNavigator();

function Tabs(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:{
                position : 'absolute',
                backgroundColor: '#121212',
                borderTopWidth: 0,
                elevation: 0,
                borderRadius: 4,

            }
        }}
        >
            <Tab.Screen name="Home" 
            component={Home}
            options={{headerShown: false,
            tabBarIcon : ({color , size , focused}) => {
                if( focused ){
                    return <Ionicons name="home" size={size} color={"#02AB72"} />
            }      
            else{  

            return <Ionicons name="home-outline" size={size} color={"#02AB72"} />
            } 

            }}}
            />

            <Tab.Screen name="Umidade" 
            component={Umidade}
            options={{headerShown: false
            ,tabBarIcon : ({color , size , focused}) => {
                if( focused ){
                    return <Ionicons name="water" size={size} color={"#02AB72"} />
                    
            }      
            else{  

            return <Ionicons name="water-outline" size={size} color={"#02AB72"} />
            } 

            }}}
            />
            <Tab.Screen name="Previsão" 
            component={Previsão}
            options={{headerShown: false
                ,tabBarIcon : ({color , size , focused}) => {
                    if( focused ){
                        return <Ionicons name="cloud" size={size} color={"#02AB72"} />
                        
                }      
                else{  
    
                return <Ionicons name="cloud-outline" size={size} color={"#02AB72"} />
                } 
    
                }
            }}
            />

            <Tab.Screen name="Controle" 
            component={Controle}
            options={{headerShown: false,
                tabBarIcon : ({color , size , focused}) => {
                    if( focused ){
                        return <Ionicons name="bulb" size={size} color={"#02AB72"} /> 
                }      
                else{  

                return <Ionicons name="bulb-outline" size={size} color={"#02AB72"} />
                } 
            }
            }}
            />
                        <Tab.Screen name="Perfil" 
            component={Perfil}
            options={{headerShown: false,
                tabBarIcon : ({color , size , focused}) => {
                    if( focused ){
                        return <Ionicons name="person" size={size} color={"#02AB72"} /> 
                }      
                else{  
                return <Ionicons name="person-outline" size={size} color={"#02AB72"} />
                } 
            }
            }}
            />
        </Tab.Navigator>
    )
}

 export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Start" 
            component={Start}
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="EditarU"
            component={EditarU}
            options={{headerShown: false}}
            />

            <Stack.Screen 
            name="Previsão"
            component={Previsão}
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="Perfil"
            component={Perfil}
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="Umidade" 
            component={Umidade}
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="Bemvindo" 
            component={Bemvindo}
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="Login" 
            component={Login}
            options={{headerShown: false}}
            />
            
            <Stack.Screen 
            name="Cadastro"
            component={Cadastro}
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="Tabs" 
            component={Tabs}
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="Slider" 
            component={Slider}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Editar"
            component={Editar}
            options={{headerShown: false}}
            /> 
        </Stack.Navigator>
        
    );
    
    
}

      





