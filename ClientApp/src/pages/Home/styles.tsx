import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top:5%;
    padding-right:5%;
    padding-left: 5%;
    padding-bottom: 5%;
    background-color:#FFF;
    height: 100%;
`;

export const ItemRow = styled.View`
    align-items: stretch;
    flex-direction: row; 
`;
export const Item = styled.TouchableOpacity`
    background: rgba(37, 152, 139, 0.21);
    border-radius: 8px;
    height: 104px;
    width: 104px;
    margin-left: 13px;
    margin-bottom: 15px;
`;

export const Title = styled.Text`   
    font-family: FredokaOne_400Regular;
    font-size: 25px;
    line-height: 30px;
    color: #16807E;
    padding-bottom: 10px;
    text-align: center;
`;

export const Image = styled.Image`
    width: 47px;
    height: 46px;
    margin-bottom: 5px;
    margin-top: 15px;
    margin-left: 25%;
`;

export const ChatImage = styled.Image`
`;


export const Chat = styled.TouchableOpacity`
    height: 151px;
    width: 133px;
    margin-left: 60%;
    margin-top: 30%;
`;

export const ChatText = styled.Text`
        font-family: Roboto_300Light;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        letter-spacing: -0.24px;
`;
export const Light = styled.Text`
    font-family: Roboto_300Light;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #16807E;
`;