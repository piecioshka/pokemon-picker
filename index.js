'use strict';

/**
 * @typedef {Object} Pokémon
 *
 * @property {number} index
 * @property {string} name
 * @property {Array<string>} types
 */

var gen1 = require('./pokedex/generation-1.json');
var gen2 = require('./pokedex/generation-2.json');
var gen3 = require('./pokedex/generation-3.json');
var gen4 = require('./pokedex/generation-4.json');
var gen5 = require('./pokedex/generation-5.json');
var gen6 = require('./pokedex/generation-6.json');
var gen7 = require('./pokedex/generation-7.json');

var pokemons = []
    .concat(gen1).concat(gen2).concat(gen3)
    .concat(gen4).concat(gen5).concat(gen6)
    .concat(gen7);

/**
 * Add index field to returned Pokémon object.
 *
 * @param {Pokémon} [pokemon]
 * @param {number} index
 * @returns {Pokémon|undefined}
 */
function addIndex(pokemon, index) {
    if (!pokemon) {
        return pokemon;
    }

    pokemon.index = index;

    return pokemon;
}

/**
 * Returns Pokémon about passed index.
 * WARNING: indexation starts from "1", not from "0".
 *
 * @param {number} index
 * @returns {Pokémon|undefined} Object with create details or undefined value.
 */
function at(index) {
    var pokemon = pokemons[index - 1];
    pokemon = addIndex(pokemon, index);
    return pokemon;
}

/**
 * Returns random digit from section, between start and finish.
 *
 * @returns {Pokémon}
 */
function randomize() {
    var index = Math.random() * (size() - 1);

    // Cast semi-random index from float to integer.
    index = parseInt(index, 10);

    var pokemon = pokemons[index];
    pokemon = addIndex(pokemon, index);
    return pokemon;
}

/**
 * Returns number of all available Pokémons.
 *
 * @returns {number}
 */
function size() {
    return pokemons.length;
}

// Public API

module.exports = {
    at: at,
    randomize: randomize,
    size: size
};
