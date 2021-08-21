// handle mac configuration and price
function updatePriceAndConf(idName, price) {
  const updatePrice = (document.getElementById(idName).innerText = price);
  //   update total price
  TotalPrice("display-total-cost");
  TotalPrice("total-price-update");

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

// get all text from specified id and convert into integer value

function getAllPrice(inputId) {
  const PriceText = document.getElementById(inputId).innerText;
  const Price = parseInt(PriceText);
  return Price;
}

// price total calculation
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

// totalprice
function TotalPrice(idname) {
  const TotalPrice = (document.getElementById(idname).innerText =
    calculateTotalPrice());
  return TotalPrice;
}

// handle apply coupon even

document.getElementById("discount-btn").addEventListener("click", function () {
  let couponText = document.getElementById("coupon-text");
  const getTotalText = document.getElementById("display-total-cost").innerText;

  let getTotal = parseInt(getTotalText);
  // check coupon
  if (couponText.value == "stevekaku") {
    let discountCalc = (getTotal * 20) / 100;

    let discoutCalcFloat = parseFloat(discountCalc);
    let discountPrice = getTotal - discoutCalcFloat;
    // set total price after using coupon
    document.getElementById("total-price-update").innerText = discountPrice;
    // empty input field
    couponText.value = "";
  } else {
    alert("No promo code out there"); //if there is no coupn then just alert
  }
});
