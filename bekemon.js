


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(Response => console.log(Response))
// .catch(error => console.log(error));

// ------------------------------------------------------------------------------

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(Response => Response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

// ------------------------------------------------------------------------------

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(Response => {
//     if(!Response.ok){
//         throw new Error("Could not fetch resource")
//     }
//     return Response.json
// })
// .then(data => console.log(data))
// .catch(error => console.log(error));

// ------------------------------------------------------------------------------
fetchData();
async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value;
        const Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!Response.ok){
            throw new Error("Could not fetch resource")
        }
        const data = await Response.json();
        const pokemonSprit = data.sprites.front_default;
        const imgElement= document.getElementById("pokemonSprite")
         console.log(pokemonSprit)
        imgElement.src=pokemonSprit;
        imgElement.style.display = "block"

    }
    catch(error){
        console.error(error);
    }
}


