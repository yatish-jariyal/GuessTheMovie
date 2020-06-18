/* eslint-disable linebreak-style */
var button = document.querySelector("#submit");
var next = document.querySelector("#next");
var img = document.querySelector("img");
var movie;

function changeMovie(randomMovie) {
  var imgpath = "https://image.tmdb.org/t/p/original";
  var imgsrc = imgpath + randomMovie.backdrop_path;
  movie = randomMovie;
  img.src = imgsrc;
}

button.addEventListener("click", () => {
  var input = document.querySelector("input").value;
  if (input.toLowerCase() === movie.title.toLowerCase()) {
    alert("Correct");
  } else {
    alert("Wrong");
  }
});

function fetchMovie() {
  var randomPage = Math.floor(Math.random() * 500);
  var url = `https://api.themoviedb.org/3/movie/popular?api_key=33cca23496a4d52b439f96fbfb06966f&language=en-US&page=${randomPage}`;
  console.log("called");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      var movies = data.results;
      var random = Math.floor(Math.random() * movies.length);
      var randomMovie = movies[random];
      console.log(randomMovie);
      changeMovie(randomMovie);
    })
    .catch((err) => {
      console.log(err);
    });
}

next.addEventListener("click", () => {
  fetchMovie();
});

fetchMovie();
