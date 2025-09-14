let textArea = document.querySelector("#text")
let count = document.querySelector("span")
let warn = document.querySelector(".warn")

/**
 * Important
 * In JavaScript, HTML attributes like maxlength are written in camelCase → maxLength (capital L).
 */

textArea.addEventListener("input",function(){
    let characterCount = textArea.value.length;
    count.innerText = characterCount

    if(characterCount === textArea.maxLength){
    warn.innerText = `Warning : Character Limit Reached!`
    warn.style.color = "red"
    }
})


/*
** if we use this function it can only increase count like input the text in field then inc , deleting the input text then also increase the count

let characterCount = 0
textArea.addEventListener("input",function(){
    characterCount++;
    count.innerText = characterCount;
})
*/
