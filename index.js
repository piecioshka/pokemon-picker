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

// List of 756 Pokémons.
var pokemons = []
    .concat(gen1).concat(gen2).concat(gen3)
    .concat(gen4).concat(gen5).concat(gen6)
    .concat(gen7).map(setupIndex);

/**
 * Add index field to returned Pokémon object.
 *
 * @param {Pokémon} pokemon
 * @param {number} index
 * @returns {Pokémon|undefined}
 */
function setupIndex(pokemon, index) {
    pokemon.index = index + 1;
    return pokemon;
}

/**
 * Return list of all Pokémons.
 *
 * @returns {Array<Pokémon>}
 */
function all() {
    return pokemons
}

/**
 * Returns Pokémon about passed index.
 * WARNING: indexation starts from "1", not from "0".
 * This is alias for byIndex.
 *
 * @param {number} index
 * @returns {Pokémon|undefined} Object with create details or undefined value.
 */
function at(index) {
    return pokemons[index - 1];
}

/**
 * Get list of Pokémons by type.
 * WARNING: you must put correct format of type.
 *
 * @param {string} type Pokémons type, ex. Fire, Water
 * @returns {Array<Pokémon>}
 */
function byType(type) {
    return pokemons.filter(function (pokemon) {
        return pokemon.types.indexOf(type) !== -1;
    });
}

/**
 * Get Pokémon by it's name.
 *
 * @param {string} name Pokémons name.
 * @returns {Pokémon|undefined} Return first Pokémon on the list (probably this list should be never bigger that 1.
 */
function byName(name) {
    return pokemons.filter(function (pokemon) {
        return pokemon.name === name;
    })[0];
}

/**
 * Returns random digit from section, between start and finish.
 *
 * @returns {Pokémon|undefined}
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
    all: all,
    at: at,
    byIndex: at,
    byName: byName,
    byType: byType,
    randomize: randomize,
    size: size
};
