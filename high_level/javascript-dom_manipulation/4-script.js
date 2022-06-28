( function() {
    document.getElementById('add_item').addEventListener("click", e => 
    { 
        list = document.querySelector('ul.my_list');
        item = document.createElement('li');
        item.textContent = 'Item';
        list.appendChild(item); 
    });
})();