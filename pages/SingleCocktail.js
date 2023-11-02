import React from 'react'
import Loading from '../components/Loading'
// import { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='



const SingleCocktail = () => {
  const searchValue=React.useReducer('');


  return (
    <section className='section search'>
      <form className='search-form'></form>
      <div className='form-control'>
        <label htmlFor='Name'>Search Your favourite cocktail</label>
        <input ref={searchValue}></input>
      </div>
    </section>
  )
}

export default SingleCocktail
