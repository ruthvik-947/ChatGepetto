/*import { Readability } from 'https://unpkg.com/@mozilla/readability@0.7.1/Readability.js';*/

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.text) {
// Create a new Readability object with the current document object
console.log("Content script running");
const article = document.body.innerHTML;
//new Readability(document).parse();

// Print the main article content to the console
console.log(article);

fetch('http://localhost:5000/api/read', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content: article
  })
}).then(function(response) {
  console.log(response.body);
  return response.json();
}).then(function(data) {
  console.log(data);
});
//   }
// });