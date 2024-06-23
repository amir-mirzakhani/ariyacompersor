const price = document.querySelector(".price");
// price section
const formattedNumber = parseFloat(price.textContent).toLocaleString("fa");
price.innerText = formattedNumber;
