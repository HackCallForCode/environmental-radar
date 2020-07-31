import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container,Image,Icon,Label,LogWith,Button,ButtonText,ButtonGoogle,ButtonTextGoogle, ButtonFacebook,ButtonTextFacebook,ViewRegister,LinkRegister } from './styles';

const logo = require('../../../assets/logo.png');
const google = require('../../../assets/icons/google_icon.png');
const facebook = require('../../../assets/icons/facebook_icon.png');

//importação de components
import Input from '../../../components/input/text';
import Password from '../../../components/input/password'


export default function Login(){

    const navigation = useNavigation();

    function handleNavigateToRegister(){
      navigation.navigate('Register');
    }

    function handleNavigateToHome(){
        navigation.navigate('Home');
    }
  

    return (
        <Container>
            <Image source={logo}/>
            <Input placeholder={'E-mail'}/>
            <Password placeholder={'Senha'}/>
            <Label>Esqueceu sua senha ?</Label>
            <Button onPress={handleNavigateToHome}>
                <ButtonText>Login</ButtonText>
            </Button>
            <LogWith>Entre com</LogWith>
            <ButtonGoogle>
                <ButtonTextGoogle>
                    <Icon source={google}/>  Continuar com Google
                </ButtonTextGoogle>
            </ButtonGoogle>
            <ButtonFacebook>
                <ButtonTextFacebook>
                    <Icon source={facebook}/>  Continuar com Facebook
                </ButtonTextFacebook>
            </ButtonFacebook>
            <ViewRegister onPress={handleNavigateToRegister}>
                <Label>Novo ? </Label>
                <LinkRegister> Crie uma conta agora</LinkRegister>
            </ViewRegister>
        </Container>

    );
}