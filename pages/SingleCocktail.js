import React from 'react'
import Loading from '../components/Loading'
// import { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='



const SingleCocktail = () => {
  const {id}=useParams();
  // const[loading,useLoading]=React.useState(false);
  // const [cocktail,setCocktail]=React.useState(null);
  console.log("my id is "+id);

  React.useEffect(()=>{

  },[id])


  return (
    <div>
      <h2>hi</h2>
      
    </div>
  )
}

export default SingleCocktail
