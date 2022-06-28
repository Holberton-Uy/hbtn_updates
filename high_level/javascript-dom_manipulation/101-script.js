document.addEventListener('DOMContentLoaded', (e) => 
{
    url = 'https://www.fourtonfish.com/hellosalut/';
    document.getElementById('btn_translate')
    .addEventListener("click", e => {
        lang = document.getElementById('language_code').value
        if(lang){
            fetch(url+'?lang='+lang)
            .then(response => response.json())
            .then(data => 
            {
                c = document.getElementById('hello'); 
                c.textContent = data.hello;
            });    
        }
    });
});