import React from 'react'
import { Button, Image, Segment, Grid, Container, Header, Item, Icon, Input  } from 'semantic-ui-react';
import { DataSet } from '../../mock';
import { Consumer } from '../../AppContext';

const ProdutoDetalhes = ({ match }: any) => {
    const id = match.params.id;
    const produto = DataSet.getProdutoById(id);

    if (produto) {
        return (
            <Consumer >
                {value => value && (
                    <Segment placeholder>

                        <Grid columns={2} relaxed='very'>
                            <Grid.Row>
                                <Grid.Column>
                                    <Container>
                                        <Image src={produto.imagem} size='large' bordered/>
                                    </Container>
                                </Grid.Column>
                                <Grid.Column verticalAlign={'top'}>
                                    <Segment size={'large'} padded content>
                                        <Item.Header as={'h2'}>{produto.nome}</Item.Header>
                                    </Segment>
                                    <br/>
                                    <Segment size={'large'} padded>
                                        <Grid columns={'2'}>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <Item.Content>
                                                        <Item.Meta as={'h2'}>
                                                            R$ {produto.preco}
                                                        </Item.Meta>

                                                        <Item.Meta>
                                                            10x de {(produto.preco / 10)} s/juros
                                                        </Item.Meta>
                                                    </Item.Content>
                                                </Grid.Column>
                                                <Grid.Column verticalAlign={'middle'}>
                                                    <Button positive size='huge'
                                                            onClick={() => value.dispatch.addToCart(produto.id)}>Adicionar</Button>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                        <br/>
                                        <Item.Group divided className={'row-container'}>
                                            <Icon name={'credit card outline'}/>
                                            <Item.Content verticalAlign='middle'>
                                                R$ {produto.preco - ((produto.preco * 10) / 100)} em 1x no cartão de crédito <span
                                                className='green-text'>(10% de desconto)</span>
                                            </Item.Content>
                                        </Item.Group>

                                        {/* Apenas para teste aqui */}
                                        <Button onClick={() => value.dispatch.removeFromCart(produto.id)}>Remover</Button>
                                    </Segment>
                                    <br/>
                                    <Segment size={'large'} padded content className={'row-container center-row'}>
                                        <Item as={'p'}>
                                            Calcular frete:
                                        </Item>
                                        <Input action='OK' placeholder='_____-___'/>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid columns={1} relaxed='very'>
                            <Grid.Row>
                                <Grid.Column>
                                    <Container>
                                        <Segment size={'large'} padded content>
                                            <Header as={'h3'}>{produto.descricao}</Header>
                                        </Segment>
                                    </Container>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                )}

            </Consumer>
        )
    } else {
        return (
            <>
                Produto não Encontrado
            </>
        )
    }
}
export default ProdutoDetalhes;