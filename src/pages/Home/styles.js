import styled from 'styled-components';

export const ViewHome = styled.View`
background-color: ${props => props.theme.background};
flex: 1;
`;
export const ViewBotao = styled.TouchableOpacity`
width: 230px;
height: 230px;
background-color: rgb(128, 128, 128);
margin : 0 auto;
margin-top: 150px;
border-radius: 200px;
`;
export const Text2 = styled.Text`
color : #02AB72;
font-size: 30px;
margin-left: 20px;
margin-top: 20px;
display: flex;
`;
export const ViewHome2 = styled.View`
background-color: ${props => props.theme.background};
`;
export const Text22 = styled.Text`
color : ${props => props.theme.color};
font-size: 30px;
margin-left: 20px;
margin-top: 60px;
text-align: center;
`;
export const Text23 = styled.Text`
color : #02AB72;
font-size: 40px;
margin : 0 auto;
fontWeight: bold;
textAlign: center;
margin-top: 95px;
`;