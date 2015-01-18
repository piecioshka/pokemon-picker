describe('library', function () {    
    it('should return valid pokemon', function () {
        expect(pokemonPicker.pokemon).toEqual(jasmine.any(Object));
        expect(pokemonPicker.pokemon.name).toEqual(jasmine.any(String));
    });

    it('should be able to return many pokemons', function () {
        var pokemon;
        var availableQuantity = pokemonPicker.getSize();
        for (var i=0; i < availableQuantity; i++) {
            pokemon = pokemonPicker.getNext();
        }
        var lastIndexPicked = pokemon.index.replace( /(^\D)(\d+)/i,'$2');
        expect(parseInt(lastIndexPicked, 10)).toBeGreaterThan(0);
    });

    it('should not generate more than available', function (){
        expect(pokemonPicker.getSize()).toBe(0);
        expect(pokemonPicker.getNext).toThrow();
    });
});
