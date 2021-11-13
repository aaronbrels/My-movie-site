
// let APIKey = "api_key=8f12819588de3f014980bc41a9475ad4"
let url = "https://api.themoviedb.org/3/search/movie?api_key=8f12819588de3f014980bc41a9475ad4&query="

let searchKeyword = ""

let searchTextbox = document.querySelector("#search-text")
let searchButton = document.querySelector("#search")
let mainElement = document.querySelector("#main")

searchButton.addEventListener("click", () => {
let searchTerm = searchTextbox.value.toLowerCase()

fetch(`${url}${searchTerm}`)
.then(response => response.json())
.then(data => {
    console.log(data)

let imgElement = document.createElement("img")  
imgElement.src = data.results.poster_path

mainElement.append(imgElement)

})
})




// // function fetchingAPIData () {
// fetch(`${url}${searchQuery}`)
// .then(response => response.json())
// .then(data => {
//     console.log(data)
//     let movie = data[0].results
//     console.log(movie)
// })

// // }

function fetchPoster (moviePoster) {
fetch(`${url}${moviePoster}`)
.then(response => response.json())
.then(posterData => {
    console.log(posterData)
let imgElementTwo = document.createElement("img")
imgElementTwo.src = posterData.results.poster_path
mainElement.append(imgElementTwo)
})

}