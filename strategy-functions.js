const preSalePrice = (originalPrice) => {
  return originalPrice * 0.8;
};

const promotionPrice = (originalPrice) => {
  return originalPrice > 1000 ? originalPrice * 0.7 : (originalPrice += -20);
};

const defaultPrice = (originalPrice) => {
  return originalPrice;
};

const blackFridayPrice = (originalPrice) => {
  return originalPrice * 0.9;
};

const priceStrategies = {
  "pre-sale": preSalePrice,
  promotion: promotionPrice,
  "black-friday": blackFridayPrice,
  default: defaultPrice,
};

const getPrice = (originalPrice, status) => {
  return priceStrategies[status](originalPrice);
};

console.log(getPrice(100, "pre-sale"));
console.log(getPrice(150, "promotion"));
