import React from 'react'
import { Breadcrumb } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

type Sessao = {
    categoria: string,
    nome: string
}

interface BreadCrumbsProps {
    sessao: Sessao
}

export default function BreadcrumbTrack(props: BreadCrumbsProps) {

    const { sessao } = props;

    return (
        <Breadcrumb icon='right angle'>
            <Breadcrumb.Section
                as={Link}
                to={`${process.env.PUBLIC_URL}/`}
            >Home</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/${sessao.categoria.toLowerCase()}`}
            >{sessao.categoria}</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>{sessao.nome}</Breadcrumb.Section>
        </Breadcrumb>
    )
}
