    /* getting pokemon id selected*/
    const id_pokemon =  sessionStorage.getItem('event');


    async function fetchData(pokeNumber) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumber);
        const pokemon = await response.json();
        return pokemon;
      }


    async function create_card(){
       
        const iden = await fetchData(id_pokemon);
        console.log(iden.name);
        const img = document.createElement("img");
        img.src = iden.sprites.other["official-artwork"].front_default;
        document.body.appendChild(img);

    }

    create_card();
    

