describe("SpaceAger", () => {
  test("Should create a new class object that will store the users Earth age", () => {
    const userAge = 27;

    const ageSpace = new SpaceAger(userAge);
    expect(SpaceAger.earthAge).toEqual(userAge);
  })
})