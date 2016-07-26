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
    .option('-a [index]', 'Get Pokémon by index', display(picker.at))
    .option('-r', 'Return random Pokémon', display(picker.randomize))
    .option('-s', 'Return number of database size', display(picker.size))
    .parse(process.argv);

// Default mode.
if (!process.argv.slice(2).length) {
    // program.help();
    // display(picker.randomize)();
    console.log(picker.randomize());
}
