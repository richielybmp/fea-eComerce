import _ from 'lodash';

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

    static getProdutosByCategoria(categoria: string) {
        return this.dataItens.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
    }

    static getProdutoById(id: number) {
        return this.dataItens.find(p => p.id == id);
    }

    static dataItens = [
        {
            chave: 1,
            id: 1,
            nome: "Multifuncional Epson Ecotank USB 2.0",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_colorida.jpg`,
            preco: 200.32,
            categoria: "Impressoras",
            qtdEstoque: 1,
        },
        {
            chave: 2,
            id: 2,
            nome: "Mini Impressora Térmica Bluetooth Android Portátil 58mm",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/impressoras/mini_impressora_bluetooth.jpg`,
            preco: 231.69,
            categoria: "Impressoras",
            qtdEstoque: 1,
        },
        {
            chave: 3,
            id: 3,
            nome: "Multifuncional HP Deskjet",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp_deskjet.jpg`,
            preco: 349.90,
            qtdEstoque: 1,
            categoria: "Impressoras",
        },
        {
            chave: 4,
            id: 4,
            nome: "Multifuncional HP Advantage Wi-fi",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp_advantage.jpg`,
            preco: 326.30,
            categoria: "Impressoras",
            qtdEstoque: 1,
        },
        {
            chave: 5,
            id: 5,
            nome: "Multifuncional Epson Wi-fi",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_epson_wi_fi.jpg`,
            preco: 929.00,
            categoria: "Impressoras",
            qtdEstoque: 1,
        },
        {
            chave: 6,
            id: 6,
            nome: "Multifuncional Samsung Laser",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_samsumg_laser.jpg`,
            preco: 498.00,
            categoria: "Impressoras",
            qtdEstoque: 1,
        },
        {
            chave: 7,
            id: 7,
            nome: "Multifuncional HP Sprocket 100",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp_sprocket_100.jpg`,
            preco: 359.00,
            categoria: "Impressoras",
            qtdEstoque: 1,
        },
        {
            chave: 8,
            id: 8,
            nome: "Multifuncional HP",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp.jpg`,
            preco: 435.99,
            categoria: "Impressoras",
            qtdEstoque: 1,
        },
        {
            chave: 9,
            id: 9,
            nome: "Multifuncional Deskjet",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_deskjet.jpg`,
            preco: 320.59,
            categoria: "Impressoras",
            qtdEstoque: 1,
        },
        {
            chave: 101,
            id: 101,
            nome: "Fallout 76 - Xbox One",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/jogos/fallout76.jpg`,
            preco: 249.44,
            categoria: "Jogos",
            qtdEstoque: 0,
        },
        {
            chave: 102,
            id: 102,
            nome: "Fifa 19",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/jogos/fifa.jpg`,
            preco: 189.99,
            qtdEstoque: 2,
            categoria: "Jogos",
        },
        {
            chave: 103,
            id: 103,
            nome: "Call of Duty Black Ops 3",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/jogos/codbo3.jpg`,
            preco: 149.99,
            qtdEstoque: 2,
            categoria: "Jogos",
        },
        {
            chave: 104,
            id: 104,
            nome: "Destiny 2",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/jogos/destiny.jpg`,
            preco: 199.99,
            qtdEstoque: 2,
            categoria: "Jogos",
        },
        {
            chave: 105,
            id: 105,
            nome: "Red Dead Redemption 2",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/jogos/reddeadredemption2.jpg`,
            preco: 249.99,
            qtdEstoque: 2,
            categoria: "Jogos",
        },
        {
            chave: 106,
            id: 106,
            nome: "God of War 3 - Remastered",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/jogos/gow3.jpg`,
            preco: 49.99,
            qtdEstoque: 2,
            categoria: "Jogos",
        },
        {
            chave: 107,
            id: 107,
            nome: "Grand Theft Auto V",
            descricao: "descricao do produto",
            imagem: `${process.env.PUBLIC_URL}/img/jogos/gtav.jpg`,
            preco: 99.99,
            qtdEstoque: 2,
            categoria: "Jogos",
        },
    ]
    static getIDataSet() {
        return this.dataItens;
    }
}