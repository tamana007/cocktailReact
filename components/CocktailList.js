import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading,cocktails}=useGlobalContext();
   
  if(loading){
    return <Loading/>
  }
  if(cocktails.length<1){
    return <h2>No Cocktails Matches your search</h2>
  }
  return (
    <section className='section'>
      <div className='section-title'>Coctail</div>
      <div className='cocktails-center'>
        {cocktails.map((item)=>{
          
          return <Cocktail key={item.id}{...item}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList
