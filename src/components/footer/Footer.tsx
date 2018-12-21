import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react'

export default class Footer extends Component{
    constructor(props: {}){
        super(props)
    }

    render(){
        return (
            <Segment className={'footer'}>
                <Header as='h4' textAlign='right'>
                    <div>Teste Right</div>
                </Header>
                <Header as='h4' textAlign='left'>
                    Float Left
                </Header>
                <Header as='p' textAlign='justified'>
                    <div>
                        Aqui é o rodapé, não sei bem o que vai rolar aqui
                    </div>
                </Header>
                <Header as='p' textAlign='center'>
                    INF - UFG © Front end Avançado
                </Header>
            </Segment>
        );
    }

}