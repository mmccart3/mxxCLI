const yargs = require('yargs');

// console.log(yargs.argv.actor);

const input = yargs.argv;

if (input.actor) {
    console.log (`It's ${input.actor}`);
}