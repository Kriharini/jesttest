const { add } = require("./add.js");
            
test('<What the test case does>', () => {
    const fnResult = add(5, 3);
    const expectedResult = 8;
    expect(fnResult).toBe(expectedResult);
});