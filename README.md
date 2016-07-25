```
              ______                                           _____      ______              
_________________  /_____________ ________________     ___________(_)________  /______________
___  __ \  __ \_  //_/  _ \_  __ `__ \  __ \_  __ \    ___  __ \_  /_  ___/_  //_/  _ \_  ___/
__  /_/ / /_/ /  ,<  /  __/  / / / / / /_/ /  / / /    __  /_/ /  / / /__ _  ,<  /  __/  /    
_  .___/\____//_/|_| \___//_/ /_/ /_/\____//_/ /_/     _  .___//_/  \___/ /_/|_| \___//_/     
/_/                                                    /_/                                    

```

----

I always have a problem for new project name.<br />
I had simple an idea. I will create pokemon random getter.<br />

**So I make this project to randomly select Pokémon.**

Current list contains only first generation.<br />
I use [bulbapedia.bulbagarden.net][0] to get index, name and types.<br />

## Install

```
npm install pokemon-picker
```

## Usage

```javascript
var picker = require('pokemon-picker');
```

### `picker.at(index: number): Pokémon`

Return "Pokémon" or `undefined` value.

Parameters:

 * `index` - number of create from the list.

### `picker.randomize(): Pokémon`

Return random "Pokémon" from whole list.

### `picker.size(): number`

Return number of Pokémon's, which are available in database.

## Examples

```javascript
var pokemon = require('pokemon-picker');

pokemon.at(0); // return { "name": "Bulbasaur", "types": ["Grass", "Poison"] }
pokemon.at(76); // return { "name": "Golem", "types": ["Rock", "Ground"] }
pokemon.at(151); // return { "name": "Mew", "types": ["Psychic"] }

pokemon.size() // 151 (first geneation is available)

pokemon.randomize() // returns { "name": "Electabuzz", "types": ["Electric"] }
pokemon.randomize() // returns { "name": "Alakazam", "types": ["Psychic"] }
pokemon.randomize() // returns { "name": "Ninetales", "types": ["Fire"] }
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2014

[0]: http://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number
