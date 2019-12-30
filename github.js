class github{
    constructor(){
        this.client_id = '5faff571a1f86d169d04';
        this.client_Secret = '6ef80879846fd44031efcc0a17d030e87c3991df';
        this.repos_count= 5;
        this.repos_sort = 'created: asc';
    }

    // asynchronous method to get user data
    async getUser(user){
        let userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_Secret}`);
        let repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_Secret}&sort=${this.repos_sort}&per_page=${this.repos_count}`);

        let userData = await userResponse.json();
        let repoData = await repoResponse.json();

        // checking for http errors
        try{
            if(userResponse.status!=200 || repoResponse.status!=200){
                throw new httpError(userResponse);
            }
            else{
                return {
                    userData,
                    repoData
                }
            }
        }
        catch(err){
            return err;
        }
    }
}