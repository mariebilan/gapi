// initialization of github
const user = new github;
// initialization of UI
const ui = new UI;
// initialization of search box
const searchBox = document.querySelector("#searchBox");
// adding of keyup event listener to the search box
searchBox.addEventListener('keyup', getUser);

// get user
function getUser(e){
    if(e.target.value!=''){
    user.getUser(e.target.value)
    .then(data =>{
        ui.showUser(data.userData);
        ui.showRepos(data.repoData);
        ui.saveToLocal(data.repoData);
    })
    .catch(err => {
        // if not found show alert
        ui.showAlert('There is no such user','alert alert-danger');
        // then clear UI
        ui.clearUI();
        // show log of the error console.log(err);
    });
    }
    else{
        ui.clearUI();
    }
}
