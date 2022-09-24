async function collect_types() {
    const firstgen_types =  await fetch("https://pokeapi.co/api/v2/generation/1/");
    const all_types =  await firstgen_types.json();
    return all_types.types;
  }

const all_types_firstgen = collect_types()
console.log(all_types_firstgen)
