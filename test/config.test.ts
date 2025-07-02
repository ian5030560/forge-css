import { applyDiff, seekProperty } from "../src/config";

describe("This is a test for 'config.ts'", () => {
    test("test 'applyDiff' function.", () => {
        const options = {
            "a": 1,
            "b": 2,
            "c": 3
        };

        const partial = {
            "c": 4
        };

        applyDiff(options, partial);
        expect(options).toEqual({
            "a": 1,
            "b": 2,
            "c": 4
        });
    });

    test("test 'seekProperty' function.", () => {
        const options = {
            "a": 1,
            "b": {
                "b-1": 2,
                "b-2": 3,
                "b-3": {
                    "b-3-1": 4
                }
            },
            "c": 3
        };

        expect(seekProperty(options, "b", "b-3", "b-3-1")).toBe(4);
        expect(seekProperty(options, "b", "b-2")).toBe(3);
        expect(() => seekProperty(options, "c", "c-1")).toThrow(Error);
    });
});