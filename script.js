const button = document.querySelector("button");
const select = document.querySelector("#destination");
const cards = document.querySelectorAll(".card");

button.addEventListener("click", function () {
  const selectedValue = select.value;

  // Hide all cards first
  cards.forEach(function (card) {
    card.style.display = "none";
  });

  // Show matching card
  if (selectedValue === "paris") {
    cards[0].style.display = "block";
  } else if (selectedValue === "london") {
    cards[1].style.display = "block";
  } else if (selectedValue === "newyork") {
    cards[2].style.display = "block";
  } else if (selectedValue === "brazil") {
    cards[3].style.display = "block";
  } else {
    alert("Please select a destination ✈️");
  }
});
