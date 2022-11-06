const yargs = require('yargs');
const Movie = require("./utils")

function app (yargsObject) {
    if (yargsObject.add) {
        const newMovie = new Movie(yargsObject.title, yargsObject.actor);
        newMovie.add();
    } else if (yargsObject.multiadd) {
        const movie1 = new Movie(yargsObject.title1, yargsObject.actor1);
        movie1.add();
        const movie2 = new Movie(yargsObject.title2, yargsObject.actor2);
        movie2.add();
    }
};

app(yargs.argv);