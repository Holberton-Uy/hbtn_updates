( function() {
    fetch('https://swapi-api.hbtn.io/api/films/?format=json')
    .then(response => response.json())
    .then(data => 
    { 
        list = document.getElementById('list_movies');
        data.results.forEach( movie => {
            item = document.createElement('li');
            item.textContent = movie.title;
            list.appendChild(item);     
        });
    });
})();
