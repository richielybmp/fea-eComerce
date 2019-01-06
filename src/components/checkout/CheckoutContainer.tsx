import React from 'react'
import { Step, Icon, Segment, Button, Card, Header, Item, Table, Grid } from 'semantic-ui-react';
import Currency from 'react-currency-formatter';
import { Link } from 'react-router-dom';
import EcommerContext from '../../AppContext';

interface Dispatch {
    handleStep(step: EStep): void
    handleShipping(shipping: Shipping): void
    handlePayment(payment: Payment): void
}

interface CheckoutState {
    step: EStep
    shipping: Shipping
    payment: Payment
}

export interface CheckoutType {
    state: CheckoutState
    dispatch: Dispatch
}

const CheckoutContext = React.createContext<CheckoutType | null>(null);

enum EStep {
    Shipping,
    Payment,
    Confirm
}

enum Shipping {
    None,
    Economic,
    Express
}

enum Payment {
    None,
    Bitcoin,
    Cartao,
    PayPal,
    Boleto
}

function getShippingPrice(shipping: Shipping) {
    switch (shipping) {
        case Shipping.Economic:
            return 18.90
        case Shipping.Express:
            return 30.90
        default:
            return 0;
    }
}

function getDiscount(total : number, payment : Payment){
    
    if(payment === Payment.Boleto){
        return ((total * 10) / 100)
    } 

    return 0;
}

const StepHeader = () => (
    <CheckoutContext.Consumer>
        {
            value => value && (
                <Step.Group widths={3} attached='top'>
                    <Step completed={value.state.step > EStep.Shipping} active={value.state.step === EStep.Shipping} onClick={() => value.dispatch.handleStep(EStep.Shipping)} >
                        <Icon name='truck' />
                        <Step.Content>
                            <Step.Title>Entrega</Step.Title>
                            <Step.Description>Escolha a forma de entrega</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step disabled={value.state.step < EStep.Payment} completed={value.state.step > EStep.Payment} active={value.state.step === EStep.Payment} onClick={() => value.dispatch.handleStep(EStep.Payment)}>
                        <Icon name='credit card' />
                        <Step.Content>
                            <Step.Title>Pagamento</Step.Title>
                            <Step.Description>Escolha o meio de pagamento</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step disabled={value.state.step < EStep.Confirm} completed={value.state.step > EStep.Confirm} active={value.state.step === EStep.Confirm}>
                        <Icon name='info' />
                        <Step.Content>
                            <Step.Title>Finalizar compra</Step.Title>
                            <Step.Description>Verifique os detalhes da compra</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>
            )}
    </CheckoutContext.Consumer>
)

const ConfirmContainer = () => {
    return (
        <CheckoutContext.Consumer>
            {
                checkout => checkout && (
                    <EcommerContext.Consumer>
                        {value => value && (
                            <div>
                                <Table>
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
                                                            <Item>
                                                                <Item.Image size='tiny' src={grupo.produto.imagem} />
                                                                <Item.Content>
                                                                    <Item.Header>{grupo.produto.nome}</Item.Header>
                                                                    <Item.Meta>Cor/Tamanho/etc</Item.Meta>
                                                                    <Item.Description>
                                                                        {grupo.produto.descricao}
                                                                    </Item.Description>
                                                                </Item.Content>
                                                            </Item>
                                                        </Item.Group>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Currency quantity={grupo.produto.preco} currency="BRL" />
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {grupo.quantidade}
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
                                            <Table.HeaderCell />
                                            <Table.HeaderCell />
                                            <Table.HeaderCell>Subtotal :</Table.HeaderCell>
                                            <Table.HeaderCell>
                                                <Currency quantity={value.state.cart.totalPreco} currency="BRL" />
                                            </Table.HeaderCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.HeaderCell />
                                            <Table.HeaderCell />
                                            <Table.HeaderCell>Frete :</Table.HeaderCell>
                                            <Table.HeaderCell>
                                                <Currency quantity={getShippingPrice(checkout.state.shipping)} currency="BRL" />
                                            </Table.HeaderCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.HeaderCell />
                                            <Table.HeaderCell />
                                            <Table.HeaderCell>Pagamento :</Table.HeaderCell>
                                            <Table.HeaderCell>
                                                {Payment[checkout.state.payment]} (- <Currency quantity={getDiscount(value.state.cart.totalPreco, checkout.state.payment)} currency="BRL" />)
                                            </Table.HeaderCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.HeaderCell />
                                            <Table.HeaderCell />
                                            <Table.HeaderCell>Total :</Table.HeaderCell>
                                            <Table.HeaderCell>
                                                <Currency quantity={getShippingPrice(checkout.state.shipping) + value.state.cart.totalPreco - getDiscount(value.state.cart.totalPreco, checkout.state.payment)} currency="BRL" />
                                            </Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Footer>
                                </Table>
                                <Grid style={{ height: "80px" }}>
                                    <Grid.Column floated='right'>
                                        <Button as={Link} to="/" color="green" onClick={() => value.dispatch.finish()}>FINALIZAR COMPRA</Button>
                                    </Grid.Column>
                                </Grid>
                            </div>
                        )}
                    </EcommerContext.Consumer>
                )}
        </CheckoutContext.Consumer>
    )
}
const ShippingContainer = () => {
    return (
        <CheckoutContext.Consumer>
            {
                value => value && (
                    <Card.Group centered className="checkout">
                        <Card raised onClick={() => value.dispatch.handleShipping(Shipping.Economic)}>
                            <Header as='h5' icon>
                                <Icon name='shipping' />
                                Econômico
                    <Header.Subheader>Média : 7 dias úteis após a postagem</Header.Subheader>
                            </Header>
                            <Card.Content extra textAlign="center">
                                <Currency quantity={getShippingPrice(Shipping.Economic)} currency="BRL" />
                            </Card.Content>
                        </Card>
                        <Card raised onClick={() => value.dispatch.handleShipping(Shipping.Express)}>
                            <Header as='h5' icon >
                                <Icon name='shipping fast' />
                                Expresso
                    <Header.Subheader>Média : 4 dias úteis após a postagem</Header.Subheader>
                            </Header>
                            <Card.Content extra textAlign="center">
                                <Currency quantity={getShippingPrice(Shipping.Express)} currency="BRL" />
                            </Card.Content>
                        </Card>
                    </Card.Group>
                )}
        </CheckoutContext.Consumer>
    )
}

const PaymentContainer = () => {
    return (
        <CheckoutContext.Consumer>
            {
                value => value && (
                    <Card.Group itemsPerRow={3} className="checkout">
                        <Card raised color="yellow" onClick={() => value.dispatch.handlePayment(Payment.Bitcoin)}>
                            <Header as='h4' icon>
                                <Icon name='bitcoin' color="yellow" />
                                Bitcoin
                            <Header.Subheader>Pague com bitcoin.</Header.Subheader>
                            </Header>
                        </Card>
                        <Card raised color="blue" onClick={() => value.dispatch.handlePayment(Payment.Cartao)}>
                            <Header as='h4' icon >
                                <Icon name='credit card' color="blue" />
                                Cartão de Crédito
                            <Header.Subheader>Pague com cartão de crédito.</Header.Subheader>
                            </Header>
                        </Card>
                        <Card raised color="grey" onClick={() => value.dispatch.handlePayment(Payment.PayPal)}>
                            <Header as='h4' icon>
                                <Icon name='paypal' color="grey" />
                                Paypal
                            <Header.Subheader>Pague com paypal.</Header.Subheader>
                            </Header>
                        </Card>
                        <Card raised color="black" onClick={() => value.dispatch.handlePayment(Payment.Boleto)}>
                            <Header as='h4' icon>
                                <Icon name='barcode' color="black" />
                                Boleto
                            <Header.Subheader>Pague com boleto. <span className='green-text'> (10% de desconto)</span></Header.Subheader>
                            </Header>
                        </Card>
                    </Card.Group>
                )
            }
        </CheckoutContext.Consumer>
    )
}

const Layout = (props: any) => {
    const step = props.step;
    let view;
    switch (step) {
        case EStep.Shipping:
            view = <ShippingContainer />
            break;
        case EStep.Payment:
            view = <PaymentContainer />
            break;
        case EStep.Confirm:
            view = <ConfirmContainer />
            break;
        default:
            view = <></>
    }
    return (
        <div>
            <StepHeader />
            <Segment attached>
                {view}
            </Segment>
        </div>
    );
}

class CheckoutContainer extends React.Component<{}, CheckoutState> {
    state: CheckoutState = {
        step: EStep.Shipping,
        shipping: Shipping.None,
        payment: Payment.None
    };

    dispatch: Dispatch = {
        handleStep: (step: EStep) => { this.setState({ step: step }) },
        handleShipping: (shipping: Shipping) => { this.setState({ shipping: shipping, step: EStep.Payment }) },
        handlePayment: (payment: Payment) => { this.setState({ payment: payment, step: EStep.Confirm }) },
    }

    render() {
        return (
            <CheckoutContext.Provider value={{ state: this.state, dispatch: this.dispatch }}>
                <Layout step={this.state.step} />
            </CheckoutContext.Provider>
        )
    }
}

export default CheckoutContainer;