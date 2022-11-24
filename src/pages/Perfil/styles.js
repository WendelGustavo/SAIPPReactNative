import styled from "styled-components";

export const Viex = styled.View`
background-color: ${props => props.theme.background};
flex: 1;

`;
export const Sub = styled.View`
background-color: ${props => props.theme.sub};
width: 230px;
height: 230px;
align-items: center;
border-radius: 150px;
margin : 0 auto;
`;
export const Texto = styled.Text`
color: ${props => props.theme.color};
margin-top: 20px;
float : left;
font-size: 24px;
margin-bottom: 30px;
margin-left: 20px;
`;

export const Nome2 = styled.Text`
color: ${props => props.theme.color};
font-size: 20px;
margin-left : 44px;

`;
export const Senha2 = styled.Text`
color: ${props => props.theme.color};

font-size: 24px;
margin-bottom: 10px;
margin-left: 20px;
`;
export const Cep2 = styled.Text`
color: ${props => props.theme.color};
font-size: 24px;
margin-bottom: 20px;
margin-left: 20px;

`;
export const Viex2= styled.View`
background-color: ${props => props.theme.sub};
width: 80%;
height: 350px;
margin-top: 50px;

border-radius: 30px;

align-self: center;

`;

export const Nome3 = styled.Text`
color: ${props => props.theme.color};
font-size: 24px;
margin-bottom: 30px;
margin-left: 20px;
margin : 0 auto;
margin-top: 25px;
margin-bottom: 30px;
`;
export const But = styled.TouchableOpacity`
color: ${props => props.theme.color};
background-color: ${props => props.theme.sub};
font-size: 24px;
margin-top: 40px;
padding : 8px;
margin-vertical: 10px;
width: 80%;
justify-content: center;
align-self: center;
border-radius: 10px;
`;
export const TextBut = styled.Text`
color: ${props => props.theme.color};
font-size: 17px;
justify-content: center;
align-self: center;

`;
export const Text2 = styled.Text`
color : #02AB72;
font-size: 30px;
margin-left: 20px;
margin-top: 20px;
margin-bottom: 20px;
display: flex;
`;


