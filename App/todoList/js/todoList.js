(function(){
  todoList();
}());

function todoList(){
  const $input    = document.querySelector('.new_diary');
  const $length   = document.querySelector('.length');
  const $listWrap = document.querySelector('.diary_list');

  // let txtDel = document.createTextNode('Delete');
  // let $btnDel = document.createElement('button');
  // $btnDel.classList.add('btn_delete');
  // $btnDel.appendChild(txtDel);

  // let $checkBox = document.createElement('input');
  // $checkBox.setAttribute('type','checkbox');


  function addList(e){
    let node = $input.value.trim()
    if(e.keyCode !== 13 || node.length === 0) return;
    createElement(e);
    countList();
  }
  
  function deleteList(e){
    if(e.target.className !== 'btn_delete') return;
    e.target.parentNode.remove();
    countList();
  }

  function createElement(){
    // let $label = document.createElement('label');
    // let $list = document.createElement('li');
    // let cloneEl;

    // // label
    // cloneEl = $label.cloneNode();
    // $label.textContent = $input.value;
    
    // // checkbox
    // cloneEl = $checkBox.cloneNode(true);
    // $label.prepend(cloneEl);    

    // $list.appendChild($label);
    
    // // btnDel
    // cloneEl = $btnDel.cloneNode(true);
    // $list.appendChild(cloneEl);

    let $list = `<li>
                  <label>${$input.value}
                    <input type="checkbox">
                  </label>
                  <button type="button" class="btn_delete">Delete</button>
                </li>`;

    // list
    $listWrap.innerHTML += $list;

    // reset
    $input.value = '';
    $listWrap.addEventListener('click', deleteList);
  }
  
  function countList(){
    const num = $listWrap.querySelectorAll('li').length;
    num === 0 ? $length.textContent = '' : $length.textContent = num;
  }
  
  $input.addEventListener('keypress', addList);
}
