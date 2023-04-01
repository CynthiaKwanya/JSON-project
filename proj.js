//geting data
document.getElementById("gettext").addEventListener
('click', gettext);
document.getElementById("getusers").addEventListener
('click', getusers);
document.getElementById("getposts").addEventListener
('click', getposts);
document.getElementById("addpost").addEventListener
('submit', addpost);

function gettext(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then ((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err))
}



function getusers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
          let output = '<h2 class="mb-4">users</h2>';
            data.forEach(function(users){
                output += `
            <ul class='list-group mb-3'>
            <li class="list-group item">Name:${users.name}<li/>
            <li class="list-group item">Username:${users.username}<li/>
            <li class="list-group item">Email:${users.email}<li/>
            <ul/>
            
            `;
            });
            document.getElementById('output').innerHTML = output;
        })
}



function getposts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">posts</h2>';
            data.forEach(function(post){
               output += `
            <div class="card card-body"> 
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </div>
            
            `;
            });
            document.getElementById('output').innerHTML = output;
        })
}        

function addpost(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {"Content-Type": "application/json",
        "Accept": "application/json"
         },
         body: JSON.stringify({title: title, body: body})
    })
    .then ((res) => res.json())
    .then((data) => console.log(data))
} 
