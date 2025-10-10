let input = document.querySelector("input")
let btn = document.querySelector("button")

let cityName = document.querySelector(".cityName")
let cityTime = document.querySelector(".cityTime")
let cityTemp = document.querySelector(".cityTemp")
let cityRegion = document.querySelector(".cityRegion")


async function getData(cityName){
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=978485c2074f43eabaf162020252801&q=${cityName}&aqi=yes`)

    return data.json()
    
}

btn.addEventListener("click",async ()=>{
    let inputVal = input.value
    let result = await getData(inputVal)
    console.log(result);
    
    cityName.innerHTML = `${result.location.name}`
    cityRegion.innerHTML = `${result.location.region}`
    cityTime.innerHTML = `${result.location.localtime}`
    cityTemp.innerHTML = `${result.current.temp_c}`
    
})