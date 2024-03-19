//create button
var post = document.querySelector(".post-popup");

// Get the button that opens the modal
var create = document.getElementById("create-post");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close-post")[0];

// When the user clicks on the button, open the modal
// function openPop() {
//   modal.style.visibility = "visible";
// }
create.addEventListener('click',()=>{
  document.querySelector('.active')?.classList.remove('.active');
  post.classList.add('active');
});

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  post.classList.remove('active');
}