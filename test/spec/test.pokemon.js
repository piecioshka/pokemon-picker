describe('Pokémon.js', function () {
    'use strict';
    
    it('should return valid pokemon', function () {
        expect(PokemonPicker.getPokemon()).toEqual(jasmine.any(Object));
        expect(PokemonPicker.getPokemon().name).toEqual(jasmine.any(String));
    });

    it('should be able to return many Pokémon-s', function () {
        var pokemon;
        var availableQuantity = PokemonPicker.getSize();
        for (var i=0; i < availableQuantity; i++) {
            pokemon = PokemonPicker.getNext();
        }
        var lastIndexPicked = pokemon.index.replace( /(^\D)(\d+)/i,'$2');
        expect(parseInt(lastIndexPicked, 10)).toBeGreaterThan(0);
    });

    it('should not generate more than available', function (){
        expect(PokemonPicker.getSize()).toBe(0);
        expect(PokemonPicker.getNext).toThrow();
    });
});
