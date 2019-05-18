
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
});

/***********************************************************;
 *        NAV HIGHLIGHT ON SCROLL;
 ************************************************************/;
let mainNavLinks = document.querySelectorAll("nav a");
let headerNavContainer = document.querySelector(".header-nav-container");

//callback function
const scrollSpyFunction = () => {
  let fromTop = window.scrollY;
  let headerOffHeight = headerNavContainer.offsetHeight;
  console.log("the page has been scrolled")
  console.log(mainNavLinks);
  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop - headerOffHeight <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
      headerNavContainer.classList.add("bottom-shadow");
    } else {
      link.classList.remove("active");
    }
  });
}

//throttle function for smooth scrolling
const throttle = (fn, wait) => {
  let time = Date.now();
  return () => {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};
window.addEventListener("scroll", throttle(scrollSpyFunction, 1500) );
















































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
