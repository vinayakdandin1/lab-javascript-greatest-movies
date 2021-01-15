// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
    const newArr = arr.map(e => e.director);
    return newArr;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    let count = 0;
    let newArr = arr.filter(e => {
        if(e.director === "Steven Spielberg" && (e.genre).includes("Drama")) {
            return true;
        }
    })
    return newArr.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    
    if(arr.length === 0) {
        return 0
    } else {
        let totalrates = arr.reduce(function(acc, elem) {
            if(elem.rate) {
                return acc + elem.rate;
            } else {
                return acc;
            }
                   
        }, 0)
     
     let res = (totalrates/arr.length).toFixed(2);
     return JSON.parse(res);
    }
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    
    let dramaMovies = [];
    
    for(a of arr) {
       if(a.genre.includes("Drama")) {
            dramaMovies.push(a);
        }
    }

    if(dramaMovies.length === 0) {
        return 0
    } else {
        let totalrates = dramaMovies.reduce(function(acc, elem) {
            return acc + elem.rate;
        }, 0);
       
        // return totalrates/dramaMovies.length;
        let res = (totalrates/dramaMovies.length).toFixed(2);
        return JSON.parse(res);
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

    function orderByYear(arr) {

        let newArr = JSON.parse(JSON.stringify(arr));

        newArr.sort(function(a,b){
            if (a.title > b.title) {
              return 1
            } else if (a.title < b.title) {
              return -1
            }
          else {
            return 0
          }
        })

        newArr.sort(function(a,b){
            if (a.year > b.year) {
              return 1
            } else if (a.year < b.year) {
              return -1
            }
          else {
            return 0
          }
        })

        return newArr

    }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let newArr = JSON.parse(JSON.stringify(arr));

        newArr.sort(function(a,b){
            if (a.title > b.title) {
              return 1
            } else if (a.title < b.title) {
              return -1
            }
          else {
            return 0
          }
        })

        let titleOnly = newArr.map((elem) => {
            return elem.title;
        })

        return titleOnly.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

    let newMovArr = JSON.parse(JSON.stringify(movies));

    let formattedMovies = newMovArr.map(function(singleMovie) {
        let duration = singleMovie.duration
        
        if(duration.includes(" ")) {
          let time = duration.split(" "); // ["3h", "20min"]
          let hrArr = time[0].split("h"); // ["3"]
          let hours = Number(hrArr[0]); //3
          let minArr = time[1].split("min"); // ["20"]
          let minutes = Number(minArr[0]);

          singleMovie.duration = (hours * 60) + minutes;
        } else if(duration.includes("h")) {
          let hrArr = duration.split("h"); // ["3"]
          let hours = Number(hrArr[0]); // 3

          singleMovie.duration = (hours * 60);
        } else {
          let minArr = duration.split("min") // ["20"]
          let minutes = Number(minArr[0]) // 20
          singleMovie.duration = minutes;
        }
        return singleMovie;
    })
  
    return formattedMovies;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


function bestYearAvg(movies) {

  if (!movies.length) {
      return null
  }

  let moviesByYear = {}
  movies.forEach(function(singleMovie){
      if (singleMovie.year in moviesByYear) {
          moviesByYear[singleMovie.year].push(singleMovie)
      }
      else {
          moviesByYear[singleMovie.year] = []
          moviesByYear[singleMovie.year].push(singleMovie)
      }
  })

  let highestRating = 0
  let year = 0

  for (let currentYear in moviesByYear) {
      let average = ratesAverage(  moviesByYear[currentYear] )
      if (average > highestRating ) {
          highestRating = average
          year = currentYear
      }
  }
 
  return `The best year was ${year} with an average rate of ${highestRating}`

}