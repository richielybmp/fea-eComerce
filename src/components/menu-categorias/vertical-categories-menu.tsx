import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

interface VerticalCategoriesMenuState {
    activeItem: string | undefined;
}

export default class VerticalCategoriesMenu extends Component<{}, VerticalCategoriesMenuState> {
constructor(props: {}) {
        super(props);
        this.state = {
            activeItem: undefined
        };
    }

    handleItemClick = (name: string) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>Products</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='enterprise'
                            active={activeItem === 'enterprise'}
                            onClick={e => this.handleItemClick('enterprise')}
                        />
                        <Menu.Item
                            name='consumer'
                            active={activeItem === 'consumer'}
                            onClick={e => this.handleItemClick('consumer')}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>CMS Solutions</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='rails'
                            active={activeItem === 'rails'}
                            onClick={e => this.handleItemClick('rails')}
                        />
                        <Menu.Item
                            name='python'
                            active={activeItem === 'python'}
                            onClick={e => this.handleItemClick('python')}
                        />
                        <Menu.Item
                            name='php'
                            active={activeItem === 'php'}
                            onClick={e => this.handleItemClick('php')}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Hosting</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='shared'
                            active={activeItem === 'shared'}
                            onClick={e => this.handleItemClick('shared')}
                        />
                        <Menu.Item
                            name='dedicated'
                            active={activeItem === 'dedicated'}
                            onClick={e => this.handleItemClick('dedicated')}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Support</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='email'
                            active={activeItem === 'email'}
                            onClick={e => this.handleItemClick('email')}
                        >
                        E-mail Support
                        </Menu.Item>

                        <Menu.Item
                            name='faq'
                            active={activeItem === 'faq'}
                            onClick={e => this.handleItemClick('faq')}
                        >
                        FAQs
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}