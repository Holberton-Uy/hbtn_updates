( function() {
    fetch('https://swapi-api.hbtn.io/api/people/5/?format=json')
    .then(response => response.json())
    .then(data => 
    { 
        c = document.getElementById('character'); 
        c.textContent = data.name;
    });
})();