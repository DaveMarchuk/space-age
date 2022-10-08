export default class SpaceAger  {
  constructor(userAge,userColor)  {
    this.earthAge = userAge;
    this.mercuryAge = userAge/0.24;
    this.venusAge = userAge/0.62;
    this.marsAge = userAge/1.88;
    this.jupiterAge = userAge/11.86;
    this.favColor = userColor;
    this.lifeExpectancy = 0;
  }

  checkLifeExpectancy() {
    if  (this.favColor === "blue")  {
      this.lifeExpectancy = 100;
      return this.lifeExpectancy;
    } else if (this.favColor === "red") {
      this.lifeExpectancy = 50;
      return this.lifeExpectancy;
    } else if (this.favColor === "green") {
      this.lifeExpectancy = 80;
      return this.lifeExpectancy;
    } else if (this.favColor === "yellow")  {
      this.lifeExpectancy = 60;
      return this.lifeExpectancy;
    }
    return this.lifeExpectancy;
  }
}