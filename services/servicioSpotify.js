//async es para procesos asincronos, es decir que sigue ejecutandose
export async function pedirTokenEnSpotify (){
    //Receta para consumir APIs con JS == pasos para ir a un restaurante
    //1: ¿a donde voy? Ubicación es la URL del servidor + el endpoint.
    const URL="https://accounts.spotify.com/api/token"

    //(Aquí vamos a utilizar tres datos,`creamos variables y luego concatenamos en el body del segundo paso)
    let datoUno="grant_type=client_credentials"
    let datoDos="client_id=5938fd7d0e5f4d889ba4db749d5780ad"
    let datoTres="client_secret=63d8eca3cf88416ca881b4f92588b05b"

    //2. ¿Que voy ha hacer? Configuramos la peticion o request.
    const PETICION={
        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body:`${datoUno}&${datoDos}&${datoTres}`
    }
    //3. Aqui arrancamos el consumo del API (La promesa que permite que un cliente de JS pueda consumir un API, 
    //antes era AJAX, actualmente FETCH).
    let respuesta=await fetch(URL,PETICION)
    let respuestaToken=await respuesta.json()



    //4. Exporto la función principal. En la parte superior utilizo la palabra export antespuesta.
    //5. Creo una variable nueva.
    let token=respuestaToken.token_type+" "+respuestaToken.access_token
        return(token)
}