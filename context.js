import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktail] = useState([]);
  console.log(cocktails);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url} ${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { drinks } = data;

      if (drinks) {
        const newCoctail = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            Name: strDrink,
            Image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
          
        });
        setCocktail(newCoctail)
      }
      // setLoading(true)
      else {
        setCocktail([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, setSearchTerm, cocktails }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
