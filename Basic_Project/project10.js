const quote = document.querySelector("#quote")
const author = document.querySelector("#author")
const btn = document.querySelector("button")

    const quotes = [
      { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
      { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
      { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
      { text: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" },
      { text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
      { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" }
    ];

btn.addEventListener("click",()=>{
    const randIndx = Math.floor(Math.random()*quotes.length)

    const randQuotes = quotes[randIndx]

    quote.textContent = `${randQuotes.text}`
    author.textContent = `${randQuotes.author}`
    
})