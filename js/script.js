"use strict";

const numberOfFilms = +prompt('Скільки фільмів Ви вже переглянули?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log('A little count of movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ('You are classic movie watcher');
} else if (personalMovieDB.count >= 30) {
    console.log ('You are insane in movies');
} else {
    console.log ('Error');
}
console.log(personalMovieDB);


