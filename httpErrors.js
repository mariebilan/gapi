class httpError extends Error{
    constructor(response){
        super(`${response.status} for ${response.statusText}`);
        this.name = "Http Error";
        this.response = response;
    }
}