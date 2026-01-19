function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json());
}

function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json());
}


const allPromise = Promise.all([
  fetchTodo(),
  fetchUser()
]);

allPromise
  .then(([todo, user]) => {
    console.log('Promise.all result');
    console.log(todo);
    console.log(user);
  })
  .catch(error => {
    console.log('Error:', error);
  });

  const racePromise = Promise.race([
  fetchTodo(),
  fetchUser()
]);

racePromise
  .then(result => {
    console.log('Promise.race result');
    console.log(result);
  })
  .catch(error => {
    console.log('Error:', error);
  });