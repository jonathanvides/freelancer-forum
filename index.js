const names = ["Timothy", "James", "Jose", "Mark", "Arthur", "Hank"];
const occupations = ["Teacher", "Accountant", "Author", "Lawyer", "Programmer", "Consultant"];
const prices = [39, 43, 49, 57, 61, 64];
const maxFreelancers = 6;
const freelancers = [
    {
        name: "Timothy",
        occupation: "Teacher",
        price: 39,
    },
    {
        name: "James",
        occupation: "Accountant",
        price: 43,
    },
    {
        name: "Jose",
        occupation: "Author",
        price: 49,
    },
];

const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

render();

function render() {
    const currentFreelancer = document.querySelector("#currentFreelancer");
    const freelancerElements = freelancers.map((freelancer) => {
      const element = document.createElement("li");
      element.classList.add("freelancer");

      const name = document.createElement("p");
      name.textContent = `Name: ${freelancer.name}`;

      const occupation = document.createElement("p");
      occupation.textContent = `Occupation: ${freelancer.occupation}`;

      const price = document.createElement("p");
      price.textContent = `Price: $${freelancer.price}`;

      element.appendChild(name);
      element.appendChild(occupation);
      element.appendChild(price);
      return element;
      
    });
    currentFreelancer.replaceChildren(...freelancerElements);

    const averagePrice = calculateAveragePrice();
    document.querySelector("#averagePrice").textContent = `Average Price: $${averagePrice.toFixed(2)}`;
}

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
  
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];

    const price = prices[Math.floor(Math.random() * prices.length)];

  
    freelancers.push({ name, occupation, price });
  
    render();
  
    if (freelancers.length >= maxFreelancers) {
      clearInterval(addFreelancerIntervalId);
    }
}

function calculateAveragePrice() {
    const totalPrices = freelancers.reduce((acc, freelancer) => acc + freelancer.price, 0);
    return totalPrices / freelancers.length;
}


