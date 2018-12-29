import React from 'react';
import { Consumer } from '../../AppContext';
import { ProdutoType } from '../produto/produto';
import { Grid, List, Button, Image, Segment, ButtonGroup } from 'semantic-ui-react';
import _ from 'lodash';

const groupById = (carrinho: ProdutoType[]) => {
    return _.chain(carrinho)
        .groupBy('id')
        .map((value, key) => {
            return {
                id: key,
                count: _.size(value),
                total: _.reduce(value, (sum, value) => { return sum + value.preco }, 0),
                item: value[0]
            }
        })
        .value();
}

const CarrinhoContainer = () => {
    return <Consumer>
        {value => value && (
        <Grid columns={3} style={{ marginTop: "10px" }}>
            <Grid.Column width={2}>
            </Grid.Column>
            <Grid.Column width={9}>
                <Segment>
                    <List divided verticalAlign='middle'>
                        {value.state.cart.itens().map((grupo) => {
                            return <List.Item>
                                <List.Content floated='right'>
                                    <ButtonGroup color="violet">
                                        <Button icon="minus" onClick={e => value.dispatch.updateCart(grupo.produto.id)} />
                                        <Button.Or text={grupo.quantidade} />
                                        <Button icon="plus" onClick={e => value.dispatch.addToCart(grupo.produto.id)} />
                                    </ButtonGroup>
                                </List.Content>
                                <Image avatar src={grupo.produto.imagem} />
                                <List.Content>{grupo.produto.nome}</List.Content>
                            </List.Item>
                        })}
                    </List>
                </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
                <Segment>

                </Segment>
            </Grid.Column>
        </Grid>
        )}
    </Consumer>
}

export default CarrinhoContainer;