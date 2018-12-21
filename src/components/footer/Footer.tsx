import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react'

export default class Footer extends Component{
    constructor(props: {}){
        super(props)
    }

    render(){
        return (
            <Segment className={'footer'}>
                <Header as='h3' textAlign='right'>
                    <div></div>
                </Header>
                <Header as='h3' textAlign='left'>
                    Float Left
                </Header>
                <Header as='p' textAlign='justified'>
                    Aqui é o rodapé, não sem bem o que vai rolar aqui
                </Header>
                <Header as='p' textAlign='center'>
                    INF - UFG © Front end Avançado
                </Header>
            </Segment>
        );
    }

}