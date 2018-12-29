import React, { useState, useContext } from "react";
import { Search, Image, SearchResultProps } from "semantic-ui-react";
import _ from 'lodash';
import { DataSet } from "../../mock";
import { AppContext } from '../../AppContext';
import { ActionType } from '../enums/EnumActionTypes';
import { Link } from 'react-router-dom'

const source = DataSet.groupByCategoria()

const defaultRenderer = (props: SearchResultProps) =>
  <Link to={`/produto/${props.id}`}>
    <div key={props.id}>
      {props.imagem && <div className='image'> <Image src={props.imagem} /> </div>}
      <div className='content'>
        {props.preco && <div className='price'>{props.preco}</div>}
        {props.nome && <div className='title'>{props.nome}</div>}
        {props.descricao && <div className='description'>{props.descricao}</div>}
      </div>
    </div>
  </Link>


const SearchCategorias = () => {
  const contexto = useContext(AppContext);
  const { dispatch } = contexto;

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");

  const clearState = () => {
    setLoading(false);
    setResults([]);
    setValue("");
  }

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLoading(true);
    setValue(e.currentTarget.value);

    setTimeout(() => {
      const re = new RegExp(_.escapeRegExp(value), 'i')
      const isMatch = (result: any) => re.test(result.nome)
      const filteredResults = _.reduce(
        source,
        (memo: any, data: any) => {
          const results = _.filter(data.produtos, isMatch)
          let name = data.nome;
          if (results.length) memo[name] = { name, results }
          return memo
        },
        {},
      )
      setLoading(false);
      setResults(filteredResults);
    }, 300)
  }

  const handleResultSelect = (event: React.SyntheticEvent, data: any) => { clearState(); dispatch({ type: ActionType.SET_ON_DETAIL, payload: { id: data.result.id } }) };

  return (
    <Search
      aligned="right"
      category
      loading={loading}
      resultRenderer={defaultRenderer}
      onResultSelect={handleResultSelect}
      onSearchChange={_.debounce(e => handleSearchChange(e), 500, { leading: true })}
      results={results}
      value={value}
    />
  );
}

export default SearchCategorias;