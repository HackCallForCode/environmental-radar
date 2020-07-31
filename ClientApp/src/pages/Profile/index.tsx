import React from 'react';
import { Text } from 'react-native';

import { Container,Item } from './styles';

import { useNavigation } from '@react-navigation/native';

import MenuBar from '../../components/layout/menu-bar';
import Header from '../../components/layout/header';

import { Icon } from 'react-native-elements';

export default function User(){

    
    const navigation = useNavigation();


    function handleLogOut(){
        navigation.navigate('Login');
    }

    return (
        <>
            <Header/>
            <Container>
                <Item>
                    <Icon
                        name='user-o'
                        type='font-awesome'
                        color='#9097A5'
                    />
                    <Text style={{paddingLeft:5}}>Minha Conta</Text>
                </Item>
                <Item>
                    <Icon
                        name='bell'
                        type='font-awesome'
                        color='#9097A5'
                    />
                    <Text style={{paddingLeft:5}}>Notificações</Text>
                </Item>
                <Item>
                    <Icon
                        name='lock'
                        type='font-awesome'
                        color='#9097A5'
                    />
                    <Text style={{paddingLeft:5}}>Privacidade e Segurança</Text>
                </Item>
                <Item>
                    <Icon
                        name='life-ring'
                        type='font-awesome'
                        color='#9097A5'
                    />
                    <Text style={{paddingLeft:5}}>Preciso de ajuda</Text>
                </Item>
                <Item>
                    <Icon
                        name='info'
                        type='font-awesome'
                        color='#9097A5'
                    />
                    <Text style={{paddingLeft:5}}>Radar Ambiental</Text>
                </Item>
                <Item>
                    <Icon
                        name='user-o'
                        type='font-awesome'
                        color='#9097A5'
                    />
                    <Text style={{paddingLeft:5}}>Acessibilidade</Text>
                </Item>
                <Item>
                    <Icon
                        name='share-alt'
                        type='font-awesome'
                        color='#9097A5'
                    />
                    <Text style={{paddingLeft:5}}>Compartilhe</Text>
                </Item>
                <Item onPress={handleLogOut}>
                    <Icon
                        name='sign-out'
                        type='font-awesome'
                        color='#9097A5'
                    />
                    <Text style={{paddingLeft:5}}>Sair</Text>
                </Item>
            </Container>
            <MenuBar selected={'Account'}/>
        </>
    );
}