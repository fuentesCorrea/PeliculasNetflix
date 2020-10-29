import React from 'react'


const Peliculas = ({estrenos}) => {

  
    return (

      <div 
      className="posterCentral"
      style={{  backgroundImage:`url(https://image.tmdb.org/t/p/w780${estrenos.backdrop_path} )`}}
      >
        {estrenos.title}
    
        </div>
    )
}

export default Peliculas
