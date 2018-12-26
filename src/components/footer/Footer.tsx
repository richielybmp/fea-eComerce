import React, { Component } from 'react';
import { Header, Segment, Container, Grid, List, Item } from 'semantic-ui-react';
import '../../css/footer.css';

const Footer = () => {
    return (
        <footer>
            <Segment inverted vertical className={"footer"}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header inverted as='h4' content='About' />
                                <List link inverted>
                                    <List.Item as='a'>Sitemap</List.Item>
                                    <List.Item as='a'>Contact Us</List.Item>
                                    <List.Item as='a'>Religious Ceremonies</List.Item>
                                    <List.Item as='a'>Gazebo Plans</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header inverted as='h4' content='Services' />
                                <List link inverted>
                                    <List.Item as='a'>Banana Pre-Order</List.Item>
                                    <List.Item as='a'>DNA FAQ</List.Item>
                                    <List.Item as='a'>How To Access</List.Item>
                                    <List.Item as='a'>Favorite X-Men</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Header inverted as='h4' content='Dev Team'></Header>
                                <Item.Group relaxed className={'dev-team'}>
                                    <Item>
                                        <Item.Image circular size='mini' src='http://tiny.cc/wkrw1y' />
                                        <Item.Content verticalAlign='middle'>
                                            <a href="https://github.com/richielybmp" target="_blank">Richiely Paiva</a>
                                        </Item.Content>
                                    </Item>
                                    <Item>
                                        <Item.Image circular size='mini' src='http://tiny.cc/klrw1y' />
                                        <Item.Content verticalAlign='middle'>
                                            <a href="https://github.com/mstedler" target="_blank">Mateus Stedler</a>
                                        </Item.Content>
                                    </Item>
                                    <Item>
                                        <Item.Image circular size='mini' src='http://tiny.cc/bkrw1y' />
                                        <Item.Content verticalAlign='middle'>
                                            <a href="https://github.com/devfilsk" target="_blank">Filipe Maciel</a>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </footer >
    );
}

export default Footer;