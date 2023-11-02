import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {SearchTerm,setSearchTerm}=useGlobalContext();
  const searchValue=React.useRef('');

  const searchCocktail=()=>{
    setSearchTerm(searchValue.current.value)
  }
  
  return (
    <section className='section search'>
      <form className='search-form'>
      <div className='form-control'>
        <label htmlFor='Name'>Search Your favourite cocktail</label>
        <input type='text' ref={searchValue} type='text'id='name' onChange={searchCocktail}></input>
      </div>
      </form>
    </section>
  )
}

export default SearchForm
