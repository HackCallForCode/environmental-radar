import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top:5%;
    padding-right:5%;
    padding-left: 5%;
    padding-bottom: 5%;
    background-color:#FFF;
    height: 100%;
`;

export const Title = styled.Text`   
    font-family: FredokaOne_400Regular;
    font-size: 25px;
    line-height: 30px;
    color: #16807E;
    padding-bottom: 10px;
`;

export const Card = styled.View`
    background: #FCFCFC;
    border: 1px solid #DADADA;
    width: 100%;
    height: 60%;
    padding-left: 2%;
    padding-top: 2%;
    margin-top:2%;
    margin-bottom:2%;
`;

export const Text = styled.Text`
    font-family: Roboto_500Medium;
    font-size: 12px;
    line-height: 14px;
`;

export const TextLight = styled.Text`
    font-family: Roboto_300Light;
    font-size: 13px;
    line-height: 14px;
    padding-top: 6px;
    padding-bottom:6px;
    padding-left:3px;
`;

export const Row = styled.View`
    flex-direction: row;    
`;


export const ButtonClose = styled.TouchableOpacity`  
    background-color:#16807E;
    width: 100px;
    border-radius: 25px;
    margin-left: 65%;
    margin-top: 30%;
`;

export const ButtonCloseText = styled.Text`
    color: #FFF;
    font-family: Poppins_500Medium;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
`;