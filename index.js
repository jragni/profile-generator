const userData = require("./getInputData");  // NOTE: userData must be instantiated as a function in order to work properly. 
const gitPull = require("./gitCalls"); 
const htmlGenerator = require("./generateHTML");

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
    gitUserDataExtract(gitUserData,favoriteColor);

}


init();

function gitUserDataExtract(u_data,color){
    const userName = u_data.login;  // User name
    const userProfileImage = u_data.avatar_url; // profile image

    //links 
    const profileURL = u_data.html_url;  // User GitHub profile
    const userBlog = u_data.blog; // User blog
    const userLocation = u_data.location; // User location

    // Profile stats
    const userBio = u_data.bio;
    const userPublicRepo = u_data.public_repos;
    const userFollowers = u_data.followers_url;
    const userGitHubStars = u_data.starred_url;
    const userFollowing = u_data.following;
    var htmlPage = htmlGenerator(color);

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