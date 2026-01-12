/**
 * @typedef {Object} Pokémon
 *
 * @property {number} index
 * @property {string} name
 * @property {Array<string>} types
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gen1 = JSON.parse(readFileSync(join(__dirname, './pokedex/generation-1.json'), 'utf-8'));
const gen2 = JSON.parse(readFileSync(join(__dirname, './pokedex/generation-2.json'), 'utf-8'));
const gen3 = JSON.parse(readFileSync(join(__dirname, './pokedex/generation-3.json'), 'utf-8'));
const gen4 = JSON.parse(readFileSync(join(__dirname, './pokedex/generation-4.json'), 'utf-8'));
const gen5 = JSON.parse(readFileSync(join(__dirname, './pokedex/generation-5.json'), 'utf-8'));
const gen6 = JSON.parse(readFileSync(join(__dirname, './pokedex/generation-6.json'), 'utf-8'));
const gen7 = JSON.parse(readFileSync(join(__dirname, './pokedex/generation-7.json'), 'utf-8'));

// List of 756 Pokémons.
const pokemons = [
    ...gen1, ...gen2, ...gen3,
    ...gen4, ...gen5, ...gen6,
    ...gen7
].map(setupIndex);

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
    return pokemons;
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
    return pokemons.filter((pokemon) => pokemon.types.includes(type));
}

/**
 * Get Pokémon by it's name.
 *
 * @param {string} name Pokémons name.
 * @returns {Pokémon|undefined} Return first Pokémon on the list (probably this list should be never bigger that 1.
 */
function byName(name) {
    return pokemons.find((pokemon) => pokemon.name === name);
}

/**
 * Returns random digit from section, between start and finish.
 *
 * @returns {Pokémon|undefined}
 */
function randomize() {
    let index = Math.random() * (size() - 1);

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

export default {
    all,
    at,
    byIndex: at,
    byName,
    byType,
    randomize,
    size
};
