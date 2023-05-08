class SetPrice {
  constructor(strategy) {
    this.strategy = strategy;
  }
  getPrice(originalPrice) {
    const setedPrise = this.strategy.setAcordingToStrategy(originalPrice);
    return setedPrise;
  }
}

class PreSalePrice {
  setAcordingToStrategy(originalPrice) {
    return originalPrice * 0.8;
  }
}
class PromotionPrice {
  setAcordingToStrategy(originalPrice) {
    return originalPrice > 1000 ? originalPrice * 0.7 : (originalPrice += -20);
  }
}

class DefaultPrice {
  setAcordingToStrategy(originalPrice) {
    return originalPrice;
  }
}
class BlackFridayPrice {
  setAcordingToStrategy(originalPrice) {
    return originalPrice * 0.9;
  }
}

const preSalePrice = new PreSalePrice();
const promotionPrice = new PromotionPrice();
const defaultPrice = new DefaultPrice();
const blackFridayPrice = new BlackFridayPrice();

const preSale = new SetPrice(preSalePrice);
const promotion = new SetPrice(promotionPrice);
const defaultPr = new SetPrice(defaultPrice);
const blackFriday = new SetPrice(blackFridayPrice);

console.log(promotion.getPrice(15000));
console.log(preSale.getPrice(1000));
