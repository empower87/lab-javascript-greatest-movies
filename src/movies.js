// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(dirArr) {
    return dirArr.map((movie) => {
        return movie.director
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (movies) {
    return movies.filter(word => {
        const spielbergs = word.director == "Steven Spielberg"
        const dramaz = word.genre.includes("Drama")
        return spielbergs && dramaz
    }).length
};

//Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(myArr) {
    return (
      Number(
        (
          myArr.reduce((acc, movie) => {
            return (acc += movie.rate || 0);
          }, 0) / myArr.length
        ).toFixed(2)
      ) || 0
    );
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let filteredDramaMovies = array.filter((eachMovie) => {
      return eachMovie.genre.includes('Drama')
    })
  
    return ratesAverage(filteredDramaMovies)
  }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const result = array.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (b.year > a.year) {
        return -1;
      } else {
  
        return a.title.localeCompare(b.title);
      }
    })
    return [...result];
  }

// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  //sort but title
  let sortedArray = [...arr].sort((a, b) => {
    return (a.title.localeCompare(b.title)) //it is either 0,1,-1
  })
  let first20titles = sortedArray.slice(0, 20).map(item => {
    return item.title
  })

  return first20titles
  // return first 20 items
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// let testString = "1h 36min"
function turnHoursToMinutes(arr) {
  let newArr = arr.map((movie) => {
    let eachMovie = {...movie}
    let words = eachMovie.duration.split(" ");
    let hours = parseInt(words[0]);
    if (words[0].includes('m'))
    {
      eachMovie.duration = parseInt(words[0])
    } else {
    
    let minutes = 0;
    if (words[1]) {
      minutes = parseInt(words[1]);
    }

    let totalTime = hours * 60 + minutes;
    eachMovie.duration = totalTime;
    // console.log(eachMovie.duration)
    // console.log(movie.duration)

  }
    return eachMovie;
  });
  // console.log(arr[0])
  // console.log(newArr[0])
  return newArr;
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
