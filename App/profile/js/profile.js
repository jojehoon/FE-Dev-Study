const user          = document.querySelectorAll('.user a');
const info          = document.querySelector('.info');
const infoLogin     = info.querySelector('#login td');
const infoUrl       = info.querySelector('#url td');
const infoFollowers = info.querySelector('#followers td');
const infoFollowing = info.querySelector('#following td');
const infoCreate    = info.querySelector('#create td');
const infoUpdate    = info.querySelector('#update td');

user.forEach(function(e){
    e.addEventListener('click', function () {
        Array.from(document.querySelectorAll('.user li')).forEach(li => {
            li.classList.remove('on');
        });
        e.parentNode.classList.add('on');
        fetch(`https://api.github.com/users/${e.textContent}`)
            .then(blob => blob.json())
            .then(function (data) {
                infoLogin.textContent     = data.login;
                infoUrl.textContent       = data.html_url;
                infoFollowers.textContent = data.followers;
                infoFollowing.textContent = data.following;
                infoCreate.textContent    = data.created_at;
                infoUpdate.textContent    = data.updated_at;
            })
    })
})