const getRepos = async (url) =>{
    try{
        const response = await fetch(url); //grab the data
        const data = await response.json(); //read the data
        const repoContainer = document.querySelector('#GIT_LIST_HOLDER_EXAMPLE'); //where you eventually want the list to show
        
        let holder = ``;
        data.forEach(e => {
            if(e.name === "USERNAME"){return} //(Change to your github username) Stops it from pulling your personal github readme
            holder +=(`<li><a href="${e.html_url}" target="_blank"><span class="bold">${e.name.replace(/-/g, ' ')}</span>: ${e.description}</a></li>`)
        });
        repoContainer.innerHTML = holder //insert the looped holder var data into the container
    }catch(e){
        console.log(e, 'Oops, I am an Error')
    }
}

getRepos('https://api.github.com/users/USERNAME/repos')