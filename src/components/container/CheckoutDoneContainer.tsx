import React from 'react'
import { Message, Button, Icon, Segment, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function CheckoutDoneContainer() {
    return (
        <div>
            <Message positive>

                <Message.Header>
                    <Icon name='check circle outline' />
                    Pagamento efetuado com sucesso.
                </Message.Header>
                <p>
                    Os detalhes da sua compra estão abaixo.
                </p>
            </Message>

            <Button
                as={Link}
                to={`${process.env.PUBLIC_URL}/`}
                color="violet"
                basic>
                Continuar comprando
            </Button>
        </div>
    )
}
