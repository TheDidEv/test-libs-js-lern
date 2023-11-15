const axios = require('axios');
const mapArrToString = require('./../mapArrToString/mapArrToString');

const getData = async () => {
    try {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userId = responce.data.map(user => user.id);
        return mapArrToString(userId);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getData;