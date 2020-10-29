import React from 'react'
import axios from 'axios'
import Peliculas from './Peliculas';

const Detalles = (props) => {

   const [detaye, setDetaye] = React.useState('')

    React.useEffect(()=>{
        const peliculaId = props.match.params.peliculaId;
        console.log(peliculaId)
        PeliculaDetalle(peliculaId)
    }, [])

    const PeliculaDetalle = async(peliculaId) =>{

        try {
            const data = await axios.get(`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=f6e7c64969b292eb27b378045100a7cc`)
                
            setDetaye(data.data)
        } catch (error) {
            
        }
    }

    return (
        <div>
            <Peliculas estrenos={detaye}/>
            
        </div>
    )
}

export default Detalles
