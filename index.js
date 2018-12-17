const currentUser = "Grace Hopper";
const welcomeMessage = "Welcome to Flatbook,  " + currentUser + "!";
//OR `Welcome to Flatbook, ${currentUser}!`
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser[0]}!`;
//OR ${currentUser.slice(0, 1)}