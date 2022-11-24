import React from 'react';
import { useColorScheme , StatusBar} from 'react-native'; 
import { ThemeProvider } from 'styled-components';
import  themes  from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.dark;
  return(

    <ThemeProvider theme={theme}>
    <NavigationContainer>
    <StatusBar backgroundColor={"#121212"} barStyle="light-content"/>
    <Routes/>
    </NavigationContainer>
    </ThemeProvider>

  );
}