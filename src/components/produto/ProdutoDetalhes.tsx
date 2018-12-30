import React from 'react'
import { Button, Image, Segment, Grid, Container, Header, Item, Icon, Input, Rating, Modal, Table, Tab } from 'semantic-ui-react';
import { DataSet } from '../../mock';
import { Consumer } from '../../AppContext';
import './produto.sass'

const ProdutoDetalhes = ({ match }: any) => {
    const id = match.params.id;
    const produto = DataSet.getProdutoById(id);
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })
    if (produto) {
        const rowTableParcelas = () => {
            let rows = [];
            for(let i = 0; i<12; i++){
                rows.push(
                    <Item>
                        <Table striped size={"large"} className={'table-parcelamento'}>
                            <Table.Body>
                                <Table.Row key={i}>
                                    <Table.Cell>{i+1}x</Table.Cell>
                                    <Table.Cell>sem juros</Table.Cell>
                                    <Table.Cell textAlign={'right'}>
                                        total {formatter.format(produto.preco/(i+1))}
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Item>
                )
            }
            return rows;
        }

        const panes = [
            { menuItem: 'Cartão', render: () => <Tab.Pane>{rowTableParcelas()}</Tab.Pane> },
            { menuItem: 'Boleto', render: () =>
                    <Tab.Pane>
                        <Item.Header as={'h4'}>
                            {formatter.format(produto.preco - ((produto.preco * 7) / 100))} no boleto bancário
                            <span
                                className='green-text'> (7% de desconto)</span>
                        </Item.Header>
                        <br/>
                        <Item>O boleto será gerado após a finalização de sua compra. Imprima e pague no banco ou pague pela internet utilizando o código de barras do boleto.</Item>
                    </Tab.Pane> },
        ]

        const Parcelamento = () => <Tab panes={panes} />

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
                                                        <Item className="Meta row-container center-row">
                                                            <p>Avaliação:</p>
                                                            <Rating icon='star' defaultRating={produto.rating} maxRating={5} />
                                                        </Item>
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
                                                            onClick={() => value.dispatch.addToCart(produto.id)}>
                                                        <Icon name={'shop'}/>
                                                        Adicionar
                                                    </Button>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                        <br/>
                                        <Item.Group divided className={'row-container'}>
                                            <Icon name={'credit card outline'} size={'big'} color={'grey'}/>
                                            <Item.Content verticalAlign='middle'>
                                                {formatter.format(produto.preco - ((produto.preco * 10) / 100))} em 1x no cartão de crédito <span
                                                className='green-text'>(10% de desconto)</span>
                                            </Item.Content>
                                        </Item.Group>
                                        <Item.Group>
                                            <Item.Content>
                                                <Modal trigger={<a>Formas de parcelamento</a>} size={"tiny"} closeIcon>
                                                    <Header content='Formas de parcelamento' />
                                                    <Modal.Content>
                                                        {
                                                            Parcelamento()
                                                        }
                                                    </Modal.Content>

                                                </Modal>
                                            </Item.Content>
                                        </Item.Group>

                                        {/* Apenas para teste aqui */}
                                        {/*<Button onClick={() => value.dispatch.removeFromCart(produto.id)}>Remover</Button>*/}
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