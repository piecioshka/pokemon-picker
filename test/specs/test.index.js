'use strict';

var api = require('../../');

var constant = function (value) {
    return function () {
        return value;
    }
};

describe('Working properly', function () {
    describe('property all', function () {
        it('should by an array of creatures', function () {
            expect(api.all()).toEqual(jasmine.any(Array));
            expect(api.all().length).toEqual(api.size());
            expect(api.all()[5]).toEqual(api.at(6));
            expect(api.all()[5]).toEqual(api.byIndex(6));
        });
    });

    describe('method: byIndex/at', function () {
        it('is alias for byIndex method', function () {
            expect(api.at).toBe(api.byIndex);
        });

        it('should have error handling', function () {
            expect(api.at(0)).toEqual(undefined);
            expect(api.at(-1)).toEqual(undefined);
            expect(api.at(9182319824)).toEqual(undefined);
            expect(api.at(null)).toEqual(undefined);
            expect(api.at('a')).toEqual(undefined);
        });

        it('should returns right creature', function () {
            var pokemon = api.at(6);
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

    describe('method: byName', function () {
        it('should return undefined when cannot find', function () {
            expect(api.byName('xxx')).toEqual(undefined);
        });

        it('should get Pokémon by its name', function () {
            var pokemon = api.byName('Charizard');
            expect(pokemon).toBe(api.byIndex(6));
            expect(pokemon.index).toEqual(6);
        });
    });

    describe('method: byType', function () {
        it('should return empty list when any Pokémon have passed type', function () {
            expect(api.byType('asd')).toEqual([]);
        });

        it('should returns list of Pokémons with passed type', function () {
            var pokemons = api.byType('Fire');
            expect(pokemons).toContain(api.at(6));
            expect(pokemons[0].index).toEqual(4);
        });
    });

    describe('method: randomize', function () {
        it('should random between first and last', function () {
            Math.random = constant(0);

            var firstCreature = api.randomize();
            expect(firstCreature.name).toEqual('Bulbasaur');

            Math.random = constant(1);

            var lastCreature = api.randomize();
            expect(lastCreature.name).toEqual('Magearna');
        });
    });

    describe('method: size', function () {
        it('should return number of items', function () {
            expect(api.size()).toEqual(jasmine.any(Number));
            expect(api.size()).toEqual(756); // all known pokemons
        });
    })
});
