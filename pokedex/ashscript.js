  /* Collecting all pokemons */
  async function fetchData(pokeNumber) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumber);
    const pokemon = await response.json();
    return pokemon;
  }
  /* Collecting all pokemon types*/
  async function collect_types() {
    const firstgen_types =  await fetch("https://pokeapi.co/api/v2/generation/1/");
    const pokemon_types =  await firstgen_types.json();
    const all_types = await pokemon_types.types;
    return await all_types;
  }

  /*Page building */
  async function createPokemon(pokeNumber) {
    /** Collection one pokemon*/
    const pokemon = await fetchData(pokeNumber);

    /**Collecting pokemons types and getting all colors */
    const paleta = { 
    grass: "#74CB48", 
    electric: "#F9CF30",
    water: "#6493EB", 
    fire: "#F57D31",
    bug: "#A7B723",
    ground: "#DEC16B",
    normal: "#AAA67F",
    fighting: "#C12239",
    rock: "#B69E31",
    ghost: "#70559B",
    poison:"#A43E9E",
    psychic:"#FB5584",
    ice:"#9AD6DF",
    dragon: "#7037FF",
    fairy:"#E69EAC"
    }
  
    /**html elements */
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const down_text = document.createElement("down_text");
    const img = document.createElement("img");
    const tipo = document.createElement("tipo");

    h2.textContent = `#${pokemon.order}`;
    down_text.textContent = `${pokemon.name}`;
    const cor = `${pokemon.types[0].type.name}`;
    div.style.borderColor = `${paleta[cor]}`;
    h2.style.color = `${paleta[cor]}`;
    down_text.style.background = `${paleta[cor]}`;
    console.log(cor)
    console.log(paleta["Electric"])
    /*tipo.textContent=`Tipo: ${pokemon.types[0].type.name}`;*/
    img.src = pokemon.sprites.front_default;

    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(down_text);

    /*div.appendChild(tipo)*/
    document.body.appendChild(div);
  
  }
  
  /* Running all 151 pokemons of first generation */
  let first_gen = []
  for (let i = 1; i < 152; i++){
    first_gen[i] = i;
  }

  /*Calling function to create html page */
  first_gen.forEach(createPokemon);

 

