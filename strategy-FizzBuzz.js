class SetPrice {
  constructor(strategy) {
    this.strategy = strategy;
  }
  getPrice(param) {
    const setedPrise = this.strategy.setAcordingToStrategy(param);
    return setedPrise;
  }
}

class FizzBuzz {
  setAcordingToStrategy(param) {
    var stringArr = [];
    for (let i = 1; i <= param; i++) {
      if ((i % 3 === 0) & (i % 5 === 0)) {
        stringArr[i - 1] = "FizzBuzz";
      } else if (i % 3 === 0) {
        stringArr[i - 1] = "Fizz";
      } else if (i % 5 === 0) {
        stringArr[i - 1] = "Buzz";
      } else {
        stringArr[i - 1] = i.toString();
      }
    }
    return stringArr;
  }
}
class Normal {
  setAcordingToStrategy(param) {
    var stringArr = [];
    for (let i = 1; i <= param; i++) {
      stringArr[i - 1] = i.toString();
    }
    return stringArr;
  }
}

const fizzBuzz = new SetPrice(new FizzBuzz());
const normal = new SetPrice(new Normal());

console.log(fizzBuzz.getPrice(15));
console.log(normal.getPrice(15));
