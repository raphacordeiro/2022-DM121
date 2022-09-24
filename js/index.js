async function collect_types() {
  const firstgen_types = await fetch(
    "https://pokeapi.co/api/v2/generation/1/"
  );
  const pokemon = await firstgen_types.json();
  return firstgen_types;
}

const tipos = await collect_types();
console.log(tipos)

// first_gen.forEach(console.log());