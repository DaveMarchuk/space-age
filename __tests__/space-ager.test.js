import { TestScheduler } from "jest";
import SpaceAger from "./../src/space-ager";

describe("SpaceAger", () => {
  test("Should create a new class object that will store the users Earth age", () => {
    const userAge = 27;

    let ageSpace = new SpaceAger(userAge);
    expect(ageSpace.earthAge).toEqual(userAge);
  })

  test("Should create a new class object that will store the age for Mercury,Venus,Mars and Jupiter", () => {
    const userAge = 25;

    let ageSpace = new SpaceAger(userAge);
    expect(ageSpace.earthAge).toEqual(userAge);
    expect(ageSpace.mercuryAge).toEqual(userAge/0.24);
    expect(ageSpace.venusAge).toEqual(userAge/0.62);
    expect(ageSpace.marsAge).toEqual(userAge/1.88);
    expect(ageSpace.jupiterAge).toEqual(userAge/11.86);
    console.log(ageSpace.jupiterAge);
    console.log(ageSpace.mercuryAge);
  })

  test("Will test if user is able to store their favorite color",() =>  {
    const favColor = "blue";
    
    let ageSpace = new SpaceAger(25,favColor);
    expect(ageSpace.favColor).toEqual(favColor);
  }) 
})