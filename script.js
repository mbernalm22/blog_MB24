
const submit = document.querySelector("submit");
const formEl = document.querySelector('form');
const darkModeCheckBox = document.getElementById('dark-mode-checkbox');


//store entries in local storage

//after submitting, redirect to blog posts page
//if anything is blank, prompt error


//have a ligh/dark mode and 'back' button
function toggleDarkMode() {
  console.log('help');
  document.body.classList.toggle('dark-mode');
}

//already have blogs in loca storage

//WHEN I view localStorage,
//THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.

//footer contains link to my portfolio
function handleFormSubmit(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const titleInput = document.querySelector("#title").value;
  const contentInput = document.querySelector("#content").value;

  if (userName === '') {
    displayMessage('error', 'Username cannot be blank');
  } else if (title === '') {
    displayMessage('error', 'Title cannot be blank');
  } else if (content === '') {
    displayMessage('error', 'Content cannot be blank')
  } else {
    displayMessage('Success', 'You posted something.. cool beans')
  }
  const formValues = {
    username: username,
    title: titleInput,
    content: contentInput
  }
  saveLocalStorage(formValues)

}


function saveLocalStorage(objects) {
  const posts = localStorage.getItem("post");
  const obj = JSON.parse(posts);
  console.log(obj)

  localStorage.setItem('post', JSON.stringify(objects));

}

//convert obj into array and then save the value in localStorage as a string with strongify. using parse to unstringify using parse
//save an array of objects
// const fragment = document.createElement();
// const postObject = fragment
//   .appendChild(document.createElement(''))
// formEl.addEventListener('submit', handleFormSubmit)

//create elements for new object with .createElement