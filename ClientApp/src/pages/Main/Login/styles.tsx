import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top:5%;
    padding-right:5%;
    padding-left: 5%;
    padding-bottom: 5%;
    background-color: #FFF;
`;

export const Image = styled.Image`
    width: 200px;
    height:180px;
    margin-left:18%;
    margin-top:10%;
    margin-bottom: 5%;
`;
export const Icon = styled.Image`
    width: 16px;
    height:16px;
    padding-right: 5px;
`;

export const Label = styled.Text`
    font-family: Poppins_300Light;
    font-size: 16px;
    line-height: 26px;  
    color: #1D293F;
    padding-left:5px;
    padding-bottom:10px;
`;

export const LogWith = styled.Text`
    font-family: Poppins_300Light;
    font-size: 16px;
    line-height: 26px;  
    color: #1D293F;
    padding-left:5px;
    padding-bottom:3%;
    padding-top:5%;
    text-align: center;
`;


export const Button = styled.TouchableOpacity`
    width:100%;
    height: 55px;
    background: #16807E;
    border-radius: 8px;
`;
export const ButtonText = styled.Text`
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    font-family: Poppins_500Medium;
    padding-top:16px;
`;

export const ButtonGoogle = styled.TouchableOpacity`
    width:100%;
    height: 55px;
    border-radius: 8px;
`;
export const ButtonTextGoogle = styled.Text`
    line-height: 26px;
    text-align: center;
    color: #1D293F;
    font-family: Poppins_500Medium;
    padding-top:16px;
`;

export const ButtonFacebook = styled.TouchableOpacity`
    width:100%;
    height: 55px;
    border-radius: 8px;
    background-color:#4167B2;
`;
export const ButtonTextFacebook = styled.Text`
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    font-family: Poppins_500Medium;
    padding-top:16px;
`;

export const ViewRegister = styled.TouchableOpacity`
    padding-top: 5%;
    margin-left: 16%;
`;

export const LinkRegister = styled.Text`
    color: #25988B;
    font-family: Poppins_300Light;
    font-size: 16px;
    line-height: 26px;
    position:absolute;
    padding-top:18px;
    padding-left:55px;
`;