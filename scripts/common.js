// Get the modal
var modal = document.querySelector(".popup-signup");

// Get the button that opens the modal
var btn = document.querySelector(".sign-up-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-signup")[0];

// When the user clicks on the button, open the modal
// function openPop() {
//   modal.style.visibility = "visible";
// }
btn.addEventListener('click',()=>{
  document.querySelector('.active')?.classList.remove('.active');
  modal.classList.add('active');
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove('active');
}
// ----------------------------------------------
//Sign in button functionality:
var modal1 = document.querySelector(".popup-signin");

// Get the button that opens the modal
var btn1 = document.querySelector(".sign-in-btn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close-signin")[0];

btn1.addEventListener('click',()=>{
  document.querySelector('.active')?.classList.remove('.active');
  modal1.classList.add('active');
});

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.classList.remove('active');
}

//sign up link
var link = document.querySelector(".sign-up-link");

link.addEventListener('click',()=>{
  // document.querySelector('.active')?.classList.remove('.active');
  modal1.classList.remove('active');
  modal.classList.add('active');
});

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