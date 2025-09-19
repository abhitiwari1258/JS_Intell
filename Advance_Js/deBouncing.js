// Debouncing -> wait for user to stop and then execute something

// Debouncing is a performance optimization technique.

/**
 Why do we need it?

Some events fire too frequently (like scroll, resize, keyup, mousemove).
Without control, these events can trigger functions hundreds of times per second → bad for performance.

Debouncing helps by limiting how often the function runs.
 */

// eg -> searchBox, form validation

// when u input the text it trigger after few second like search bar analyze which product u search and then show result 
let inp = document.querySelector("input")

function search(){
    console.log(inp.value);
}

function deBounce(fun,delay){
    let timer;
    return function(){
        clearInterval(timer)
        timer = setTimeout(fun,delay);
    }
}

let deBounceSearch = deBounce(search,1000)

inp.addEventListener("input",deBounceSearch)

// Throttling -> it basically limits how a function work
// eg -> when u scroll down the utube it take sometime to load content and then show you keep scroling it load then provide content it done by throttling

// Debounce → Executes after user stops triggering (good for search box, resize).

// Throttle → Executes at regular intervals during continuous action (good for scroll, mousemove).


// after clicking many time when u stop clicking then it display count on console

let btn = document.querySelector("button")
let isClicked = true
btn.addEventListener("click",()=>{
    if(isClicked){
        console.log("btn clicked");
        isClicked = false;
        setTimeout(()=>{
            isClicked = true
        },2000)
        
    }
})