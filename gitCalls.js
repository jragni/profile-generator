const axios = require("axios");


async function pullUserInfo(username){

    // make call to the githubsite
    let URL = `https://api.github.com/users/${username}`;

    const gitPull = await axios.get(URL);
    const userInfo = gitPull.data;
    return userInfo;
}   


module.exports = pullUserInfo;

