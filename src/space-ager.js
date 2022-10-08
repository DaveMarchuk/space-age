export default class SpaceAger  {
  constructor(userAge)  {
    this.earthAge = userAge;
    this.mercuryAge = userAge/0.24;
    this.venusAge = userAge/0.62;
    this.marsAge = userAge/1.88;
    this.jupiterAge = userAge/11.86;
  }

}