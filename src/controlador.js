import { pedirTokenEnSpotify } from "../services/servicioSpotify.js";
import { buscarCanciones } from "../services/servicioConsultar.js";

pedirTokenEnSpotify()
.then(function(token){
    console.log(token)
    buscarCanciones(token)
    
    .then(function(respuesta){
        console.log(respuesta.tracks[2])
        console.log(respuesta.tracks[2].name)
        console.log(respuesta.tracks[2].preview_url)     
        console.log(respuesta.tracks[2].album.images[2].url)
    })
})
