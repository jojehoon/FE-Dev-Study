let cloneEl,list, newEl, newText, target;
const input    = document.querySelector('.new_diary');
const listWrap = document.querySelector('.diary_list');

newText = document.createTextNode('Delete');
newEl   = document.createElement('button');
newEl.classList.add('btn_delete');
newEl.appendChild(newText);

function addList(e){
    if(e.keyCode === 13){
    list = document.createElement('li');
    list.textContent = input.value;

    cloneEl = newEl.cloneNode(true);
    list.appendChild(cloneEl);
    
    listWrap.appendChild(list);
    input.value = '';
    }
}

input.addEventListener('keypress', function(e){
    addList(e);
})

listWrap.addEventListener('click', function(e){
    if(e.target.className === 'btn_delete'){
        e.target.parentNode.remove();
    }
})
