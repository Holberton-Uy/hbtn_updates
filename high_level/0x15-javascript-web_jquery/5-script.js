( function() {
    document.getElementById('update_header').addEventListener("click", e => 
    { 
        document.querySelector('header').textContent = 'New Header!!!';
    });
})();