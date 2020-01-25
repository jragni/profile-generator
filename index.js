const userData = require("./getInputData");  // NOTE: userData must be instantiated as a function in order to work properly. 
const gitPull = require("./gitCalls"); 
const generateHTML = require("./generateHTML");
const pdf = require('html-pdf');

function writeToFile(fileName, data) {
 
}

async function init() {

    // Get user name and favorite color
    const inputtedData = await userData;
    const profileName = inputtedData.userName;
    const favoriteColor = inputtedData.userColor.toLowerCase();

    // Get user info from GitHub
    const gitUserData = await gitPull(profileName); 
    
    //extract user info and generate html
    const generate =  await gitUserDataExtract(gitUserData, favoriteColor);

}


init();

async function gitUserDataExtract(u_data,color){
    const data = {};

    data.name = u_data.login;  // User name
    data.img = u_data.avatar_url; // profile image

    //links 
    data.url = u_data.html_url;  // User GitHub profile
    data.blog = u_data.blog; // User blog
    data.location = u_data.location; // User location

    // Profile stats
    data.bio = u_data.bio;
    data.repos = u_data.public_repos;
    data.followers = u_data.followers_url;
    data.stars = u_data.starred_url;
    data.following = u_data.following; 
 

    var htmlPage = await generateHTML(color,data);
    console.log(typeof htmlPage)
    var solution = await pdf.create(htmlPage, {format:'Letter'}).toFile('./test.pdf', (err,res)=>{
        if(err) return console.log(err);
    })

}
// Profile image
// User name
// Links to the following:

// User location via Google Maps
// User GitHub profile
// User blog


// User bio
// Number of public repositories
// Number of followers
// Number of GitHub stars
// Number of users following