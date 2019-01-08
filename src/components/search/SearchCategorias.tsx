import React, { useState, useContext } from "react";
import { Search, Image, SearchResultProps } from "semantic-ui-react";
import _ from 'lodash';
import { Link } from 'react-router-dom'
import EcommerceContext from "../../AppContext";
import { DataSet } from "../../mock";
import AppStore from "../../AppStore";

const defaultRenderer = (props: SearchResultProps) =>
  <div key={props.chave}>
    <Link to={`/produto/${props.chave}`}>

      {props.imagem && <div className='image'> <Image src={props.imagem} /> </div>}
      <div className='content'>
        {props.preco && <div className='price'>{props.preco}</div>}
        {props.nome && <div className='title'>{props.nome}</div>}
        {props.descricao && <div className='description'>{props.descricao}</div>}
      </div>
    </Link>
  </div>

interface SearchCategoriasState {
  isLoading: boolean
  results: []
  value: string
  produtos: any
}

class SearchCategorias extends React.Component<{}, SearchCategoriasState> {
  componentWillMount() {
    this.setState({ isLoading: false, results: [], value: '', produtos : DataSet.groupByCategoria(this.context.state.produtos) })
  }

  clearState = () => {
    this.setState({ isLoading: false, results: [], value: '' })
  }

  handleSearchChange = (e: React.FormEvent<HTMLInputElement>, props: any) => {
    const value = props.value;
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (value.length < 1) return this.clearState()
      const re = new RegExp(_.escapeRegExp(value), 'i')
      const isMatch = (result: any) => re.test(result.nome)
      const filteredResults = _.reduce(
        this.state.produtos,
        (memo: any, data: any) => {
          const results = _.filter(data.produtos, isMatch)
          let name = data.nome;
          if (results.length) memo[name] = { name, results }
          return memo
        }, {})
      this.setState({
        isLoading: false, results: filteredResults,
      })
    }, 300)
  }

  handleResultSelect = () => { this.clearState(); };

  render() {
    const { isLoading, value, results } = this.state
    return (
      <Search
        aligned="right"
        category
        loading={isLoading}
        resultRenderer={defaultRenderer}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce((e, data) => this.handleSearchChange(e, data), 500, { leading: true })}
        results={results}
        value={value}
      />
    )
  }
}
SearchCategorias.contextType = EcommerceContext;
export default SearchCategorias;