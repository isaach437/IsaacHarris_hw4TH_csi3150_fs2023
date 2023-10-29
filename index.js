//Importing the cars wasn't working, so I just manually pput them in here.
const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
    image: "./images/camry.png",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
    image: "./images/civic.png",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
    image: "./images/fusion.png",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
    image: "./images/altima.png",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
    image: "./images/malibu.png",
  },
  // Additional entries:
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
    image: "./images/passat.png",
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
    image: "./images/elantra.png",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
    image: "./images/outback.png",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
    image: "./images/cx5.png",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
    image: "./images/sorento.png",
  },
  // Five more entries:
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
    image: "./images/challenger.png",
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
    image: "./images/xt5.png",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
    image: "./images/fpace.png",
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
    image: "./images/models.png",
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
    image: "./images/cayenne.png",
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
    image: "./images/es.png",
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
    image: "./images/5series.png",
  },
];
//Lists out all the cars initially
function createCars() {
  const carContainer = document.getElementById("cars");

  usedCars.forEach((car) => {
    car.price = car.price.toLocaleString();
    car.mileage = car.mileage.toLocaleString();
    const card = document.createElement("div");
    card.className = "car";
    card.innerHTML = `
    <img src="${car.image}" alt="${car.make} ${car.model} Image">
            <h2>${car.make} ${car.model}</h2>
           
            <p>Price: $${car.price}</p>
 			<p>Year: ${car.year}</p>
			<p> Color: ${car.color} </p>
			<p> Mileage: ${car.mileage} </p>
			<p> Miles to the gallon: ${car.gasMileage} </p>
            <br />
        `;
    carContainer.appendChild(card);
  });
}
createCars();

function updateCars(query, colorQuery, priceFilter, yearFilter, mileageFilter) {
  const carCards = document.querySelectorAll(".car");
  carCards.forEach((card) => {
    const carInfo = card.textContent || card.innerText;
    const colorPattern = new RegExp(`Color:\\s*(${colors.join("|")})`, "i");

    const hasQuery = carInfo.toLowerCase().includes(query.toLowerCase());
    const hasColor =
      colorPattern.test(carInfo) &&
      carInfo.toLowerCase().includes(colorQuery.toLowerCase());

    // Get the info and then check filters and then display
    const priceMatch = carInfo.match(/Price: \$([\d,]+)/);
    const yearMatch = carInfo.match(/Year: (\d{4})/);
    const mileageMatch = carInfo.match(/Mileage: (\d+)/);

    const pricePass =
      !priceFilter ||
      (priceMatch && parseInt(priceMatch[1].replace(/,/g, "")) < priceFilter);
    const yearPass =
      !yearFilter || (yearMatch && parseInt(yearMatch[1]) === yearFilter);
    const mileagePass =
      !mileageFilter ||
      (mileageMatch &&
        parseInt(mileageMatch[1].replace(/,/g, "")) < mileageFilter);

    card.style.display =
      hasQuery && hasColor && pricePass && yearPass && mileagePass
        ? "block"
        : "none";
  });
}

const colors = ["red", "blue", "green", "white", "silver", "black", "gray"];

const make = document.getElementById("make");
const color = document.getElementById("color");
const price = document.getElementById("maxP");
const year = document.getElementById("year");
const mileage = document.getElementById("maxM");

make.addEventListener("input", () => {
  updateCars(
    make.value,
    color.value,
    parseFloat(price.value) || 0,
    parseInt(year.value) || 0,
    parseInt(mileage.value) || 0
  );
});

color.addEventListener("input", () => {
  updateCars(
    make.value,
    color.value,
    parseFloat(price.value) || 0,
    parseInt(year.value) || 0,
    parseInt(mileage.value) || 0
  );
});
price.addEventListener("input", () => {
  updateCars(
    make.value,
    color.value,
    parseFloat(price.value) || 0,
    parseInt(year.value) || 0,
    parseInt(mileage.value) || 0
  );
});
year.addEventListener("input", () => {
  updateCars(
    make.value,
    color.value,
    parseFloat(price.value) || 0,
    parseInt(year.value) || 0,
    parseInt(mileage.value) || 0
  );
});
mileage.addEventListener("input", () => {
  updateCars(
    make.value,
    color.value,
    parseFloat(price.value) || 0,
    parseInt(year.value) || 0,
    parseInt(mileage.value) || 0
  );
});
