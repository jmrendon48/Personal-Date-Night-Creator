let savedDates = [];

// set minimum date of datepicker
$(document).ready(function () {
  $(".datepicker").datepicker({
    minDate: new Date()
  })
});

// open planned dates modal
$(document).ready(function() {
  $(".modal").modal();
});  

$(".modal-trigger").on("click", function() {
  $(".planned-date-entry").remove();
  loadDates();
});

// Movie generator
$("#movie-btn").on("click", function findMovie() {
    userEntries();
  });

  // add function to test validity of user entries
  let userEntries = function () {
  let releaseYear = $(".year-selector").val().trim();
  let genre = $("#genres").val();
  let date = $("#date").val();

  // check for invalid input
  if (date === "") {
    $("#error").text("Please pick a date.");
    $("#error").addClass("error");
  } else if (releaseYear > 2021 || releaseYear < 1900) {
    $("#error").text("Please choose a year between 1900 and 2021.");
    $("#error").addClass("error");
  } else if (genre === "genre") {
      $("#error").text("Please choose a genre.");
      $("#error").addClass("error");
  } else if (parseInt(releaseYear) != releaseYear) {
      $("#error").text("Your year must be a four-digit number.");
      $("#error").addClass("error");
  } else {
    $("#error").text("");
    $("#error").removeClass("error");
    randomMovieGenerator();
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
                  let movieTrailer = $("<a>").attr("href", `https://www.youtube.com/results?search_query=${response.Title}trailer`).attr("target", "_blank").attr("class", "btn btn-primary trailer").html("View trailer");
                  let movieStream = $("<a>").attr("href", `https://www.justwatch.com/us/search?q=${response.Title}`).attr("target", "_blank");
                  // append new content to movie section 
                  movieStream.append(movieImg);
                  movieDiv.append(movieTitle, movieStream, movieTrailer);
                  // Call meal generator function
                  mealGenerator(title, fourDigitYear);
                });
            }
      });
};

// add function to get random food
let mealGenerator = function(title, fourDigitYear) {
    let apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    fetch(apiUrl)
        // retreive data from API and search for random food in array
      .then(function (response) {
          if (response.ok) {
          response.json().then(function(data) {
            createMeal(data.meals[0], title, fourDigitYear) ;
          });
        } else {
            alert("Error: " + response.statusText);
        }
    });
};

// add function to create a meal section
let createMeal = function(meal, title, fourDigitYear) {
    // remove previous content
    $(".food-image").remove();
    $(".food-title").remove();
    $(".videoWrapper").remove();
    $(".videoTitle").remove();
    $(".foodArea").remove();
    $(".foodCategory").remove();
    $(".ingredient").remove();
    $(".ingredientTitle").remove();
    $(".mealIngredientTitle").remove();
    $(".foodInstructions").remove();
    $(".mealIngredient").remove();

    // create variables from the data from API
    let mealImgDiv = $("#meal-image");
    let foodTitleDiv = $("#food-title");
    let videoDiv = $("#videoWrapper");
    videoDiv.removeClass("videoWrapper-bottom");
    let ingredientsDiv = $("#ingredientsWrapper");
    let foodCategoryAreaDiv = $("#foodCategoryArea");
    let mealImg = $("<img>").attr({ "src": meal.strMealThumb, "class": "food-image"});
    let foodTitle = $("<h3>").attr("class", "food-title").text(meal.strMeal);
    let foodName = meal.strMeal;
    let videoTitle = $("<h5>").attr("class", "videoTitle").text("Recipe Video:");
    let foodArea = $("<h5>").attr("class", "foodArea").text("Area: ").append($("<span>").attr("class", "food-category-area").text(meal.strArea));
    let foodAreaName= meal.strArea;
    let foodCategory = $("<h5>").attr("class", "foodCategory").text("Category: ").append($("<span>").attr("class", "food-category-area").text(meal.strCategory));
    let recipeVideo = "";

    // append new content to food section  
    mealImgDiv.append(mealImg);
    foodTitleDiv.append(foodTitle);
    foodCategoryAreaDiv.append(foodArea, foodCategory);

    // checking if the youtube video exists
    if (meal.strYoutube) {
        recipeVideo = $("<iframe>").attr("class", "videoWrapper").attr("src", `https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`);
        videoDiv.append(videoTitle, recipeVideo);
        videoDiv.addClass("videoWrapper-bottom");

    } else {
      // checking if the ingredients link exists
      if (meal.strSource) {
        let ingredientTitle = $("<a>").attr("href", `${meal.strSource}`).attr("target", "_blank").attr("class", "btn btn-primary ingredientTitle").html("VIEW INGREDIENTS");
        videoDiv.append(ingredientTitle);
      } else {
      
        let foodInstructions = $("<p>").attr("class", "foodInstructions").text("Ingredient Instructions:").append($("<p>").attr("class", "mealIngredient").text(meal.strInstructions));
        ingredientsDiv.append(foodInstructions);

        if (meal.strInstructions === "") {
            let ingredientTitle = $("<p>").attr("class", "mealIngredientTitle").text("Ingredients:");
        videoDiv.append(ingredientTitle);
      // Get all ingredients from the object. Up to 3
        for(let i = 1; i <= 3; i++) {
        let mealIngredient = $("<li>").attr("class", "ingredient").text(`${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}`); 
        videoDiv.append(mealIngredient);
        }
        }
      }
    }
    savePlannedDates(foodName, foodAreaName, title, fourDigitYear);
};

// add function to save planned dates
let savePlannedDates = function(foodName, foodAreaName, title, fourDigitYear) {
  // get value of submitted date
  let date = $("#date").val();

  // date info
  let plannedDateInfo = `${date}: ${foodName} (${foodAreaName}) + ${title} (${fourDigitYear})`;

    savedDates = [];
    let previousDates = localStorage.getItem("localDates");
    previousDates = JSON.parse(previousDates);
    if (previousDates) {
      savedDates = previousDates;
    }
    console.log(previousDates);
  
  // add new date plan to array
  savedDates.push(plannedDateInfo);

  localStorage.setItem("localDates", JSON.stringify(savedDates));
};

// add function to load planned dates to modal
let loadDates = function() {
  let savedDatesEntries = localStorage.getItem("localDates");
  if (!savedDatesEntries) {
    return false
  }
  savedDatesEntries = JSON.parse(savedDatesEntries);
  
  for (let x = 0; x < savedDatesEntries.length; x++) {
    // add date to li
    let plannedDateEntry = $("<li>");
    plannedDateEntry.text(savedDatesEntries[x]);
    plannedDateEntry.addClass("planned-date-entry");

    // append li to saved dates list
    $("#planned-dates-list").append(plannedDateEntry);
  }
};