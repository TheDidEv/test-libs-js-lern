//function that first checks whether there are 
//numbers in the array, and then converts them into strings
const mapArrToString = (arr) => {
    return arr
        .filter(item => Number.isInteger(item))
        .map(String);
}

module.exports = mapArrToString;