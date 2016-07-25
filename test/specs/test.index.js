'use strict';

var api = require('../../');

var constant = function (value) {
    return function () {
        return value;
    }
};

describe('Working properly', function () {
    describe('method: at', function () {
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
            pokemon = api.at(151);
            expect(pokemon.name).toEqual('Mew');
            pokemon = api.at(333);
            expect(pokemon.name).toEqual('Swablu');
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
