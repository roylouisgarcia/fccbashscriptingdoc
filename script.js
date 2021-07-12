// coded by @ChaituVR
// eslint-disable-next-line no-unused-vars
const projectName = 'technical-docs-page';



// Get the container element
var btnContainer = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activenav");
    current[0].className = current[0].className.replace(" activenav", "");
    this.className += " activenav";
  });
} 