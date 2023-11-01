import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <section className='section'>
      {/* <h2>home page</h2> */}
      <SearchForm/>
      <CocktailList/>
      
    </section>
  )
}

export default Home
