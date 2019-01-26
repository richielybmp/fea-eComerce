import React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.min.css';
import { Icon } from 'semantic-ui-react'
import "./floatButton.scss"

export default function FloatButton() {

    const scrollToTop = () => {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': 0
        });
    }

    return (
        <Fab icon={<Icon name={'plus'} />} mainButtonStyles={{ backgroundColor: '#e74c3c' }}>
            <Action
                text="Topo"
                onClick={() => scrollToTop()}
                actionButtonStyles={{ backgroundColor: '#1e0039' }}
            >
                <Icon name='arrow up' />
            </Action>
        </Fab>
    )
}