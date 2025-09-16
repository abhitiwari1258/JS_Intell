// Event bubbling -> occurr when we create nested element 

/*
it first runs the event handler on that element, then it "bubbles up" to its parent, then the grandparent, and so on, until it reaches the top (document).
*/

// if u click the child elm then it can trigger its parent element [order -> child->parent->grandParent]

// to stop event bubbling ew have stopPropogation()


let div = document.querySelector("div")
let ul = document.querySelector("ul")
let li = document.querySelector("li")


div.addEventListener("click",()=>{
    console.log("div clicked");
})

ul.addEventListener("click",(event)=>{
    event.stopPropagation()
    console.log("ul clicked");
})

li.addEventListener("click",(event)=>{
    event.stopPropagation()
    console.log("li clicked");
})