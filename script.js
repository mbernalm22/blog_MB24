const username = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submit = document.querySelector("submit");

//store entries in local storage
const userName = document.querySelector("#userName").value;
localStorage.setItem('username', username);

  //  localStorage.setItem("username", username);
  //  localStorage.setItem("title", titleInput);
   // localStorage.setItem("conent", contentInput);

//submit.addEventListener('click', function(event))//


//after submitting, redirect to blog posts page
//if anything is blank, prompt error
if (userName === '') {
    displayMessage('error', 'Username cannot be blank');
}   else if( title === '') {
    displayMessage('error', 'Title cannot be blank');
}   else if (content === '') {
    displayMessage('error', 'Content cannot be blank')
}  // else {}???
//have a ligh/dark mode and 'back' button
//already have blogs in loca storage

//WHEN I view localStorage,
//THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.

//footer contains link to my portfolio
    
