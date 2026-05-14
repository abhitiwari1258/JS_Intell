const person = {
  name: "Abhishek",
  address: { city: "Lucknow", country: "India" }
};

const { address: { city, country } } = person;

console.log(city, country); // Lucknow India

// change nessted object key

const {address:{city: abhishekCity,country:abhishekCountry}} = person
console.log(abhishekCity);
console.log(abhishekCountry);