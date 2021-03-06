import React from 'react';
import { Header, Segment, Container, Grid, List, Item, Icon } from 'semantic-ui-react';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <Segment inverted vertical className={"footer"}>
                <Container className={'footer-content'}>
                    <Grid divided inverted stackable>
                        <Grid.Row verticalAlign={'middle'} centered >
                            <Grid.Column width={6} textAlign={'center'} verticalAlign={'middle'}  computer={6} mobile={12} tablet={6}>
                                <Header inverted as='h4' content='Dev Team' textAlign={'center'}></Header>
                                <div className={'dev-team'}>
                                    <Item>
                                        <Item.Image circular size='mini' src='http://tiny.cc/wkrw1y' />
                                        <a href="https://github.com/richielybmp" target="_blank">Richiely Paiva</a>
                                    </Item>
                                    <Item>
                                        <Item.Image circular size='mini' src='http://tiny.cc/klrw1y' />
                                        <a href="https://github.com/mstedler" target="_blank">Mateus Stedler</a>
                                    </Item>
                                    <Item>
                                        <Item.Image circular size='mini' src='http://tiny.cc/bkrw1y' />
                                        <a href="https://github.com/devfilsk" target="_blank">Filipe Maciel</a>
                                    </Item>
                                </div>
                            </Grid.Column>

                            <Grid.Column className={'redes-sociais-container'} textAlign={'center'} computer={6} mobile={12} tablet={6}>
                                <Item.Group relaxed className={''}>
                                    <div className={'redes-sociais'}>
                                        <a href="https://twitter.com/">
                                            <Icon name={'facebook f'} size={'large'}/>
                                        </a>
                                        <a href="https://www.facebook.com/">
                                            <Icon name={'twitter'} size={'large'}/>
                                        </a>
                                        <a href="https://github.com/richielybmp/fea-eCommerce">
                                            <Icon name={'github'} size={'large'}/>
                                        </a>
                                    </div>
                                    <div >
                                        <p>© 2019 Ching-Ling - All Rights Reserved</p>
                                    </div>
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