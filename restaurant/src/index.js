import { initializeHome } from './Home';
import { initializeAbout } from './About';
import { initializeMenu } from './Menu';

// Call the function to initialize the page

function home() {
    initializeHome();

}
function menu() {
    initializeMenu();

}
function about() {
    initializeAbout();

}

// Logging to verify webpack setup
console.log("Webpack is working!");