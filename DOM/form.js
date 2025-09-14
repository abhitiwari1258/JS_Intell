let form = document.querySelector("form")

form.addEventListener("submit",function(event){
    event.preventDefault(); // stop navigation "/action" after event submitt occur
    // console.log(event);
    let userName = document.querySelector("#username");
    let userPassword = document.querySelector("#password")
    // console.dir(input.value);

    console.log(`User Name is : ${userName.value}`);
    console.log(`User password is : ${userPassword.value}`);
    
})