const { add } = require("./add.js");
            
test('<What th test case does>', () => {
    const fnResult = add(5, 3);
    const expectedResult = 8;
    expect(fnResult).toBe(expectedResult);
});