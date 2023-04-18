const FluxDB = require('FluxDB');

// Create a new database with filename "example.json"
const db = new JSONDatabase('example.json');

// Set a value in the "users" collection with ID "1"
db.set('users', '1', { name: 'John', age: 30 });

// Get the value with ID "1" from the "users" collection
const user = db.get('users', '1');
console.log(user); // { name: 'John', age: 30 }

// Remove the value with ID "1" from the "users" collection
const removedUser = db.remove('users', '1');
console.log(removedUser); // { name: 'John', age: 30 }
