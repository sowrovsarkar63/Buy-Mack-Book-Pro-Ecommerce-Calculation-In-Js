// handle mac configuration and price
function updatePriceAndConf(idName, price) {
  const updatePrice = (document.getElementById(idName).innerText = price);
  //   update total price
  document.getElementById("display-total-cost").innerText =
    calculateTotalPrice();

  return updatePrice;
}

document
  .getElementById("default-memory")
  .addEventListener("click", function () {
    updatePriceAndConf("display-memory-cost", 0);
  });

document.getElementById("extra-memory").addEventListener("click", function () {
  updatePriceAndConf("display-memory-cost", 180);
});

// storage even handler
document
  .getElementById("default-storage")
  .addEventListener("click", function () {
    updatePriceAndConf("display-storage-cost", 0);
  });
document.getElementById("extra-storage").addEventListener("click", function () {
  updatePriceAndConf("display-storage-cost", 100);
});
document
  .getElementById("extra-lg-storage")
  .addEventListener("click", function () {
    updatePriceAndConf("display-storage-cost", 180);
  });

//   delivery even handler
document.getElementById("free-delivery").addEventListener("click", function () {
  updatePriceAndConf("display-delivery-cost", 0);
});
document.getElementById("fast-delivery").addEventListener("click", function () {
  updatePriceAndConf("display-delivery-cost", 20);
});

// get all text from specified id and convert in integer

function getAllPrice(inputId) {
  const PriceText = document.getElementById(inputId).innerText;
  const Price = parseInt(PriceText);
  return Price;
}

// price total
function calculateTotalPrice() {
  const baseTotal = getAllPrice("base-price");
  const memoryCost = getAllPrice("display-memory-cost");
  const storageCost = getAllPrice("display-storage-cost");
  const deliveryCost = getAllPrice("display-delivery-cost");

  const GetpriceTotal = parseInt(
    baseTotal + memoryCost + storageCost + deliveryCost
  );

  return GetpriceTotal;
}

// Update total price
