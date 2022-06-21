( function() {
    document.getElementById('toggle_header').addEventListener("click", e => 
    { 
        h = document.querySelector('header');
        h.className === 'red' ? h.className = 'green' : h.className = 'red' ; 
    });
})();
