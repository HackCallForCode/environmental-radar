import React from 'react';

import { View } from 'react-native';
import { Container, Title } from './styles';

import MenuBar from '../../../components/layout/menu-bar';
import Header from '../../../components/layout/header';
import Report from '../../../components/layout/ListReport';


export default function History(){
    return(
        <View>
            <Header/>
            <Container>
                <Title>
                    Histórico Denuncias
                </Title>
                <Report data={'30/07/2020'} endereco={'AV. DOM PEDRO'} tipo_denuncia={'Queimada'} status={'Em Analise'}/>
                <Report data={'30/07/2020'} endereco={'AV. DOM PEDRO'} tipo_denuncia={'Queimada'} status={'Enviada'}/>
                <Report data={'30/07/2020'} endereco={'AV. DOM PEDRO'} tipo_denuncia={'Queimada'} status={'Em Analise'}/>
            </Container>
            <MenuBar selected={'List'} />
         </View>
    );
}