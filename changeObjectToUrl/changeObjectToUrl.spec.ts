import { changeObjectToUrl } from "./changeObjectToUrl";

describe(changeObjectToUrl.name, () => {
    it('Test 1', () => {
        // arrange
        const data = { foo: ["hello", true] };

        // act
        const response = changeObjectToUrl(data);

        // assert
        expect(response).toEqual("?foo=hello&foo");
    });

    it("Test 2", () => {
        // arrange
        const data = {
          foo: ["hello", "again"],
          bar: "world",
          other: "toto",
          baz: true,
        };

        // act
        const response = changeObjectToUrl(data);

        // assert
        expect(response).toEqual(
          "?foo=hello&foo=again&bar=world&other=toto&baz"
        );
    });


    it("Test 3", () => {
        // arrange
        const data = { foo: "hello", bar: "world", other: "toto", baz: true };

        // act
        const response = changeObjectToUrl(data);

        // assert
        expect(response).toEqual('?foo=hello&bar=world&other=toto&baz');
    });

    it("Test 3", () => {
        // arrange
        const data = { foo: "hello", bar: "world", other: "toto", baz: true }

        // act
        const response = changeObjectToUrl(data);

        // assert
        expect(response).toEqual('?foo=hello&bar=world&other=toto&baz');
    });

    it("Test 4", () => {
        // arrange
        const data = {};

        // act
        const response = changeObjectToUrl(data);

        // assert
        expect(response).toEqual("?");
    });

    it("Test 5", () => {
        // arrange
        const data = { foo: "hello", bar: "world", other: "toto" };

        // act
        const response = changeObjectToUrl(data);

        // assert
        expect(response).toEqual('?foo=hello&bar=world&other=toto');
    });
});