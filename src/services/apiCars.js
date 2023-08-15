const url = new URL('https://64c50509c853c26efada6457.mockapi.io /contacts /adverts');//'https://PROJECT_TOKEN.mockapi.io/tasks');
url.searchParams.append('page', 1); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false&page=1
url.searchParams.append('limit', 8); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false&page=1&limit=10

fetch(url, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
  // mockapi returns first 10 tasks that are not completed
}).catch(error => {
  // handle error
})