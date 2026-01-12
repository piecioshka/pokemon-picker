#! /usr/bin/env node
'use strict';

var minimist = require('minimist');
var picker = require('../index');
var pkg = require('../package.json');

var argv = minimist(process.argv.slice(2), {
    boolean: ['a', 'r', 's', 'V', 'version', 'h', 'help'],
    string: ['i', 'n', 't'],
    alias: {
        V: 'version',
        h: 'help'
    }
});

function showHelp() {
    console.log('Usage: pokemon-picker [options]');
    console.log('');
    console.log(pkg.description);
    console.log('');
    console.log('Options:');
    console.log('  -V, --version  output the version number');
    console.log('  -a             Get whole list of Pokémons');
    console.log('  -i [index]     Get Pokémon by index');
    console.log('  -n [name]      Get Pokémon by name');
    console.log('  -t [type]      Get Pokémons by type');
    console.log('  -r             Return random Pokémon');
    console.log('  -s             Return number of database size');
    console.log('  -h, --help     output usage information');
}

// Handle --version or -V
if (argv.version) {
    console.log(pkg.version);
    process.exit(0);
}

// Handle --help or -h
if (argv.help) {
    showHelp();
    process.exit(0);
}

// Handle -a (all)
if (argv.a) {
    console.log(picker.all());
    process.exit(0);
}

// Handle -i [index] (by index)
if (argv.i !== undefined) {
    if (argv.i === true || argv.i === '') {
        console.error('Error: -i option requires an index value');
        process.exit(1);
    }
    var index = parseInt(argv.i, 10);
    if (isNaN(index)) {
        console.error('Error: Index must be a valid number');
        process.exit(1);
    }
    console.log(picker.byIndex(index));
    process.exit(0);
}

// Handle -n [name] (by name)
if (argv.n !== undefined) {
    console.log(picker.byName(argv.n));
    process.exit(0);
}

// Handle -t [type] (by type)
if (argv.t !== undefined) {
    console.log(picker.byType(argv.t));
    process.exit(0);
}

// Handle -r (random)
if (argv.r) {
    console.log(picker.randomize());
    process.exit(0);
}

// Handle -s (size)
if (argv.s) {
    console.log(picker.size());
    process.exit(0);
}

// Default mode: no arguments provided
// Check if no valid options were processed
var validOptions = ['version', 'help', 'a', 'i', 'n', 't', 'r', 's'];
var hasValidOption = validOptions.some(function(opt) {
    var value = argv[opt];
    // For boolean options, check if they're true
    // For string options, check if they're defined
    return value === true || (typeof value === 'string' && value !== '');
});

if (!hasValidOption) {
    console.log(picker.randomize());
}
