export default class SpaceAger  {
  constructor(userAge,userColor)  {
    this.earthAge = userAge;
    this.mercuryAge = userAge/0.24;
    this.venusAge = userAge/0.62;
    this.marsAge = userAge/1.88;
    this.jupiterAge = userAge/11.86;
    this.favColor = userColor;
  }

  checkLifeExpectancy() {
    let lifeExpectancy = 0;

    if  (this.favColor === "blue")  {
      lifeExpectancy = 100;
      return lifeExpectancy, lifeExpectancy - this.earthAge;
    } else if (this.favColor === "red") {
      lifeExpectancy = 50;
      return lifeExpectancy, lifeExpectancy - this.earthAge;
    }
  }
}