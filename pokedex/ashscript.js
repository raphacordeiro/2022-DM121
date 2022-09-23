async function fetchData(pokeNumber) {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokeNumber
    );
    const pokemon = await response.json();
    return pokemon;
  }
  
  async function createPokemon(pokeNumber) {
    const pokemon = await fetchData(pokeNumber);
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const down_text = document.createElement("down_text");
    const img = document.createElement("img");
    h2.textContent = `#${pokemon.order}`;
    down_text.textContent = `${pokemon.name}`;
    img.src = pokemon.sprites.front_default;
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(down_text);
    document.body.appendChild(div);
  }
  
  let first_gen = []
  for (let i = 1; i < 152; i++){
    first_gen[i] = i;
  }
  //const pokeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //pokeNumbers.forEach(createPokemon);
  //console.log(first_gen.length)
  first_gen.forEach(createPokemon);