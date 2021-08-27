//ASYNC/AWAIT

const fetchPokemon = async e => {
  //   fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  //     .then(response => response.json())
  //     .then(result => {
  //       fetch(result.location_area_encounters)
  //         .then(response2 => response2.json())
  //         .then(result2 => {
  //           fetch(result2[0].location_area.url)
  //             .then(response3 => response3.json())
  //             .then(result3 => console.log(result3))
  //             .catch(err3 => console.log(err3));
  //         })
  //         .catch(err2 => console.log(err2));
  //     })
  //     .catch(err1 => console.log(err1));

  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const result = await response.json();
    const response2 = await fetch(result.location_area_encounters);
    const result2 = await response2.json();
    const response3 = await fetch(result2[0].location_area.url);
    const result3 = await response3.json();
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
};

fetchPokemon();
