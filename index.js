'use strict';

/**
 * @typedef {Object} Pokémon
 */

var gen1 = require('./pokedex/generation-1.json');

var pokemons = [].concat(gen1);

/**
 * Returns Pokémon about passed index.
 * WARNING: indexation starts from "1", not from "0".
 *
 * @param {number} index
 * @returns {Pokémon|undefined} Object with create details or undefined value.
 */
function at(index) {
    return pokemons[index - 1];
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

    return pokemons[index];
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
