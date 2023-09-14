// Get the header element
const header = document.querySelector(".header");
const menubar = document.querySelector(".menu-bar");


// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
  // Check if scrolled more than 50 pixels from the top
  if (window.scrollY > 100) {
    // Set the header background color to white
    header.style.backgroundColor = "white";

     // Set the header font color to black
    menubar.style.color = "black";

  } else {
    // Set the header background color back to transparent
    header.style.backgroundColor = "transparent";

  }
});


// when click on registration two buttons are show
document.querySelector(".button").addEventListener("click", function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  // Show the "Student Login" and "Mentor Login" buttons
  document.getElementById("student_login").classList.add("show-button1");
  document.getElementById("mentor_login").classList.add("show-button2");
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
      modal.style.display = "none";
  }
});







