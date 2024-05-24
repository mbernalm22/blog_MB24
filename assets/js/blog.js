const blogContainer = document.getElementById('blog-container');

let postsArray = JSON.parse(localStorage.getItem('post'));
  if(!postsArray) {
    postsArray = []
  } 

 

for(let i = 0; i<postsArray.length; i++){
    blogContainer.innerHTML += `<div>
 <p>${postsArray[i].username}</p>
 <p>${postsArray[i].title}</p>
 <p>${postsArray[i].content}</p>
</div>`
}

//go to week 3 practice
//understand datatypes