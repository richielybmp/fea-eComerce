import React from 'react'
import {
    Button,
    Image,
    Segment,
    Grid,
    Container,
    Header,
    Item,
    Icon,
    Input,
    Rating,
    Modal,
    Table,
    Tab,
    Pagination,
    Card
} from 'semantic-ui-react';
import { DataSet } from '../../mock';
import { Consumer } from '../../AppContext';
import './produto.sass'
import {Link} from "react-router-dom";

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
                        <Segment className='row-container main-produto-detalhe'>
                            <Container>
                                <Image src={produto.imagem} size='large' bordered className='image-product'/>
                            </Container>

                            <Container className='column-container product-details'>
                                <Segment size={'large'} padded>
                                    <Item.Header as={'h2'}>{produto.nome}</Item.Header>
                                </Segment>
                                <br/>

                                <Segment size={'large'} padded>
                                    <Item.Group divided className={'row-container'}>
                                        <Item.Content>
                                            <Item className="Meta row-container center-row">
                                                Avaliação:
                                                <Rating icon='star' defaultRating={produto.rating} maxRating={5} />
                                            </Item>
                                            <Item.Meta as={'h2'}>
                                                R$ {produto.preco}
                                            </Item.Meta>

                                            <Item.Meta>
                                                10x de {(produto.preco / 10).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} s/juros
                                            </Item.Meta>
                                        </Item.Content>
                                    </Item.Group>

                                    <Button positive size='huge'
                                            onClick={() => value.dispatch.addToCart(produto.id)}>
                                        <Icon name={'shop'}/>
                                        Adicionar
                                    </Button>

                                    <br/>
                                    <Item.Group divided className={'row-container center-center'}>
                                        <Icon name={'credit card outline'} size={'big'} color={'grey'}/>
                                        <Item.Content verticalAlign='middle'>
                                            {formatter.format(produto.preco - ((produto.preco * 10) / 100))} em 1x no cartão de crédito <span
                                            className='green-text'>(10% de desconto)</span>
                                        </Item.Content>
                                    </Item.Group>
                                    <Item.Group>
                                        <Item.Content>
                                            <Modal trigger={<a className='cursor-pointer'>Formas de parcelamento</a>} size={"tiny"} closeIcon>
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
                                <Segment size={'large'} padded className={'row-container center-center main-produto-detalhe'}>
                                    <p>
                                        Calcular frete:
                                    </p>
                                    <Input action={{ color: 'instagram', content: 'OK'}} placeholder='_____-___'/>
                                </Segment>
                            </Container>
                    </Segment>
                        <Segment>
                            <Container>
                                <Segment size={'large'} padded>
                                    <Header as={'h2'}>Descrição do Produto</Header>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat nunc porta, varius elit porttitor, aliquet odio. Duis ante est, lacinia sit amet dignissim at, accumsan at nisi. Suspendisse orci dui, pulvinar dignissim ex ut, sagittis ultricies quam. Donec tincidunt eu purus ut facilisis. Sed tellus enim, volutpat eget nisl sodales, viverra euismod tortor. Nam venenatis massa augue, eget varius risus pulvinar sit amet. In ornare augue ut ipsum facilisis ultrices.
                                    </p>
                                    <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>- Aenean et elit aliquet, vestibulum ex ut, cursus tellus.</p>
                                    <p>- Aliquam id augue ut massa consectetur consectetur viverra eu mauris.</p>
                                    <p>Etiam sodales augue a magna imperdiet lobortis.</p>
                                    <p>Fusce condimentum nunc at risus dictum elementum.</p>
                                    <p>Pellentesque non magna et lacus gravida consectetur.</p>
                                    <p>Quisque sit amet neque sed est dictum posuere.</p>
                                    <p>Cras id dui nec neque interdum pretium at ut elit.</p>
                                    <p>In at eros ultrices, elementum mi eu, venenatis nulla.</p>
                                    <p>Nam semper ligula in diam convallis, eget finibus enim aliquet.</p>
                                    <p>Etiam ac urna non lectus consequat faucibus ut ac risus.</p>
                                    <p>Quisque pretium diam eu pellentesque faucibus.</p>
                                    <p>Etiam ullamcorper metus a ultricies lobortis.</p>
                                    <p>Donec vulputate mauris non ante tristique condimentum.</p>
                                    <p>Aliquam nec magna vel lacus hendrerit facilisis.</p>

                                </Segment>
                            </Container>
                        </Segment>

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