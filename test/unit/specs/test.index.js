import api from '../../../index.js';

const constant = (value) => () => value;

describe('Working properly', () => {
    describe('property all', () => {
        it('should by an array of creatures', () => {
            expect(api.all()).toEqual(expect.any(Array));
            expect(api.all().length).toEqual(api.size());
            expect(api.all()[5]).toEqual(api.at(6));
            expect(api.all()[5]).toEqual(api.byIndex(6));
        });
    });

    describe('method: byIndex/at', () => {
        it('is alias for byIndex method', () => {
            expect(api.at).toBe(api.byIndex);
        });

        it('should have error handling', () => {
            expect(api.at(0)).toEqual(undefined);
            expect(api.at(-1)).toEqual(undefined);
            expect(api.at(9182319824)).toEqual(undefined);
            expect(api.at(null)).toEqual(undefined);
            expect(api.at('a')).toEqual(undefined);
        });

        it('should returns right creature', () => {
            let pokemon = api.at(6);
            expect(pokemon.name).toEqual('Charizard');
            expect(pokemon.index).toEqual(6);
            pokemon = api.at(151);
            expect(pokemon.name).toEqual('Mew');
            expect(pokemon.index).toEqual(151);
            pokemon = api.at(333);
            expect(pokemon.name).toEqual('Swablu');
            expect(pokemon.index).toEqual(333);
        });
    });

    describe('method: byName', () => {
        it('should return undefined when cannot find', () => {
            expect(api.byName('xxx')).toEqual(undefined);
        });

        it('should get Pokémon by its name', () => {
            const pokemon = api.byName('Charizard');
            expect(pokemon).toBe(api.byIndex(6));
            expect(pokemon.index).toEqual(6);
        });
    });

    describe('method: byType', () => {
        it('should return empty list when any Pokémon have passed type', () => {
            expect(api.byType('asd')).toEqual([]);
        });

        it('should returns list of Pokémons with passed type', () => {
            const pokemons = api.byType('Fire');
            expect(pokemons).toContain(api.at(6));
            expect(pokemons[0].index).toEqual(4);
        });
    });

    describe('method: randomize', () => {
        it('should random between first and last', () => {
            Math.random = constant(0);

            const firstCreature = api.randomize();
            expect(firstCreature.name).toEqual('Bulbasaur');

            Math.random = constant(1);

            const lastCreature = api.randomize();
            expect(lastCreature.name).toEqual('Magearna');
        });
    });

    describe('method: size', () => {
        it('should return number of items', () => {
            expect(api.size()).toEqual(expect.any(Number));
            expect(api.size()).toEqual(756); // all known pokemons
        });
    });
});
