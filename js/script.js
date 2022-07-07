"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів Ви вже переглянули?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів Ви вже переглянули?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const   movieName = prompt('Один з останніх переглянутих фільмів?', ''),
                movieMark = prompt('На скільки балів (з 10) оціните його?', '');
    
        if (movieName != null && movieMark != null && movieName != '' && movieMark != '' && movieName.length < 50) {
            personalMovieDB.movies[movieName] = movieMark;
            console.log ('Done!');
        } else {
            console.log ('Fail. Try again');
            i--;
        }
    }
}

rememberMyFilms();


function detectedPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('A little count of movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ('You are classic movie watcher');
    } else if (personalMovieDB.count >= 30) {
        console.log ('You are insane in movies');
    } else {
        console.log ('Error');
    }
}

detectedPersonalLevel();

function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt (`Ваш улюблений жанр під номером ${i}`, '');
    }
}

writeYourGenres();
