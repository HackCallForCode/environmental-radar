import styled from 'styled-components/native';

export const Container = styled.View`
    background: #FCFCFC;
    border: 1px solid #DADADA;
    width: 100%;
    height: 130px;
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
    padding-top: 4px;
    padding-bottom:4px;
    padding-left:3px;
`;

export const Row = styled.View`
    flex-direction: row;    
`;

export const ButtonMore = styled.TouchableOpacity`
    padding-left: 60%;   
`;

export const ButtonMoreText = styled.Text`
    line-height: 26px;
    color: #16807E;
    font-family: Poppins_500Medium;
    padding-top:16px;
`;