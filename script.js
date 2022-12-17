function generateList(array) {
    let ul = document.createElement('ul');
    array.forEach(item => {
       let li = document.createElement('li');
       if(!Array.isArray(item)) {
         li.innerText = item;
       } else {
         li.appendChild(generateList(item, ul));
       }
       ul.appendChild(li);
    })
    return ul;
}
document.body.appendChild(generateList([1, 2, [1, 2, 4], 3, 4]));