    /* getting pokemon id selected*/
    const id_pokemon =  sessionStorage.getItem('event');
    var colors =  sessionStorage.getItem('type');


    async function fetchData(pokeNumber) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumber);
        const pokemon = await response.json();
        return pokemon;
      }


    async function create_card(){
       
        const iden = await fetchData(id_pokemon);
        console.log(iden.name);
        const main_div = document.createElement("div");
        const top_text = document.createElement("h2");
        const down_data = document.createElement("down_data");
        const img = document.createElement("img");
        const back_img = document.createElement("img")
        main_div.style.borderColor = colors;
        main_div.style.backgroundColor = colors;
        top_text.textContent = iden.name;
        img.src = iden.sprites.other["official-artwork"].front_default;
        img.width = 200;
        img.height = 200;
        back_img.src="back.png";
        back_img.style="float:left";
        back_img.className="back_img";
        down_data.style.backgroundColor = "white";

        main_div.appendChild(back_img);
        main_div.appendChild(top_text);
        main_div.appendChild(down_data);
        main_div.appendChild(img);
        document.body.appendChild(main_div);

    }

    create_card();
    

