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

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// function ratesAverage(movies) {
//     if (movies.length === 0) {
//         return 0
//     }
//     let ok = movies.reduce((a, b) => ({rate: a.rate + b.rate}))
//     ok = Number((ok.rate / movies.length).toFixed(2))
//     return ok
// }
function ratesAverage(movies) {
    return (
        Number(
        (
            movies.reduce((a, b) => {
                return (a += b.rate || 0);
            }, 0) / movies.length
        ).toFixed(2)
    ) || 0
    )
}
// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(movies) {
//     return movies.sort((a, b) => {
//         if b.year - a.year
// }
// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let sorted = [...array].sort((a, b) => {
        return (a.title.localeCompare(b.title))
    })
    let firstSort = sorted.map(item => {
        return item.title
    })
    return firstSort.slice(0, 20)
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
let testString = "1h 36min"
function hoursminutes(testString) {
    let hours = parseInt()
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
