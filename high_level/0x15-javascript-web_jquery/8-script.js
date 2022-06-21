( function() {
    fetch('https://fourtonfish.com/hellosalut/?lang=fr')
    .then(response => response.json())
    .then(data => 
    { 
        hello = document.getElementById('hello');
        hello.textContent = data.hello;
    });
})();