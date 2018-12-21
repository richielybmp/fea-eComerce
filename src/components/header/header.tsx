import React, { Component } from 'react';
import { Menu, Label, Icon } from 'semantic-ui-react';

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
        const { activeItem } = this.state

        return (
            <Menu size={'massive'} className={'menu-principal'}>
                <Menu.Item header>eCommerce</Menu.Item>
                {/* <Menu.Item
                    name='aboutUs'
                    active={activeItem === 'aboutUs'}
                    onClick={e => this.handleItemClick('aboutUs')}
                />
                <Menu.Item
                    name='jobs'
                    active={activeItem === 'jobs'}
                    onClick={e => this.handleItemClick('jobs')}
                />
                <Menu.Item
                    name='locations'
                    active={activeItem === 'locations'}
                    onClick={e => this.handleItemClick('locations')}
                /> */}
                <div  style={{'position': 'absolute', 'right': '20px'}}>
                    <Icon.Group size='large'>
                        <Icon name='cart' circular />
                    </Icon.Group>
                </div>
            </Menu>
        )
    }
}
