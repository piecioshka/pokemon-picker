#! /usr/bin/env node
'use strict';

var picker = require('./index');
var program = require('commander');
var pkg = require('./package.json');

function display(method) {
    return function (args) {
        var result = method(args);
        console.log(result);
    }
}

program
    .version(pkg.version)
    .description(pkg.description)
    .option('-a', 'Get whole list of Pokémons', display(picker.all))
    .option('-i [index]', 'Get Pokémon by index', display(picker.byIndex))
    .option('-n [name]', 'Get Pokémon by name', display(picker.byName))
    .option('-t [type]', 'Get Pokémons by type', display(picker.byType))
    .option('-r', 'Return random Pokémon', display(picker.randomize))
    .option('-s', 'Return number of database size', display(picker.size))
    .parse(process.argv);

// Default mode.
if (!process.argv.slice(2).length) {
    // program.help();
    // display(picker.randomize)();
    console.log(picker.randomize());
}
