import React, { Component } from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.min.css';
import { Icon } from 'semantic-ui-react'
import "./floatButton.scss"

export default class FloatButton extends Component{

    render(){
        const backToTop = () => {
            window.scrollTo(0, 0)
        };
        return(

        <Fab icon={<Icon name={'plus'}/>} mainButtonStyles={{ backgroundColor: '#e74c3c' }}>
            {/*<Fab*/}
            {/*mainButtonStyles={{backgroundColor: '#e74c3c', position: 'fixed', bottom: 26, right: 26}}*/}
            {/*actionButtonStyles={{backgroundColor: '#1e0039', position: 'fixed', bottom: 26, right: 26}}*/}
            {/*position={{bottom: 26, right: 26, position: 'fixed'}}*/}
            {/*icon={<Icon disabled name='arrow up' />}*/}
            {/*event={'hover'}*/}
            {/*>*/}
                <Action
                    text="Topo"
                    onClick={backToTop}
                    actionButtonStyles={{backgroundColor: '#1e0039'}}
                >
                    <Icon name='arrow up' />
                </Action>
                <Action
                    text="Help"
                    onClick={() => console.log("clickado")}
                >
                    <i className="fa fa-help" />
                </Action>
            </Fab>
        )
    }
}