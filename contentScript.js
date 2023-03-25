import Readability from 'https://unpkg.com/@mozilla/readability@0.7.1/Readability.js';

document.addEventListener('DOMContentLoaded', function() {
  // Create a new Readability object with the current document object
  const article = new Readability(document).parse();

  // Print the main article content to the console
  console.log(article.content);

  fetch('http://localhost:81/api/read', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: article.content
    })
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
});