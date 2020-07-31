import React from 'react';

import { View } from 'react-native';
import { Container,Card, Title,Row,Text,TextLight,ButtonClose, ButtonCloseText } from './styles';

import MenuBar from '../../../components/layout/menu-bar';
import Header from '../../../components/layout/header';
import { useNavigation } from '@react-navigation/native';

export default function Details(){

    const navigation = useNavigation();
    const colorAnalise = '#F2994A';
    const colorSend = '#16807E';
    const status: string = 'Enviada';

    function handleNavigateToHistory(){
        navigation.navigate('History');
    }
    
    return(
        <View>
            <Header/>
            <Container>
                <Title>
                    Dados da sua denuncia
                </Title>
                <Card>
                    <Row>
                        <Text>Data:</Text>
                        <Text style={{marginLeft: '60%'}}>Status:</Text>
                    </Row>
                    <Row>
                        <TextLight>30/07/2020</TextLight>
                        <TextLight 
                            style={ status === 'Em Analise' ?
                                    {
                                        marginLeft: '55%',
                                        color: colorAnalise
                                    }
                                    : 
                                    {
                                        color: colorSend,
                                        marginLeft: '55%'
                                    }
                                }
                        >
                            {status}
                    </TextLight>
                </Row>
                <Text>Tipo de Denuncia:</Text>
                <TextLight>Queimada</TextLight>
                <Text>Endereço:</Text>
                <TextLight>Avenida Dom Fabricio, 249 - SP</TextLight>
                <Text>Envolvidos:</Text>
                <TextLight>Roberto Almeida</TextLight>
                <Text>Empresa:</Text>
                <TextLight>XXX XXXX</TextLight> 
                <Text>Descrição:</Text>
                <TextLight> Homens uniformizados da empresa UFI estavam ateando fogo em lixo acumulado próximo a floresta nacional. Como estamos em período de seca uma hora depois o fogo já tinha se alastrado pelas plantas rasteiras e estava chegando as árvores</TextLight>
                <ButtonClose onPress={handleNavigateToHistory}>
                    <ButtonCloseText>Fechar</ButtonCloseText>
                </ButtonClose>
                </Card>
            </Container>
            <MenuBar selected={'List'} />
         </View>
    );
}