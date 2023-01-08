var OGurl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
var imgpath = 'https://image.tmdb.org/t/p/w1280';
var searchurl = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';
const search = document.getElementById('search');
const form = document.getElementById('form');
const main = document.querySelector('.main');


getMovie(OGurl);
async function getMovie(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    showMovie(respData.results);
}

function showMovie(data){
    main.innerHTML = "";
    data.forEach(movie => {
        const {backdrop_path, title, vote_average, overview} = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
    
        movieElement.innerHTML = `
        <img
            src = "${imgpath + backdrop_path}"
            alt = "${title}"
        />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class=${getColorVote(vote_average)}>${vote_average}</span>
            <div class="overview">${overview}</div>
        </div>`
        main.appendChild(movieElement);;
    });
}

function getColorVote(vote) {
    if (vote >= 7.5) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener('submit', (e) =>{
    console.log(e);
    e.preventDefault();
    const searchValue = search.value;
    if (searchValue) {
        getMovie(searchurl + searchValue);
        search.value = '';
    };
})