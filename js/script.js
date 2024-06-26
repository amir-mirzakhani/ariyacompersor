const prices = document.querySelectorAll(".price");

// Loop through each price element
for (const priceElement of prices) {
  // Get the current price as a number
  const priceValue = parseFloat(priceElement.textContent);

  // Format the price using toLocaleString for the "fa" locale (assuming Farsi)
  const formattedPrice = priceValue.toLocaleString("fa");

  // Update the inner text of the price element with the formatted number
  priceElement.innerText = formattedPrice;
}

// light slider js code
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});
