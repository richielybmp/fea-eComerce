import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppContext';
import { ActionType } from '../enums/EnumActionTypes';
import { Button, Image, Segment, Grid, Container, Header, Item, Icon, Input, Divider } from 'semantic-ui-react';
import { ProdutoType } from './produto';

const ProdutoDetalhes = ({ match }: any) => {

    const [quantidade, setQuantidade] = useState(1);

    const id = match.params.id;

    const contexto = useContext(AppContext);
    const { state, dispatch } = contexto;
    const { descricao, imagem, nome, preco, qtdEstoque }: ProdutoType = state.produtoEmDetalhe;

    const onAddToCartClicked = () => { dispatch({ type: ActionType.ADD_TO_CART, payload: { id: id, qtd: 1 } }) };

    const onRemoveFromCartClicked = () => { dispatch({ type: ActionType.REMOVE_FROM_CART, payload: { id: id, qtd: 1 } }) };

    return (
        <>
            <br/>
            <Segment placeholder>
                <Grid columns={2} relaxed='very'>
                    <Grid.Row >
                        <Grid.Column>
                            <Container>
                                <Image src={imagem} size='large' bordered />
                            </Container>
                        </Grid.Column>
                        <Grid.Column verticalAlign={'top'}>
                                <Segment size={'large'}  padded content>
                                    <Item.Header as={'h2'}>{nome}</Item.Header>
                                </Segment>
                                <br/>
                                <Segment size={'large'}  padded>
                                    <Grid columns={'2'}>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Item.Content>
                                                    <Item.Meta as={'h2'}>
                                                        R$ {preco}
                                                    </Item.Meta>

                                                    <Item.Meta>
                                                        10x de {(preco/10)} s/juros
                                                    </Item.Meta>
                                                </Item.Content>
                                            </Grid.Column>
                                            <Grid.Column verticalAlign={'middle'}>
                                                <Button positive size='huge' onClick={() => onAddToCartClicked()}>Adicionar</Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    <br/>
                                    <Item.Group divided className={'row-container'}>
                                        <Icon name={'credit card outline'}/>
                                        <Item.Content verticalAlign='middle'>
                                            R$ {preco-((preco*10)/100)} em 1x no cartão de crédito <span className='green-text'>(10% de desconto)</span>
                                        </Item.Content>
                                    </Item.Group>

                                {/* Apenas para teste aqui */}
                                <Button onClick={() => onRemoveFromCartClicked()}>Remover</Button>
                            </Segment>
                                <br/>
                                <Segment size={'large'}  padded content className={'row-container center-row'}>
                                    <Item as={'p'}>
                                        Calcular frete:
                                    </Item>
                                    <Input action='OK' placeholder='_____-___' />
                                </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid columns={1} relaxed='very'>
                    <Grid.Row >
                        <Grid.Column>
                            <Container>
                                <Segment size={'large'}  padded content>
                                    <Header as={'h3'}>{descricao}</Header>
                                </Segment>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    )
}

export default ProdutoDetalhes;