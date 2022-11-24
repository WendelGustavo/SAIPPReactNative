import styled from 'styled-components';

export const Container = styled.View`
flex: 1;
background-color: ${props => props.theme.background};
align-items: center;
justify-content: center;
`;
export const Name = styled.Text`
font-size: 20px;
color: ${props => props.theme.color};
`;

export const Containerft = styled.View`
flex: 1;
background-color: ${props => props.theme.background};
`;

export const Tela = styled.View`
flex: 1;
background-color: #707070;
border-top-left-radius: 30px;
border-top-right-radius: 30px;
padding start: 8%;
padding end: 8%;
`;
export const Titulo = styled.Text`
font-size: 25px;
margin-top: 20px;
margin-bottom: 20px;
font-weight: bold;
color: ${props => props.theme.color};
`;
export const Sub = styled.Text`
color: ${props => props.theme.sub};
font-size: 17px;
margin-bottom: 60px;
`;
export const Button = styled.TouchableOpacity`
possition: absolute;
background-color: ${props => props.theme.button};
width: 80%;
border-radius: 50px;
padding-vertical: 15px;
align-self: center;
margin-top: 20px;
bottom: 10%;
allign-items: center;
justify-content: center;
value: 10px;
`;
export const Textobotao = styled.Text`
color: ${props => props.theme.colorbotom};
font-size: 16px;	
font-weight: bold;
text-align: center;
justify-content: center;
`
;

