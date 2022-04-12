import playerInput from "../src/player-input";

describe("playerInput", () => {
  it("should be an object", () => {
    expect(playerInput).toBeObject();
  });

  it("should contain a key  called 'get'", () => {
    expect(playerInput).toContainKey("get");
  });

  it("the key 'get' should be an method", () => {
    expect(playerInput.get).toBeFunction();
  });

  it("'get' should return a string", () => {
    const spy = jest.spyOn(playerInput, "get");
    spy.mockImplementation((input) => "a");

    expect(playerInput.get("a")).toBe("a");
    expect(spy).toHaveBeenCalledWith("a");
  });

  it("'get' should not return empty", () => {
    const spy = jest.spyOn(playerInput, "get");
    spy.mockImplementation((input) => "a");

    expect(playerInput.get("a")).not.toBeNull();
    expect(spy).toHaveBeenCalledWith("a");
  });

  it("should contain a key  called 'validate'", () => {
    expect(playerInput).toContainKey("get");
  });

  it("the key 'validate' should be an method", () => {
    expect(playerInput.validate).toBeFunction();
  });

  it("'validate' should return a string", () => {
    const input = "AA";
    expect(playerInput.validate(input)).toBeString();
  });

  it("'validate' should return a single capitalized letter", () => {
    const input = "aa";
    expect(playerInput.validate(input)).toBe("A");
  });

  it.todo(
    "'validate' should check and handle other invalid inputs like numbers"
  );
});
