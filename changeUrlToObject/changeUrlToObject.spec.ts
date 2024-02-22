import { changeUrlToObject } from "./changeUrlToObject";

describe(changeUrlToObject.name, () => {
    it('Test 1', () => {
        // arrange
        const data = "?foo=hello&bar=world&other=toto";

        // act
        const response = changeUrlToObject(data);

        // assert
        expect(response).toEqual({ foo: "hello", bar: "world", other: "toto" });
    });

    it("Test 2", () => {
        // arrange
        const data = "?";

        // act
        const response = changeUrlToObject(data);

        // assert
        expect(response).toEqual({});
    });

    it("Test 3", () => {
        // arrange
        const data = "?foo=hello&bar=world&other=toto&baz";

        // act
        const response = changeUrlToObject(data);

        // assert
        expect(response).toEqual({
          foo: "hello",
          bar: "world",
          other: "toto",
          baz: true,
        });
    });

    it("Test 4", () => {
        // arrange
        const data = "?foo=hello&bar=world&other=toto&baz&foo=again";

        // act
        const response = changeUrlToObject(data);

        // assert
        expect(response).toEqual({ foo: ['hello', 'again'], bar: "world", other: "toto", baz: true });
    });


    it("Test 5", () => {
      // arrange
      const data = "?foo=hello&foo";

      // act
      const response = changeUrlToObject(data);

      // assert
      expect(response).toEqual({foo: ["hello", true]});
    });
});