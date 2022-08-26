

let add = document.getElementById('add');

add.addEventListener('click',() => {

    let olitem = document.getElementById('olitem');
    let input = document.getElementById('input').value;
    let text = document.createTextNode(input);
    let newItem = document.createElement('li');
    newItem.appendChild(text);
    olitem.appendChild(newItem);

});