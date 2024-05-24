
const submit = document.getElementById("submit");
const formEl = document.querySelector('form');
const darkModeCheckBox = document.getElementById('dark-mode-checkbox');
const form = document.getElementById('form');


//store entries in local storage

//after submitting, redirect to blog posts page
//if anything is blank, prompt error


//have a ligh/dark mode and 'back' button
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

//WHEN I view localStorage,
//THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.

function handleFormSubmit(event) {
  event.preventDefault();
  console.log('hit');
  const username = document.querySelector("#username").value;
  const titleInput = document.querySelector("#title").value;
  const contentInput = document.querySelector("#content").value;

  // if (username === '') {
  //   displayMessage('error', 'Username cannot be blank');
  // } else if (title === '') {
  //   displayMessage('error', 'Title cannot be blank');
  // } else if (content === '') {
  //   displayMessage('error', 'Content cannot be blank')
  // } else {
  //   displayMessage('Success', 'You posted something.. cool beans')
  // }

  let postsArray = JSON.parse(localStorage.getItem('post'));
  if(!postsArray) {
    postsArray = []
  }


  const formValues = {
    username: username,
    title: titleInput,
    content: contentInput
  }
  postsArray.push(formValues)
  saveLocalStorage(postsArray)
  location.href = './blog.html'
}

function saveLocalStorage(objects) {
  // const posts = localStorage.getItem("post");
  // const obj = JSON.parse(posts);
  // console.log(obj)

  localStorage.setItem('post', JSON.stringify(objects));
}

submit.addEventListener('click', handleFormSubmit)


//postsArray.push(formValues)  OOORRRRR is it postsArray.push(posts)
//convert obj into array and then save the value in localStorage as a string with strongify. using parse to unstringify using parse
//save an array of objects


//create elements for new object with .createElement

//footer contains link to my portfolio
