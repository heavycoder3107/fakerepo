

const btn = document.querySelector(".button1");
const section = document.querySelector("#data");
const data = document.querySelector(".hidden-data")

btn.addEventListener("click", function() {
    data.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  section.style.display = "block";
});




// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  