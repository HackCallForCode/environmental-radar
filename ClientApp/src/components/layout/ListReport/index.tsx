import React from 'react';

import { Container,Text,TextLight,Row, ButtonMore, ButtonMoreText} from './styles';
import { useNavigation } from '@react-navigation/native';

interface IProps {
    data : string,
    status : string,
    tipo_denuncia: string,
    endereco : string
}

export default function ListReport(props : IProps){

    const navigation = useNavigation();

    const { data, status, tipo_denuncia, endereco } = props;
    const colorAnalise = '#F2994A';
    const colorSend = '#16807E';

    
    function handleNavigateToDetails(){
        navigation.navigate('Details');
    }
    
    return(
        <Container>
            <Row>
                <Text>Data:</Text>
                <Text style={{marginLeft: '60%'}}>Status:</Text>
            </Row>
            <Row>
                <TextLight>{data}</TextLight>
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
            <TextLight>{tipo_denuncia}</TextLight>
            <Row>
                <Text>Endereço:</Text>
                <ButtonMore onPress={handleNavigateToDetails}>
                    <ButtonMoreText>Ver Mais</ButtonMoreText>
                </ButtonMore>
            </Row>
            <Row>
                <TextLight style={{marginTop:-30}}>{endereco}</TextLight>
            </Row>
        </Container>
    );
} 