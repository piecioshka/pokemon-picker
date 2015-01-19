(function (global) {
    'use strict';

    // Single row from `pokemonList`.
    var pokemon;

    // List of Pokémon. For now it is only with first generation.
    var pokemonList = [
        { index: '#001', name: 'Bulbasaur', types: ['Grass', 'Poison'] },
        { index: '#002', name: 'Ivysaur', types: ['Grass', 'Poison'] },
        { index: '#003', name: 'Venusaur', types: ['Grass', 'Poison'] },
        { index: '#004', name: 'Charmander', types: ['Fire'] },
        { index: '#005', name: 'Charmeleon', types: ['Fire'] },
        { index: '#006', name: 'Charizard', types: ['Fire', 'Flying'] },
        { index: '#007', name: 'Squirtle', types: ['Water'] },
        { index: '#008', name: 'Wartortle', types: ['Water'] },
        { index: '#009', name: 'Blastoise', types: ['Water'] },
        { index: '#010', name: 'Caterpie', types: ['Bug'] },
        { index: '#011', name: 'Metapod', types: ['Bug'] },
        { index: '#012', name: 'Butterfree', types: ['Bug', 'Flying'] },
        { index: '#013', name: 'Weedle', types: ['Bug', 'Poison'] },
        { index: '#014', name: 'Kakuna', types: ['Bug', 'Poison'] },
        { index: '#015', name: 'Beedrill', types: ['Bug', 'Poison'] },
        { index: '#016', name: 'Pidgey', types: ['Normal', 'Flying'] },
        { index: '#017', name: 'Pidgeotto', types: ['Normal', 'Flying'] },
        { index: '#018', name: 'Pidgeot', types: ['Normal', 'Flying'] },
        { index: '#019', name: 'Rattata', types: ['Normal'] },
        { index: '#020', name: 'Raticate', types: ['Normal'] },
        { index: '#021', name: 'Spearow', types: ['Normal', 'Flying'] },
        { index: '#022', name: 'Fearow', types: ['Normal', 'Flying'] },
        { index: '#023', name: 'Ekans', types: ['Poison'] },
        { index: '#024', name: 'Arbok', types: ['Poison'] },
        { index: '#025', name: 'Pikachu', types: ['Electric'] },
        { index: '#026', name: 'Raichu', types: ['Electric'] },
        { index: '#027', name: 'Sandshrew', types: ['Ground'] },
        { index: '#028', name: 'Sandslash', types: ['Ground'] },
        { index: '#029', name: 'Nidoran♀', types: ['Poison'] },
        { index: '#030', name: 'Nidorina', types: ['Poison'] },
        { index: '#031', name: 'Nidoqueen', types: ['Poison', 'Ground'] },
        { index: '#032', name: 'Nidoran♂', types: ['Poison'] },
        { index: '#033', name: 'Nidorino', types: ['Poison'] },
        { index: '#034', name: 'Nidoking', types: ['Poison', 'Ground'] },
        { index: '#035', name: 'Clefairy', types: ['Fairy'] },
        { index: '#036', name: 'Clefable', types: ['Fairy'] },
        { index: '#037', name: 'Vulpix', types: ['Fire'] },
        { index: '#038', name: 'Ninetales', types: ['Fire'] },
        { index: '#039', name: 'Jigglypuff', types: ['Normal', 'Fairy'] },
        { index: '#040', name: 'Wigglytuff', types: ['Normal', 'Fairy'] },
        { index: '#041', name: 'Zubat', types: ['Poison', 'Flying'] },
        { index: '#042', name: 'Golbat', types: ['Poison', 'Flying'] },
        { index: '#043', name: 'Oddish', types: ['Grass', 'Poison'] },
        { index: '#044', name: 'Gloom', types: ['Grass', 'Poison'] },
        { index: '#045', name: 'Vileplume', types: ['Grass', 'Poison'] },
        { index: '#046', name: 'Paras', types: ['Bug', 'Grass'] },
        { index: '#047', name: 'Parasect', types: ['Bug', 'Grass'] },
        { index: '#048', name: 'Venonat', types: ['Bug', 'Poison'] },
        { index: '#049', name: 'Venomoth', types: ['Bug', 'Poison'] },
        { index: '#050', name: 'Diglett', types: ['Ground'] },
        { index: '#051', name: 'Dugtrio', types: ['Ground'] },
        { index: '#052', name: 'Meowth', types: ['Normal'] },
        { index: '#053', name: 'Persian', types: ['Normal'] },
        { index: '#054', name: 'Psyduck', types: ['Water'] },
        { index: '#055', name: 'Golduck', types: ['Water'] },
        { index: '#056', name: 'Mankey', types: ['Fighting'] },
        { index: '#057', name: 'Primeape', types: ['Fighting'] },
        { index: '#058', name: 'Growlithe', types: ['Fire'] },
        { index: '#059', name: 'Arcanine', types: ['Fire'] },
        { index: '#060', name: 'Poliwag', types: ['Water'] },
        { index: '#061', name: 'Poliwhirl', types: ['Water'] },
        { index: '#062', name: 'Poliwrath', types: ['Water', 'Fighting'] },
        { index: '#063', name: 'Abra', types: ['Psychic'] },
        { index: '#064', name: 'Kadabra', types: ['Psychic'] },
        { index: '#065', name: 'Alakazam', types: ['Psychic'] },
        { index: '#066', name: 'Machop', types: ['Fighting'] },
        { index: '#067', name: 'Machoke', types: ['Fighting'] },
        { index: '#068', name: 'Machamp', types: ['Fighting'] },
        { index: '#069', name: 'Bellsprout', types: ['Grass', 'Poison'] },
        { index: '#070', name: 'Weepinbell', types: ['Grass', 'Poison'] },
        { index: '#071', name: 'Victreebel', types: ['Grass', 'Poison'] },
        { index: '#072', name: 'Tentacool', types: ['Water', 'Poison'] },
        { index: '#073', name: 'Tentacruel', types: ['Water', 'Poison'] },
        { index: '#074', name: 'Geodude', types: ['Rock', 'Ground'] },
        { index: '#075', name: 'Graveler', types: ['Rock', 'Ground'] },
        { index: '#076', name: 'Golem', types: ['Rock', 'Ground'] },
        { index: '#077', name: 'Ponyta', types: ['Fire'] },
        { index: '#078', name: 'Rapidash', types: ['Fire'] },
        { index: '#079', name: 'Slowpoke', types: ['Water', 'Psychic'] },
        { index: '#080', name: 'Slowbro', types: ['Water', 'Psychic'] },
        { index: '#081', name: 'Magnemite', types: ['Electric', 'Steel'] },
        { index: '#082', name: 'Magneton', types: ['Electric', 'Steel'] },
        { index: '#083', name: 'Farfetch\'d', types: ['Normal', 'Flying'] },
        { index: '#084', name: 'Doduo', types: ['Normal', 'Flying'] },
        { index: '#085', name: 'Dodrio', types: ['Normal', 'Flying'] },
        { index: '#086', name: 'Seel', types: ['Water'] },
        { index: '#087', name: 'Dewgong', types: ['Water', 'Ice'] },
        { index: '#088', name: 'Grimer', types: ['Poison'] },
        { index: '#089', name: 'Muk', types: ['Poison'] },
        { index: '#090', name: 'Shellder', types: ['Water'] },
        { index: '#091', name: 'Cloyster', types: ['Water', 'Ice'] },
        { index: '#092', name: 'Gastly', types: ['Ghost', 'Poison'] },
        { index: '#093', name: 'Haunter', types: ['Ghost', 'Poison'] },
        { index: '#094', name: 'Gengar', types: ['Ghost', 'Poison'] },
        { index: '#095', name: 'Onix', types: ['Rock', 'Ground'] },
        { index: '#096', name: 'Drowzee', types: ['Psychic'] },
        { index: '#097', name: 'Hypno', types: ['Psychic'] },
        { index: '#098', name: 'Krabby', types: ['Water'] },
        { index: '#099', name: 'Kingler', types: ['Water'] },
        { index: '#100', name: 'Voltorb', types: ['Electric'] },
        { index: '#101', name: 'Electrode', types: ['Electric'] },
        { index: '#102', name: 'Exeggcute', types: ['Grass', 'Psychic'] },
        { index: '#103', name: 'Exeggutor', types: ['Grass', 'Psychic'] },
        { index: '#104', name: 'Cubone', types: ['Ground'] },
        { index: '#105', name: 'Marowak', types: ['Ground'] },
        { index: '#106', name: 'Hitmonlee', types: ['Fighting'] },
        { index: '#107', name: 'Hitmonchan', types: ['Fighting'] },
        { index: '#108', name: 'Lickitung', types: ['Normal'] },
        { index: '#109', name: 'Koffing', types: ['Poison'] },
        { index: '#110', name: 'Weezing', types: ['Poison'] },
        { index: '#111', name: 'Rhyhorn', types: ['Ground', 'Rock'] },
        { index: '#112', name: 'Rhydon', types: ['Ground', 'Rock'] },
        { index: '#113', name: 'Chansey', types: ['Normal'] },
        { index: '#114', name: 'Tangela', types: ['Grass'] },
        { index: '#115', name: 'Kangaskhan', types: ['Normal'] },
        { index: '#116', name: 'Horsea', types: ['Water'] },
        { index: '#117', name: 'Seadra', types: ['Water'] },
        { index: '#118', name: 'Goldeen', types: ['Water'] },
        { index: '#119', name: 'Seaking', types: ['Water'] },
        { index: '#120', name: 'Staryu', types: ['Water'] },
        { index: '#121', name: 'Starmie', types: ['Water', 'Psychic'] },
        { index: '#122', name: 'Mr. Mime', types: ['Psychic', 'Fairy'] },
        { index: '#123', name: 'Scyther', types: ['Bug', 'Flying'] },
        { index: '#124', name: 'Jynx', types: ['Ice', 'Psychic'] },
        { index: '#125', name: 'Electabuzz', types: ['Electric'] },
        { index: '#126', name: 'Magmar', types: ['Fire'] },
        { index: '#127', name: 'Pinsir', types: ['Bug'] },
        { index: '#128', name: 'Tauros', types: ['Normal'] },
        { index: '#129', name: 'Magikarp', types: ['Water'] },
        { index: '#130', name: 'Gyarados', types: ['Water', 'Flying'] },
        { index: '#131', name: 'Lapras', types: ['Water', 'Ice'] },
        { index: '#132', name: 'Ditto', types: ['Normal'] },
        { index: '#133', name: 'Eevee', types: ['Normal'] },
        { index: '#134', name: 'Vaporeon', types: ['Water'] },
        { index: '#135', name: 'Jolteon', types: ['Electric'] },
        { index: '#136', name: 'Flareon', types: ['Fire'] },
        { index: '#137', name: 'Porygon', types: ['Normal'] },
        { index: '#138', name: 'Omanyte', types: ['Rock', 'Water'] },
        { index: '#139', name: 'Omastar', types: ['Rock', 'Water'] },
        { index: '#140', name: 'Kabuto', types: ['Rock', 'Water'] },
        { index: '#141', name: 'Kabutops', types: ['Rock', 'Water'] },
        { index: '#142', name: 'Aerodactyl', types: ['Rock', 'Flying'] },
        { index: '#143', name: 'Snorlax', types: ['Normal'] },
        { index: '#144', name: 'Articuno', types: ['Ice', 'Flying'] },
        { index: '#145', name: 'Zapdos', types: ['Electric', 'Flying'] },
        { index: '#146', name: 'Moltres', types: ['Fire', 'Flying'] },
        { index: '#147', name: 'Dratini', types: ['Dragon'] },
        { index: '#148', name: 'Dragonair', types: ['Dragon'] },
        { index: '#149', name: 'Dragonite', types: ['Dragon', 'Flying'] },
        { index: '#150', name: 'Mewtwo', types: ['Psychic'] },
        { index: '#151', name: 'Mew', types: ['Psychic'] }
    ];

    // Returns random digit from section, between start and finish.
    function random(start, finish) {
        return parseInt((Math.random() * (finish - start) + start).toFixed(), 10);
    }

    // Returns new Pokémon form list. Check that list is empty.
    function getNext() {
        if (!pokemonList.length) {
            throw new Error('Sorry. No pokemon left.');
        }

        // Randomly select a pokemon index.
        var pokemonIndex = random(0, pokemonList.length - 1);

        // Get selected pokemon.
        var chosenPokemon = pokemonList[pokemonIndex];

        // Delete it from the list.
        pokemonList.splice(pokemonIndex, 1);

        return chosenPokemon;
    }

    // Returns how much Pokémon-s left.
    function getSize() {
        return pokemonList.length;
    }

    // Returns selected Pokémon.
    function getPokemon() {
        return pokemon;
    }

    // Choose new Pokémon from list.
    pokemon = getNext();

    // Print it.
    console.log(pokemon.index + ': ' + pokemon.name + ' (' + pokemon.types.join(', ') + ')');

    // Create singleton module with some methods.
    var PokemonPicker = {
        getNext: getNext,
        getSize: getSize,
        getPokemon: getPokemon
    };

    // Exports `PokemonPicker`.
    return (global.PokemonPicker = PokemonPicker);
}(this));
