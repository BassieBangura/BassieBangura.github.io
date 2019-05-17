
/***********************************************
                HAMBURGER MENU
************************************************/
const navItem = document.getElementById("main-nav-content");
const hamburgerIcon = document.getElementById("hamburger-icon");
let menuToggle = () => {
    //class determines position of hamburger menu icon
    if (navItem.className === "main-nav") {
        navItem.className += " responsive";
      } else {
        navItem.className = "main-nav";
      }
};

hamburgerIcon.addEventListener("click", () => {
    console.log("hello")
    menuToggle()
    return false;
})

/***********************************************************
 *        NAV HIGHLIGHT ON SCROLL
 ************************************************************/
let mainNavLinks = document.querySelectorAll("nav a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  console.log("the page has been scrolled")
  console.log(mainNavLinks);
  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
















































/**************************************************
              MODAL POPUP WINDOW
*************************************************
// Get the modal
const modal = document.getElementById('myModal');
const modalContentContainer = document.querySelector(".modal-content-container");

// Get the element that opens the modal
let projectCards = document.querySelectorAll(".projects__card");

//Get close span;
let closeSpan = document.querySelector(".close");

// When the user clicks on any card, a modal with that card opens
projectCards.forEach((projectCard) => { 

  projectCard.addEventListener('click', (e) => {
      modal.style.display = "block";
      let listenerTarget = e.currentTarget.innerHTML;
      console.log(e.currentTarget.innerHTML);

      //create Article element
      let articleAddedToModal = document.createElement("article");
      articleAddedToModal.setAttribute("class", "addedItem")
      articleAddedToModal.innerHTML = listenerTarget;

      //remove any prior elements in modal
      document.querySelectorAll(".addedItem").forEach(e => {
        e.parentNode.removeChild(e)
    })
      console.log(articleAddedToModal)
      modalContentContainer.appendChild(articleAddedToModal)
      
      
  }
  )
})

 // When the user clicks on <span> (x), close the modal
let modalCloser = document.querySelector(".close");
modalCloser.addEventListener('click', () => {
          modal.style.display = "none";
          }) 

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }
          
//console.log(employeeCardElementId);
//console.log(e.currentTarget) **/
