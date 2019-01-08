import _ from "lodash"
import { Type } from "class-transformer";
import "reflect-metadata"
import { Produto } from "./Produto";

class CartItem {
	@Type(() => Produto)
	private _produto: Produto;
	private _quantidade: number;

	constructor(produto: Produto, quantidade: number = 1) {
		this._produto = produto;
		this._quantidade = quantidade;
	}

	public getSubtotal(): number {
		return this.produto.preco * this.quantidade;
	}

	public get quantidade(): number {
		return this._quantidade;
	}

	public set quantidade(v: number) {
		this._quantidade = v;
	}

	public get produto(): Produto {
		return this._produto;
	}

	public set produto(v: Produto) {
		this._produto = v;
	}
}


export class Cart {
	@Type(() => CartItem)
	cartItems: CartItem[] = [];
	
	public itens(): CartItem[] {
		return this.cartItems;
	}

	public get totalItens(): number {
		return _.sumBy(this.cartItems, 'quantidade')
	}

	public get totalPreco(): number {
		return _.reduce(this.cartItems, (result, value) => {
			return result + (value.quantidade * value.produto.preco);
		}, 0);
	}

	public emptyCart(){
		this.cartItems = [];
	}

	public addProduct(produto: Produto, quantidade: number = 1): void {
		let position: number = this.getProductPosition(produto);
		if (position > -1) {
			this.cartItems[position].quantidade += quantidade;
		} else {
			this.cartItems[this.cartItems.length] = new CartItem(produto, quantidade);
		}
	}

	private getProductPosition(produto: Produto): number {
		let total: number = this.cartItems.length;
		for (let i: number = 0; i < total; i++) {
			if (this.cartItems[i].produto.id == produto.id) return i;
		}
		return -1;
	}

	private removeProductByPosition(position: number) {
		if (position > -1) {
			this.cartItems.splice(position, 1);
		}
	}

	public updateProduct(produto: Produto, quantidade: number = 1): void {
		let position: number = this.getProductPosition(produto);
		if (position > -1) {
			this.cartItems[position].quantidade += quantidade;
			if (this.cartItems[position].quantidade === 0) {
				this.removeProductByPosition(position)
			}
		}
	}

	public removeProduct(produto: Produto): void {
		let position: number = this.getProductPosition(produto);
		if (position > -1) {
			this.cartItems.splice(position, 1);
		}
	}

	public isEmpty(): boolean {
		return (this.cartItems.length == 0);
	}

}