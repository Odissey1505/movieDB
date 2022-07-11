"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів Ви вже переглянули?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Скільки фільмів Ви вже переглянули?', '');
    }
    },
    rememberMyFilms: function() {
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
    },
    detectedPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('A little count of movies');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log ('You are classic movie watcher');
        } else if (personalMovieDB.count >= 30) {
            console.log ('You are insane in movies');
        } else {
            console.log ('Error');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt (`Ваш улюблений жанр під номером ${i}`, '');

            if(genre == '' || genre == null) {
                console.log('Ви ввели некоректні дані або не ввели їх взагалі');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр №${i + 1} це ${item}`);
        });
    }
};

personalMovieDB.start();


personalMovieDB.rememberMyFilms();


personalMovieDB.detectedPersonalLevel();


personalMovieDB.showMyDB(personalMovieDB.privat);


personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

