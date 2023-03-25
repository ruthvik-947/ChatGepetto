// Send a POST request to the Python script
// TODO: setup Python server, figure out params 
fetch('http://localhost:5000/mypythonscript', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    parameter1: 'hello',
    parameter2: 'world'
  })
}).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
});