import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {SearchTerm,setSearchTerm}=useGlobalContext();
  const searchValue=React.useRef('');

  const searchCocktail=()=>{
    setSearchTerm(searchValue.current.value)
  }
  useEffect(()=>{
    searchValue.current.focus();

  },[])
  function handleSubmit(e){
    e.preventDefault();
  }
  
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='Name'>Search Your favourite cocktail</label>
        <input  ref={searchValue} type='text'id='name' onChange={searchCocktail}></input>
      </div>
      </form>
    </section>
  )
}

export default SearchForm
