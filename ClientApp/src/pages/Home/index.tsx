import React from 'react';

import { View } from 'react-native';
import { Container,Item,ItemRow, Title,Light, Image, Chat,ChatImage,ChatText } from './styles';

import MenuBar from '../../components/layout/menu-bar';
import Header from '../../components/layout/header';


//#region  Importação das imagens

const url = '../../assets/imgs/';
const queimadas = require(url + 'queimadas.png');
const esgoto = require(url+ 'esgoto.png');
const produtos = require(url+ 'produtos.png');
const descarte = require(url+ 'descarte.png');
const poluicao = require(url+ 'poluicao.png');
const fauna = require(url+ 'fauna.png');

const chat = require(url + 'chat.png');

//#endregion

export default function Home(){
    return(
        <View>
            <Header/>
            <Container>
                <Title>Denuncie</Title>
                <ItemRow>
                    <Item>
                        <Image source={queimadas}/>
                        <Light>Queimadas</Light>
                    </Item>
                    <Item>
                        <Image source={esgoto}/>
                        <Light>Esgoto</Light>
                    </Item>
                    <Item>
                        <Image source={produtos}/>
                        <Light>Produtos Químicos</Light>
                    </Item>
                </ItemRow>
                <ItemRow>
                    <Item>
                        <Image source={descarte}/>
                        <Light>Descarte ilegal de resíduos</Light>
                    </Item>
                    <Item>
                        <Image source={poluicao}/>
                        <Light>Poluição</Light>
                    </Item>
                    <Item>
                        <Image source={fauna}/>
                        <Light>Fauna</Light>
                    </Item>
                </ItemRow>

                <Chat>
                    <ChatImage source={chat}/>
                </Chat>
            </Container>
            <MenuBar selected={'Home'} />
         </View>
    );
}