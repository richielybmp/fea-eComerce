import _ from 'lodash';
import { ProdutoType } from '../components/produto/produto';

export default class DataSet {

    static groupByCategoria(dataItens: ProdutoType[]) {
        return _.chain(dataItens)
            .groupBy('categoria')
            .map(function (value, key) {
                return {
                    nome: key,
                    produtos: value
                }
            })
            .value();
    }

    static getProdutosByCategoria(dataItens: ProdutoType[], categoria: string) {
        return dataItens.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
    }

    static getProdutoById(dataItens: ProdutoType[], id: number) {
        return dataItens.find(p => p.id == id);
    }

    static dataItens = [
        {
            chave: 1,
            id: 1,
            nome: "Multifuncional Epson Ecotank USB 2.0",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_colorida.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_colorida2.jpg`
            ],
            preco: 200.32,
            categoria: "Impressoras",
            qtdEstoque: 1,
            rating: 4,
            ehMaisPedido: false,
        },
        {
            chave: 2,
            id: 2,
            nome: "Mini Impressora Térmica Bluetooth Android Portátil 58mm",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/impressoras/mini_impressora_bluetooth.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/mini_impressora_bluetooth2.jpg`
            ],
            preco: 231.69,
            categoria: "Impressoras",
            qtdEstoque: 1,
            rating: 4,
            ehMaisPedido: false,
        },
        {
            chave: 3,
            id: 3,
            nome: "Multifuncional HP Deskjet",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp_deskjet.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp_deskjet2.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp_deskjet3.jpg`,
            ],
            preco: 349.90,
            qtdEstoque: 5,
            categoria: "Impressoras",
            rating: 2,
            ehMaisPedido: false,
        },
        {
            chave: 4,
            id: 4,
            nome: "Multifuncional HP Advantage Wi-fi",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp_advantage.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp_advantage2.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp_advantage3.jpg`,
            ],
            preco: 326.30,
            categoria: "Impressoras",
            qtdEstoque: 1,
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 5,
            id: 5,
            nome: "Multifuncional Epson Wi-fi",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_epson_wi_fi.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_epson_wi_fi2.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_epson_wi_fi3.jpg`,
            ],
            preco: 929.00,
            categoria: "Impressoras",
            qtdEstoque: 1,
            rating: 4,
            ehMaisPedido: false,
        },
        {
            chave: 6,
            id: 6,
            nome: "Multifuncional Samsung Laser",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_samsumg_laser.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_samsumg_laser2.jpg`
            ],
            preco: 498.00,
            categoria: "Impressoras",
            qtdEstoque: 1,
            rating: 4,
            ehMaisPedido: false,
        },
        {
            chave: 7,
            id: 7,
            nome: "Multifuncional HP Sprocket 100",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp_sprocket_100.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp_sprocket_100_3.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp_sprocket_100_4.jpg`,
            ],
            preco: 359.00,
            categoria: "Impressoras",
            qtdEstoque: 1,
            rating: 1,
            ehMaisPedido: false,
        },
        {
            chave: 8,
            id: 8,
            nome: "Multifuncional HP",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp2.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp3.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_hp4.jpg`,
            ],
            preco: 435.99,
            categoria: "Impressoras",
            qtdEstoque: 1,
            rating: 5,
            ehMaisPedido: false,
        },
        {
            chave: 9,
            id: 9,
            nome: "Multifuncional Deskjet",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_deskjet.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_deskjet2.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_deskjet4.jpg`,
                `${process.env.PUBLIC_URL}/img/impressoras/multifuncional_deskjet5.jpg`,
            ],
            preco: 320.59,
            categoria: "Impressoras",
            qtdEstoque: 1,
            rating: 3.5,
            ehMaisPedido: false,
        },
        {
            chave: 101,
            id: 101,
            nome: "Fallout 76 - Xbox One",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/jogos/fallout76.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/fallout76_2.jpg`,
            ],
            preco: 249.44,
            categoria: "Jogos",
            qtdEstoque: 0,
            rating: 5,
            ehMaisPedido: false,
        },
        {
            chave: 102,
            id: 102,
            nome: "Fifa 19 para PS4 - EA",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/jogos/fifa_2.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/fifa.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/fifa_3.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/fifa_4.jpg`,
            ],
            preco: 189.99,
            qtdEstoque: 2,
            categoria: "Jogos",
            rating: 5,
            ehMaisPedido: false,
        },
        {
            chave: 103,
            id: 103,
            nome: "Call of Duty Black Ops 3",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/jogos/codbo3_2.png`,
                `${process.env.PUBLIC_URL}/img/jogos/codbo3_3.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/codbo3_4.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/codbo3_5.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/codbo3_6.jpg`,
            ],
            preco: 149.99,
            qtdEstoque: 2,
            categoria: "Jogos",
            rating: 3.8,
            ehMaisPedido: false,
        },
        {
            chave: 104,
            id: 104,
            nome: "Destiny 2 - Day One - PS4",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/jogos/destiny.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/destiny_2.jpg`,
            ],
            preco: 199.99,
            qtdEstoque: 2,
            categoria: "Jogos",
            rating: 2,
            ehMaisPedido: false,
        },
        {
            chave: 108,
            id: 108,
            nome: "Destiny 2 Limited Edition - PS4",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/jogos/destiny_limited_edition.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/destiny_limited_edition_2.jpg`,
            ],
            preco: 998.00,
            qtdEstoque: 2,
            categoria: "Jogos",
            rating: 5,
            ehMaisPedido: false,
        },
        {
            chave: 105,
            id: 105,
            nome: "Red Dead Redemption 2",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/jogos/reddeadredemption2.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/reddeadredemption2_2.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/reddeadredemption2_3.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/reddeadredemption2_4.jpg`,
            ],
            preco: 249.99,
            qtdEstoque: 2,
            categoria: "Jogos",
            rating: 5,
            ehMaisPedido: false,
        },
        {
            chave: 106,
            id: 106,
            nome: "God of War 3 - Remastered",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/jogos/gow3.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/gow3_2.jpg`
            ],
            preco: 49.99,
            qtdEstoque: 2,
            categoria: "Jogos",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 107,
            id: 107,
            nome: "Grand Theft Auto V",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/jogos/gtav.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/gtav_2.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/gtav_3.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/gtav_4.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/gtav_5.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/gtav_6.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/gtav_7.jpg`,
                `${process.env.PUBLIC_URL}/img/jogos/gtav_8.jpg`,
            ],
            preco: 99.99,
            qtdEstoque: 2,
            categoria: "Jogos",
            rating: 5,
            ehMaisPedido: false,
        },
        {
            chave: 201,
            id: 201,
            nome: "Celular Samsung Galaxy A8 Plus",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/celulares/a8_2.jpg`,
                `${process.env.PUBLIC_URL}/img/celulares/a8_3.jpg`,
            ],
            preco: 2199.00,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 202,
            id: 202,
            nome: "Smartphone Asus Zenfone 5 Preto 64GB, Tela 6.2",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/celulares/asuszenfone5.jpg`,
                `${process.env.PUBLIC_URL}/img/celulares/asuszenfone5_2.jpg`,
                `${process.env.PUBLIC_URL}/img/celulares/asuszenfone5_3.jpg`,
                `${process.env.PUBLIC_URL}/img/celulares/asuszenfone5_4.jpg`,
                `${process.env.PUBLIC_URL}/img/celulares/asuszenfone5_5.jpg`,
                `${process.env.PUBLIC_URL}/img/celulares/asuszenfone5_6.jpg`,
            ],
            preco: 1999.00,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 203,
            id: 203,
            nome: "iPhone XR 16gb",
            descricao: "descricao do produto",
            imagem: [
                `${process.env.PUBLIC_URL}/img/celulares/iphone7.jpg`,
                `${process.env.PUBLIC_URL}/img/celulares/iphone7_2.jpg`,
            ],
            preco: 3999.00,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 204,
            id: 204,
            nome: "iPhone X Max Gold 64gb",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/celulares/iphonesxmaxouro.jpg`],
            preco: 9999.00,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 205,
            id: 205,
            nome: "iPhone XR 32gb",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/celulares/iphonexr.jpg`],
            preco: 4999.00,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 206,
            id: 206,
            nome: "LG k9",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/celulares/lgk9.jpg`],
            preco: 569.00,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 207,
            id: 207,
            nome: "LG Q6",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/celulares/lgq6.jpg`],
            preco: 1999.00,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 208,
            id: 208,
            nome: "LG Q Note+",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/celulares/lgqnoteplus.jpg`],
            preco: 819.99,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 209,
            id: 209,
            nome: "Moto G6",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/celulares/motog6.jpg`],
            preco: 1613.99,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 210,
            id: 210,
            nome: "Galaxy Note 9",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/celulares/note9.jpg`],
            preco: 4588.99,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 211,
            id: 211,
            nome: "Galaxy S9",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/celulares/s9.jpg`],
            preco: 3199.00,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 212,
            id: 212,
            nome: "Galaxy S9+",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/celulares/s9plus.jpg`],
            preco: 3499.00,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 213,
            id: 213,
            nome: "Sony Xperia M5",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/celulares/xperiam5.jpg`],
            preco: 1648.00,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 214,
            id: 214,
            nome: "Sony Xperia Z5",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/celulares/xperiaz5.jpg`],
            preco: 1499.90,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 215,
            id: 215,
            nome: "Asus Zenfone Max M1",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/celulares/zenfonemaxm1.jpg`],
            preco: 1087.00,
            qtdEstoque: 2,
            categoria: "Smartphones",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 301,
            id: 301,
            nome: "A Sutil Arte de Ligar o F*da-se",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/livros/arte_fodase.jpg`],
            preco: 23.90,
            qtdEstoque: 2,
            categoria: "Livros",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 302,
            id: 302,
            nome: "Dúvida Cruel",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/livros/duvidacruel.jpg`],
            preco: 39.90,
            qtdEstoque: 2,
            categoria: "Livros",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 303,
            id: 303,
            nome: "Me Poupe",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/livros/mepoupe.jpg`],
            preco: 19.99,
            qtdEstoque: 2,
            categoria: "Livros",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 304,
            id: 304,
            nome: "Espada de Vidro",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/livros/espadadevidro.jpg`],
            preco: 27.92,
            qtdEstoque: 2,
            categoria: "Livros",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 305,
            id: 305,
            nome: "Fire and Blood",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/livros/fireblood.jpg`],
            preco: 48.99,
            qtdEstoque: 2,
            categoria: "Livros",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 306,
            id: 306,
            nome: "Harry Potter e as Relíquias da Morte",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/livros/hp_reliquiasdamorte.jpg`],
            preco: 49.99,
            qtdEstoque: 2,
            categoria: "Livros",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 307,
            id: 307,
            nome: "H.P. Lovecraft",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/livros/hplovecraft.jpg`],
            preco: 49.90,
            qtdEstoque: 2,
            categoria: "Livros",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 308,
            id: 308,
            nome: "Investimentos Inteligentes",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/livros/investimentos_inteligentes.jpg`],
            preco: 39.90,
            qtdEstoque: 2,
            categoria: "Livros",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 309,
            id: 309,
            nome: "IT - A Coisa",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/livros/it.jpg`],
            preco: 68.75,
            qtdEstoque: 2,
            categoria: "Livros",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 310,
            id: 310,
            nome: "Maze Runner - Prova de Fogo",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/livros/mazerunner_provadefogo.jpg`],
            preco: 35.92,
            qtdEstoque: 2,
            categoria: "Livros",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 311,
            id: 311,
            nome: "Moby Dick",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/livros/moby_dick.jpg`],
            preco: 16.99,
            qtdEstoque: 2,
            categoria: "Livros",
            rating: 3,
            ehMaisPedido: false,
        },
        {
            chave: 312,
            id: 312,
            nome: "As Crônicas de Narnia",
            descricao: "descricao do produto",
            imagem: [`${process.env.PUBLIC_URL}/img/livros/narnia.jpg`],
            preco: 69.93,
            qtdEstoque: 2,
            categoria: "Livros",
            rating: 3,
            ehMaisPedido: false,
        },
    ]
    static getIDataSet() {
        return this.dataItens;
    }
}