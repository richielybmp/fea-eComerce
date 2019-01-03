import React from 'react';
import { Consumer } from '../../AppContext';
import { Grid, Button, Table, ButtonGroup, Icon, Item, Rating } from 'semantic-ui-react';
import _ from 'lodash';
import Currency from 'react-currency-formatter';
import { Link } from 'react-router-dom';

const GrupoBotoes = (props: any) => {
    return (
        <Grid columns={2} style={{ height: "80px" }}>
            <Grid.Column floated='left'>
                <Button
                    as={Link}
                    to={`${process.env.PUBLIC_URL}/`}
                    color="violet"
                    basic>CONTINUAR COMPRANDO</Button>
            </Grid.Column>
            <Grid.Column floated='right'>
                <Button color="green" onClick={props.finish}>FINALIZAR COMPRA</Button>
            </Grid.Column>
        </Grid>
    );
}
const CarrinhoContainer = () => {
    return <Consumer>
        {value => value && (
            <div className="carrinho-container">
                <GrupoBotoes finish={value.dispatch.finish} />
                <Table color="violet">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width={10}>PRODUTOS</Table.HeaderCell>
                            <Table.HeaderCell>PREÇO UNITÁRIO</Table.HeaderCell>
                            <Table.HeaderCell>QUANTIDADE</Table.HeaderCell>
                            <Table.HeaderCell>SUBTOTAL</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {value.state.cart.itens().map((grupo) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>
                                        <Item.Group>
                                            <Item as={Link} to={`/produto/${grupo.produto.id}`}>
                                                <Item.Image size='tiny' src={grupo.produto.imagem} />
                                                <Item.Content>
                                                    <Item.Header>{grupo.produto.nome}</Item.Header>
                                                    <Item.Meta>Cor/Tamanho/etc</Item.Meta>
                                                    <Item.Description>
                                                        {grupo.produto.descricao}
                                                    </Item.Description>
                                                    <Item.Extra><Rating disabled icon='star' defaultRating={grupo.produto.rating} maxRating={5} /></Item.Extra>
                                                </Item.Content>
                                            </Item>
                                        </Item.Group>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Currency quantity={grupo.produto.preco} currency="BRL" />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <ButtonGroup color="violet">
                                            <Button icon="minus" onClick={e => value.dispatch.updateCart(grupo.produto.id)} />
                                            <Button.Or text={grupo.quantidade} />
                                            <Button icon="plus" onClick={e => value.dispatch.addToCart(grupo.produto.id)} />
                                        </ButtonGroup>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Currency quantity={grupo.getSubtotal()} currency="BRL" />
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell>
                                <Button basic color="red" animated='fade' onClick={() => value.dispatch.emptyCart()}>
                                    <Button.Content visible>Limpar carrinho</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='trash' />
                                    </Button.Content>
                                </Button>
                            </Table.HeaderCell>
                            <Table.HeaderCell />
                            <Table.HeaderCell>
                                Subtotal :
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                <Currency quantity={value.state.cart.totalPreco} currency="BRL" />
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
                <GrupoBotoes finish={value.dispatch.finish} />
            </div>
        )}
    </Consumer>
}

export default CarrinhoContainer;