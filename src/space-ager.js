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
    } else  return this.lifeExpectancy;
  }

  leftToLive()  {
    let planetLifeLeft = [];
    let planetYears = this.checkLifeExpectancy();

    for (let i = 0; i < 5; i++)  {
      if  (i === 0) {
        planetYears -= this.earthAge;
        planetLifeLeft.push(Math.round(planetYears));
      }

      if  (i === 1) {
        planetYears = planetYears / 0.24;
        planetYears -= this.mercuryAge;
        console.log(Math.round(planetYears));
        planetLifeLeft.push(Math.round(planetYears)); 
      }

      if  (i === 2) {
        planetYears = planetYears / 0.62;
        planetYears -= this.venusAge;
        console.log(Math.round(planetYears));
        planetLifeLeft.push(Math.round(planetYears));
      }

      if  (i === 3) {
        planetYears = planetYears / 1.88;
        planetYears -= this.marsAge;
        console.log(Math.round(planetYears));
        planetLifeLeft.push(Math.round(planetYears));
      }

      if  (i === 4) {
        planetYears = planetYears / 11.86;
        planetYears -= this.jupiterAge;
        console.log(Math.round(planetYears));
        planetLifeLeft.push(Math.round(planetYears));
      }

      planetYears = this.checkLifeExpectancy();
    }

    return planetLifeLeft;
  }
}