"use strict";

const numberOfFilms = +prompt('Скільки фільмів Ви вже переглянули?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   firstMovieName = prompt('Один з останніх переглянутих фільмів?', ''),
        firstMovieMark = prompt('На скільки балів (з 10) оціните його?', ''),
        secondMovieName = prompt('Один з останніх переглянутих фільмів?', ''),
        secondMovieMark = prompt('На скільки балів (з 10) оціните його?', '');

personalMovieDB.movies[firstMovieName] = firstMovieMark;
personalMovieDB.movies[secondMovieName] = secondMovieMark;

console.log(personalMovieDB);


