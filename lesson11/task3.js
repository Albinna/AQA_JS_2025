async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const todo = await response.json();
  return todo;
}

async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await response.json();
  return user;
}

async function fetchAll() {
  try {
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    console.log('Promise.all result');
    console.log(todo);
    console.log(user);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchAll();

async function fetchRace() {
  try {
    const result = await Promise.race([fetchTodo(), fetchUser()]);
    console.log('Promise.race result');
    console.log(result);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchRace();