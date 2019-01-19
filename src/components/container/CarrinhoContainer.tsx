import React, { useContext } from 'react';
import { Grid, Button, Table, ButtonGroup, Icon, Item, Rating, Segment, Header } from 'semantic-ui-react';
import Currency from 'react-currency-formatter';
import { Link } from 'react-router-dom';
import { EcommerceType, EcommerceContext, Dispatch } from '../../AppStore';
import { ItemMenu } from '../../enum/ItemMenu';

const GrupoBotoes = () => {
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
                <Button as={Link} to={`${process.env.PUBLIC_URL}/checkout`} color="green">FINALIZAR COMPRA</Button>
            </Grid.Column>
        </Grid>
    );
}

const Carrinho = () => {
    const context = useContext(EcommerceContext);
    return (
        <div>
            <GrupoBotoes />
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
                    {context!.state.cart.itens().map((grupo, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>
                                    <Item.Group>
                                        <Item
                                            as={Link}
                                            to={`${process.env.PUBLIC_URL}/produto/${grupo.produto.id}`}
                                            onClick={() => context!.dispatch.clickMenuItem(grupo.produto.categoria as ItemMenu)}
                                        >
                                            <Item.Image size='tiny' src={grupo.produto.imagem[0]} />
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
                                        <Button icon="minus" onClick={e => context!.dispatch.updateCart(grupo.produto.id)} />
                                        <Button.Or text={grupo.quantidade} />
                                        <Button
                                            icon="plus"
                                            onClick={e => context!.dispatch.addToCart(grupo.produto.id)}
                                            disabled={grupo.quantidade >= grupo.produto.qtdEstoque ? true : false}>
                                        </Button> />
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
                            <Button basic color="red" animated='fade' onClick={() => context!.dispatch.emptyCart()}>
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
                            <Currency quantity={context!.state.cart.totalPreco} currency="BRL" />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            <GrupoBotoes />
        </div>
    )
}

const CarrinhoVazio = () => {
    return (
        <Segment raised placeholder color="violet">
            <Header textAlign="center" as='h2'>
                <Header.Content>Seu carrinho está vazio</Header.Content>
            </Header>
            <Segment.Inline>
                <Button basic color="violet" as={Link} to={`${process.env.PUBLIC_URL}/`} animated='fade'>
                    <Button.Content visible>Voltar à loja</Button.Content>
                    <Button.Content hidden>
                        <Icon name='cart plus' />
                    </Button.Content>
                </Button>
            </Segment.Inline>
        </Segment>
    );
}
const CarrinhoContainer = () => {
    return (
        <EcommerceContext.Consumer>
            {value => value && (
                value.state.cart.isEmpty() ? <CarrinhoVazio /> : <Carrinho />
            )}
        </EcommerceContext.Consumer>
    )
}

export default CarrinhoContainer;

