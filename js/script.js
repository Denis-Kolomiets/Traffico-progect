// const accodionBtns = document.querySelectorAll(".question__accordion");

// accodionBtns.forEach((question__accordion) => {
//     question__accordion.onclick = function () {
//         this.classList.toggle("is-open");

//         let content = this.nextElementSibling;
//         console.log(content);

//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//             console.log(content.style.maxHeight);
//         }
//     };
// });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}