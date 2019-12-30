class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
        this.repos = document.querySelector('#repos');
        this.local = document.querySelector('#local');
    }
    // function to show github user information
    showUser(data){
        this.profile.innerHTML = `
            <div class="container">
            <div class="card card-body border-0">
            <div class="row">
            <div class="col-md-3">
            <img src="${data.avatar_url}"
            class="img-fluid">
            <a href="${data.html_url}" class="btn btn-block btn-info mt-3" target="_blank">GitHub Profile</a>
            </div>
            
            <div class="col-md-9">
            <h3 class="my-4">Details</h3>
            <a href="#" class="btn btn-secondary btn-sm disabled">Public Repos: ${data.public_repos}</a>
            <a href="#" class="btn btn-secondary btn-sm disabled">Public Gists: ${data.public_gists}</a>
            <a href="#" class="btn btn-secondary btn-sm disabled">Followers: ${data.followers}</a>
            <a href="#" class="btn btn-secondary btn-sm disabled">Following: ${data.following}</a>

            <ul class="list-group mt-3">
            <li class="list-group-item border-0">Company: ${data.company}</li>
            <li class="list-group-item border-0">Website/Blog: ${data.blog}</li>
            <li class="list-group-item border-0">Location: ${data.location}</li>
            <li class="list-group-item border-0">Member Since: ${data.created_at}</li>
            </div>
            </div>
            </div>
            </div>`
    }

    // function to add repos to the local storage
    saveToLocal(e) {
        const addedRepos = document.getElementById("btnAdd").value;   
        localStorage.setItem('addedRepos', JSON.stringify(addedRepos));
        let addLocal = localStorage.getItem('addedRepos');
           console.log('addLocal: ', JSON.parse(addLocal));

    this.local.innerHTML = `
    <div class="container">
    <h3 class="my-4">Repos Added To Local Storage</h3>
    <a href="#x"></a>
    </div>
    `
    }

    // function to show repositories
    showRepos(repositories){
    let output = '';
    repositories.forEach(item => {
         output+=`
             <div class="card card-body border-0">
                 <div class="row">
                 <div class="col-md-6">
                 <a href="#x">${item.name}</a>
                 </div>
                 <div class="col-md-6">
                     <button class="btn btn-secondary btn-sm" disabled>Stars: ${item.stargazers_count}</button>
                     <button class="btn btn-secondary btn-sm" disabled>Watchers: ${item.watchers}</button>
                     <button class="btn btn-secondary btn-sm" disabled>Forks: ${item.forks_count}</button>
                     <button class="btn btn-info btn-sm" type="button" id="btnAdd" onclick="saveToLocal(${item.name});">Add To Local</button>
                 </div>
                 </div>
             </div>
         `       
    });

             this.repos.innerHTML = `
             <div class="container">
             <h3 class="my-4">Some User Repos</h3>
                 ${output}
             </div>
             `
    }
    
    // clear UI function
    clearUI() {
        this.profile.innerHTML='';
        this.repos.innerHTML='';
    }

    // show alert function
    showAlert(message,className) {
        if(document.querySelector('.alert')!=null){
            this.clearAlert();
        }
        // an alert div
        let div = document.createElement('div');
        div.className = className;
        div.textContent = message;
        // parent element
        const parentDiv = document.querySelector('.searchBoxContainer');
        parentDiv.insertBefore(div, parentDiv.firstElementChild);
        // set timeout after 2 seconds to clear the alert
        setTimeout(()=>this.clearAlert(), 2000);
    }
    // clear alert function
    clearAlert() {
       document.querySelector('.alert').remove();
    }
}
