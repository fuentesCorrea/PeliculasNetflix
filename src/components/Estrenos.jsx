import React from 'react';
import Peliculas from './Peliculas';
// import axios from 'axios';
// import Peliculas from './Peliculas';
import {Link} from 'react-router-dom'




const Estrenos = () => {

  const [pelicula2, setPelicula2] = React.useState([]);
  const [peliEstreno, setPeliEstreno] = React.useState('');
  
  React.useEffect(()=>{
   
    obtenerDatos()
    
   

  },[])


  const obtenerDatos = async () => {

    try {
        const dbs = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f6e7c64969b292eb27b378045100a7cc');
         
         const pelis2 = await dbs.json()
         
        console.log(pelis2.results)
        
         setPelicula2(pelis2.results)
         getPeliculaEstreno(pelis2.results)
         
         
         
    } catch (error) {
      console.log(error)
      
    }
  }

  const getPeliculaEstreno = (pelicula2) => {
    const pe = pelicula2.length
     const posterIndice = pelicula2[Math.floor(Math.random()*pe)]
     console.log(posterIndice.title, 'indice')
     setPeliEstreno(posterIndice);

    /// setPeliEstreno(posterIndice)
     }


    return (

        <div>
          <Peliculas estrenos={peliEstreno}/>
        <div className= "cont">
           
            
            <ul className="uls">
              {
                pelicula2.map(item=>(
                  <Link to={`/detalles/${item.id}`}>
                <li
                
                 className="listas" 
                 key={item.id} 
                 style={{  backgroundImage:`url(https://image.tmdb.org/t/p/w154${item.poster_path})`}}
                 >
                  <span className="spn">{item.title}</span>
                 
                </li>
                 </Link>
                ))
              }
            </ul>

            
       
        

        </div>
        </div>
    )
}

export default Estrenos
