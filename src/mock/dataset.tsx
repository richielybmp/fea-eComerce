import _ from 'lodash'
export default class DataSet {

    static groupByCategoria() {
        return _.chain(this.dataItens)
            .groupBy('categoria')
            .map(function (value, key) {
                return {
                    nome: key,
                    produtos: value
                }
            })
            .value();
    }

    static dataItens = [
        {
            chave: 1,
            id: 1,
            nome: "Multifuncional colorida",
            descricao: "descricao do produto",
            imagem: "https://c.mlcdn.com.br//multifuncional-epson-ecotank-l380-tanque-de-tinta-colorida-usb-2.0/v/210x210/217327200.jpg",
            preco: "200,32",
            categoria: "impressoras",
            qtdEstoque: 1,
        },
        {
            chave: 2,
            id: 2,
            nome: "Multifuncional colorida",
            descricao: "descricao do produto",
            imagem: "https://c.mlcdn.com.br//multifuncional-epson-ecotank-l380-tanque-de-tinta-colorida-usb-2.0/v/210x210/217327200.jpg",
            preco: "200,32",
            categoria: "impressoras",
            qtdEstoque: 1,
        },
        {
            chave: 3,
            id: 3,
            nome: "Multifuncional colorida",
            descricao: "descricao do produto",
            imagem: "https://c.mlcdn.com.br//multifuncional-epson-ecotank-l380-tanque-de-tinta-colorida-usb-2.0/v/210x210/217327200.jpg",
            preco: "200,32",
            qtdEstoque: 1,
            categoria: "impressoras",
        },
        {
            chave: 4,
            id: 4,
            nome: "Multifuncional colorida",
            descricao: "descricao do produto",
            imagem: "https://c.mlcdn.com.br//multifuncional-epson-ecotank-l380-tanque-de-tinta-colorida-usb-2.0/v/210x210/217327200.jpg",
            preco: "200,32",
            categoria: "impressoras",
            qtdEstoque: 1,
        },
        {
            chave: 101,
            id: 101,
            nome: "Fallout 76 - Xbox One",
            descricao: "descricao do produto",
            imagem: "https://i.mlcdn.com.br/fallout-76-para-xbox-one-bethesda/v/900x900/221914600.jpg",
            preco: "249,44",
            categoria: "jogos",
            qtdEstoque: 0,
        },
        {
            chave: 103,
            id: 103,
            nome: "Fallout 76 - Xbox One",
            descricao: "descricao do produto",
            imagem: "https://i.mlcdn.com.br/fallout-76-para-xbox-one-bethesda/v/900x900/221914600.jpg",
            preco: "249,99",
            qtdEstoque: 2,
            categoria: "jogos",
        },
        {
            chave: 104,
            id: 104,
            nome: "Fallout 76 - Xbox One",
            descricao: "descricao do produto",
            imagem: "https://i.mlcdn.com.br/fallout-76-para-xbox-one-bethesda/v/900x900/221914600.jpg",
            preco: "249,99",
            qtdEstoque: 2,
            categoria: "jogos",
        },
        {
            chave: 105,
            id: 105,
            nome: "Fallout 76 - Xbox One",
            descricao: "descricao do produto",
            imagem: "https://i.mlcdn.com.br/fallout-76-para-xbox-one-bethesda/v/900x900/221914600.jpg",
            preco: "249,99",
            qtdEstoque: 2,
            categoria: "jogos",
        },
        {
            chave: 106,
            id: 106,
            nome: "Fallout 76 - Xbox One",
            descricao: "descricao do produto",
            imagem: "https://i.mlcdn.com.br/fallout-76-para-xbox-one-bethesda/v/900x900/221914600.jpg",
            preco: "249,99",
            qtdEstoque: 2,
            categoria: "jogos",
        },
        {
            chave: 107,
            id: 107,
            nome: "Fallout 76 - Xbox One",
            descricao: "descricao do produto",
            imagem: "https://i.mlcdn.com.br/fallout-76-para-xbox-one-bethesda/v/900x900/221914600.jpg",
            preco: "249,99",
            qtdEstoque: 2,
            categoria: "jogos",
        },
    ]
    static getIDataSet() {
        return this.dataItens;
    }
}