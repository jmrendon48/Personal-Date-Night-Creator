let savedDates = [];
let newDate = {};

// set minimum date of datepicker
$(document).ready(function () {
  $(".datepicker").datepicker({
      minDate: 0,
  })
});

// open planned dates modal
$(document).ready(function(){
  $('.modal').modal();
});  

// Movie generator
$("#movie-btn").on("click", function findMovie() {
    userEntries();
    randomMovieGenerator();
  });

  // add function to test validity of user entries
  let userEntries = function () {
  let releaseYear = $(".year-selector").val().trim();
  let genre = $("#genres").val();
  let cuisineStyle = $("#food-types").val();

  // check for invalid year input
  if (genre === "genre") {
      $("#error").text("Please choose a genre");
      $("#error").addClass("error");
  } else if (releaseYear > 2021 || releaseYear < 1900) {
      $("#error").text("Please choose a year between 1900 and 2021");
      $("#error").addClass("error");
  } else if (parseInt(releaseYear) != releaseYear) {
      $("#error").text("Your year must be a four-digit number");
      $("#error").addClass("error");
  } else if (cuisineStyle === "cuisine-style") {
    $(".error").text("Please choose a Cuisine Style"); 
    $("#error").addClass("error");
  } else {
    $("#error").text("");
    $("#error").removeClass("error");
  }
};

// add function to generate a random movie
let randomMovieGenerator = function() {
    let releaseYear = $(".year-selector").val().trim();
    let genre = $("#genres").val();
    let apiKey = "183cf14b0fa970fabe87a2879d2f3aa1";

    $.ajax( {
        // retreive data from API and search for random movie in array
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${releaseYear}-01-01&primary_release_date.lte=${releaseYear}-12-31&with_genres=${genre}&with_original_language=en`,
        method: "GET",
      }).then(function (response) {
            let randomMovie = Math.floor(Math.random() * (response.results.length - 1));
          for(let i = randomMovie; i < randomMovie + 1; i++) {
              let fullYear = response.results[i].release_date;
              let fourDigitYear = fullYear.substring(0, 4);
              let title = response.results[i].original_title;
              let parameters = $.param({
                  t: title,
                  y: fourDigitYear,
                  plot: "short",
                  apikey: "dadc91b3"
              });

              $.ajax({
                  // retrieve data from API
                  url: "https://www.omdbapi.com/?" + parameters,
                  method: "GET",
              }).then(function(response) {
                  // if API cannot find movie, look for new movie
                  if(response.Response === "False") {
                      findMovie();
                  }

                  // remove previous content
                  $(".movie-poster").remove();
                  $(".title").remove();
                  $(".trailer").remove();
                  // create variables from the data from API
                  let movieDiv = $("#movie-title");
                  let movieTitle = $("<h3>").attr("class", "center-align title").html(response.Title);
                  let movieImg = $("<img>").attr({ "src": response.Poster, "class": "movie-poster"});
                  let movieTrailer = $("<a>").attr("href", `https://www.youtube.com/results?search_query=${response.Title}trailer`).attr("target", "_blank").attr("class", "btn primary-btn trailer").html("View trailer");
                  let movieStream = $("<a>").attr("href", `https://www.justwatch.com/us/search?q=${response.Title}`).attr("target", "_blank");
                  // append new content to movie section 
                  movieStream.append(movieImg);
                  movieDiv.append(movieTitle, movieStream, movieTrailer);
                  // Call meal generator function
                  mealGenerator();
                  savePlannedDates(title, fourDigitYear);
                });
            }
      });
};

// add function to get random food
let mealGenerator = function() {
    let apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    fetch(apiUrl)
        // retreive data from API and search for random food in array
      .then(function (response) {
          if (response.ok) {
          response.json().then(function(data) {
            createMeal(data.meals[0]);
          });
        } else {
            alert("Error: " + response.statusText);
        }
    });
};

// add function to create a meal section
let createMeal = function(meal) {
    // remove previous content
    $(".food-image").remove();
    $(".ingredient").remove();
    $(".food-title").remove();
    $(".videoWrapper").remove();
    $(".videoTitle").remove();

    // create variables from the data from API
    let mealImgDiv = $("#meal-image");
    let foodTitleDiv = $("#food-title");
    let videoDiv = $("#videoWrapper")
    let mealImg = $("<img>").attr({ "src": meal.strMealThumb, "class": "food-image"});
    let ingredientList = $("#ingredient-list");
    let foodTitle = $("<h3>").attr("class", "food-title").text(meal.strMeal);
    let videoTitle = $("<h5>").attr("class", "videoTitle").text("Recipe Video");
    let recipeVideo = "";

	// Get all ingredients from the object. Up to 3
	for(let i = 1; i <= 3; i++) {
        let mealIngredient = $("<li>").attr("class", "ingredient").text(`${meal[`strIngredient${i}`]}`); 
        ingredientList.append(mealIngredient);
    }
    // append new content to food section 
    mealImgDiv.append(mealImg);
    foodTitleDiv.append(foodTitle);

    // checking if the youtube video exists
    if (meal.strYoutube) {
        recipeVideo = $("<iframe>").attr("class", "videoWrapper").attr("src", `https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`);
        videoDiv.append(videoTitle, recipeVideo);
    } else {
       recipeVideo = "";
    }
};

// add function to save planned dates
let savePlannedDates = function(title, fourDigitYear) {
  // get value of submitted date
  let date = $("#date").val();
 // console.log(date);

  // add date to li
  let savedDateEntry = $("<li>");
  savedDateEntry.text(`${date}: Food Name + ${title} (${fourDigitYear})`);

  // append li to saved dates list
  $("#planned-dates-list").append(savedDateEntry);
};

