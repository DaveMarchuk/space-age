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
  })

  test("Will test if user is able to store their favorite color",() =>  {
    const favColor = "blue";
    
    let ageSpace = new SpaceAger(25,favColor);
    expect(ageSpace.favColor).toEqual(favColor);
  })

  test("If the user selects a color, it should correctly display their life expectancy on earth.", () => {
    const favColor = "blue";
    const userAge = 25;

    let ageSpace = new SpaceAger(userAge,favColor);
    expect(ageSpace.checkLifeExpectancy()).toEqual(100);
  })

  test("Should return the users life expectancy if their favorite color is red", () => {
    const favColor = "red";
    const userAge = 25;

    let ageSpace = new SpaceAger(userAge,favColor);
    expect(ageSpace.checkLifeExpectancy()).toEqual(50);
  })

  test("Should return the users life expectancy if their favorite color is green", () => {
    const favColor = "green";
    const userAge = 25;

    let ageSpace = new SpaceAger(userAge,favColor);
    expect(ageSpace.checkLifeExpectancy()).toEqual(80);
  })

  test("Should return the users life expectancy if their favorite color is yellow", () => {
    const favColor = "yellow";
    const userAge = 25;

    let ageSpace = new SpaceAger(userAge,favColor);
    expect(ageSpace.checkLifeExpectancy()).toEqual(60);
  })

  test("Will test life expectancy being stored correctly in SpaceAger class object.", () => {
    const favColor = "yellow";
    const userAge = 25;

    let ageSpace = new SpaceAger(userAge,favColor);
    ageSpace.checkLifeExpectancy();
    expect(ageSpace.lifeExpectancy).toEqual(60);
  })

  test("Will test if the user inputs an invalid color, it should return 0", ()=>  {
    const favColor = "pink";
    const userAge = 25;

    let ageSpace = new SpaceAger(userAge,favColor);
    expect(ageSpace.checkLifeExpectancy()).toEqual(0);
  })

  test("Method should successfully take the value from checkLifeExpectancy and set the remaining life left for all the planets", ()=>  {
    const favColor = "blue";
    const userAge = 25;

    let ageSpace = new SpaceAger(userAge,favColor);
    expect(ageSpace.leftToLive()).toEqual([75,313,121,40,6]);
    console.log(ageSpace.leftToLive());
  })

  test("leftToLive method needs to return number of years the user lived past life expectancy", ()=>  {
    const favColor = "blue";
    const userAge = 125;

    let ageSpace = new SpaceAger(userAge,favColor);
    expect(ageSpace.leftToLive()).toEqual([25,104,40,13,2]);
    console.log(ageSpace.leftToLive());
  })
})