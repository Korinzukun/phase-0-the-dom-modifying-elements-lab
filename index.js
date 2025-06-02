// Remove the main element from the DOM
const main = document.getElementById('main');
main.remove();

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set the id of the new header to 'victory'
newHeader.id = 'victory';

// Set the text content to include your name
newHeader.textContent = "Collin is the champion";

// Append the new header to the document body
document.body.append(newHeader);
// Write your code here!