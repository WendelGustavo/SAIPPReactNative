import styled from 'styled-components';

export const Titulo = styled.Text`
font-size: 25px;
margin-top: 14%;
margin-bottom: 8%;
padding-left: 5%;
font-weight: bold;
color :#02AB72;
`;
export const Area = styled.View`
background-color: ${props => props.theme.background};
`;
export const Titulo2 = styled.Text`
font-size: 18px;
margin-top: 20px;
padding-left: 4%;
font-weight: bold;
color: ${props => props.theme.color};
`;
export const Button = styled.TouchableOpacity`
background-color: ${props => props.theme.button};
width: 450px;
border-radius: 15px;
padding-vertical: 15px;
align-self: center;
margin-top: 20px;
allign-items: center;
justify-content: center;
`;
export const Textobotao2  = styled.Text`
color: ${props => props.theme.colorbutton};
font-size: 16px;	
font-weight: bold;
text-align: center;
justify-content: center;
`;
export const Textobotao  = styled.Text`
color: ${props => props.theme.carinhaa};
font-size: 16px;	
font-weight: bold;
text-align: center;
justify-content: center;
`
;
export const Buttoncad = styled.TouchableOpacity`
color: #121212;
margin-top: 20px;
align-self: center;
`;







