let h1 = document.querySelector("h1");
let add = document.querySelector(".add")
let sub = document.querySelector(".sub")
let reset = document.querySelector(".reset")

add.addEventListener("click", () => {
    let val = h1.innerText;
    val++
    h1.innerText = val;

});

sub.addEventListener("click", () => {
    let val = h1.innerText;
    val--;
    h1.innerText = val
});

reset.addEventListener("click", () => {
    h1.innerText = 0;
});

