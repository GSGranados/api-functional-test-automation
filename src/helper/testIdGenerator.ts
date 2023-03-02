/**
 * @function generateId It creates the ID format To track all API Test cases
 * @param {String} testId The Test ID you want to add the format (initial values i.e. CV-CORE)
 * @param {Int} increment The actual increment of value to be concat to the TestID
 * @returns Test ID generated
 */
const generateId = (testId: string, increment: number) => {
    testId = `${testId}-${increment >= 10 ? (increment >= 100) ? increment : '0' + increment : '00' + increment}`
    return testId;
}

export default generateId;