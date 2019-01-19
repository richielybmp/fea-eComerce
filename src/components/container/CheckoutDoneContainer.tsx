import React, { useContext } from 'react'
import { Message, Button, Icon, Segment, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { EcommerceContext } from '../../AppStore';
import { ItemMenu } from '../../enum/ItemMenu';

export default function CheckoutDoneContainer() {

    const context = useContext(EcommerceContext);

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
                onClick={() => context!.dispatch.clickMenuItem(ItemMenu.HOME)}
                color="violet"
                basic>
                Continuar comprando
            </Button>
        </div>
    )
}
