let button = document.getElementById("search-btn")

button.addEventListener("submit",(e)=>{
    e.preventDefault()

    let username = document.getElementById("userName").value 

    if(username){
        fetchUserInfoFromGitHub(username)
        fetchRepo(username,1)
    }
})


async function fetchUserInfoFromGitHub(userName){
    let responce = await fetch(`https://api.github.com/users/${userName}`)
    let data = await responce.json()
    
    let resultOverview = document.querySelector(".overview")

    resultOverview.innerHTML = `
        <div>
            <img width="150px" height="150px" src="${data.avatar_url}" />
            <h2>${data.login}</h2>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Public Repo: ${data.public_repos}</p>
        </div>
    `
}
// console.log(fetchUserInfoFromGitHub("ankit"));


async function fetchRepo(userName,page){
    let data = await fetch(`https://api.github.com/users/${userName}/repos?per_page=5&page=${page}`) 
    
    let userRepo = await data.json()
    console.log(userRepo);

    let repoList = userRepo.map((repo)=>
        `
        <div>
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>

            <p>Description: ${repo.description || "no Description available"}</p>
        </div>
        `
    ).join(" ")

    let repo = document.querySelector(".repos")
    repo.innerHTML = repoList
}
// console.log(fetchRepo("ankit"));

