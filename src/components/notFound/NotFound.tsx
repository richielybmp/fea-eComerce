import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './notFound.sass';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Desculpe!</h1>
            <h2>A página que você procura mudou de nome ou não existe mais.</h2>
            <Button
                as={Link}
                to={`${process.env.PUBLIC_URL}/`}
                color="violet"
                basic>Retornar para a home Page
            </Button>
            <img src={`${process.env.PUBLIC_URL}/img/notfound.gif`} />
        </div>
    )
}

export default NotFound;