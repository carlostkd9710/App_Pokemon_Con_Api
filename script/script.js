const api_url = 'https://pokeapi.co/api/v2/pokemon/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

const getPokemon = async (url) => {
    try {
        const res = await fetch(url)
    const data = await res.json()
    showPokemon(data);
    } catch (error) {
        swal.fire({
            title:'Upss!',
            text:'Error  en el server!',
            icon:'error'
        })
    }

}
for(let i=1;i<=10;i++){
    getPokemon(api_url + i);

}

const showPokemon = (data) => {
    const {
        id,
        name,
        sprites,
        base_experience,
        types
    } = data
    /* console.log("resultados"); */
    /* console.log(id, name, sprites, base_experience, types); */
    /* main.innerHTML = '' */

    const pokemonCard = document.createElement('div')
    pokemonCard.classList.add('movie')
    pokemonCard.innerHTML = `
        <img src="${sprites.front_default}" alt="imagen pokemon">
        <div class="movie-info">
        <h3>${name}</h3>
        <span class="green">${base_experience}</span>
    </div>
    <div class="overview">
        <h3>${types[0].type.name}</h3>
    </div>
    `
    main.appendChild(pokemonCard)
}