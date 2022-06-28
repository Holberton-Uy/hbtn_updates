
document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById("add_item").addEventListener("click", 
        e => { document.querySelector('.my_list').appendChild(newItem()); });
    document.getElementById("remove_item").addEventListener("click", 
        e => { if (d = document.querySelector('.my_list li:last-child')) d.remove(); });
    document.getElementById("clear_list").addEventListener("click", 
        e => { document.querySelectorAll('.my_list li').forEach(e => {e.remove()}); });
});

function newItem(){
    item = document.createElement('li');
    item.textContent = 'Item';
    return item;
}