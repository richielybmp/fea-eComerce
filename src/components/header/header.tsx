import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

interface HeaderState {
    activeItem: string | undefined;
}

export default class Header extends Component<{}, HeaderState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            activeItem: undefined
        }
    }

    handleItemClick = (name: string) => this.setState({ activeItem: name })

    render() {
        //const { activeItem } = this.state

        return (
            <Menu inverted size={'massive'} className={'menu-principal'}>
                <Menu.Item header>eCommerce</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Icon.Group>
                            <Icon className="cart" name='cart' circular />
                        </Icon.Group>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

        )
    }
}
