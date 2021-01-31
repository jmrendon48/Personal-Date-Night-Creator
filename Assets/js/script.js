// add function to generate random movie
$("#movie-btn").on("click", function findMovie() {
    userEntries();
   
  });

  // add function to test validity of user entries
  let userEntries = function () {
  let releaseYear = $(".year-selector").val().trim();
  let genre = $("#genres").val();

  if (genre === "genre") {
      $(".error").text("Please choose a genre.");
  } else if (releaseYear > 2021 || releaseYear < 1900) {
      $(".error").text("Please choose a year between 1900 and 2021.");
  } else if (parseInt(releaseYear) != releaseYear) {
      $(".error").text("Your year must be a four-digit number.");
  }
};


