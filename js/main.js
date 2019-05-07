
/***********************************************
                HAMBURGER MENU
************************************************/
const navItem = document.getElementById("main-nav-content")
let menuToggle = () => {
    //class determines position of hamburger menu icon
    if (navItem.className === "main-nav") {
        navItem.className += " responsive";
      } else {
        navItem.className = "main-nav";
      }
};

navItem.addEventListener("click", () => {
    console.log("hello")
    menuToggle()
    return false;
})

/**************************************************
              MODAL POPUP WINDOW
 *************************************************/
   // Get the modal
   const modal = document.getElementById('myModal');
   const modalContentContainer = document.querySelector(".modal-content-container");

// Get the element that opens the modal
let projectCards = document.querySelectorAll(".projects__card");

//Get close span;
let closeSpan = document.querySelector(".close");

// When the user clicks on any card, a modal with that card opens
projectsCards.forEach((projectCard) => { 

  projectCard.addEventListener('click', (e) => {
      modal.style.display = "block";
      let listenerTarget = e.currentTarget
      let employeeCardElementId = listenerTarget.id;
      //remove elements
      document.querySelectorAll(".addedElement").forEach(e => {
          e.parentNode.removeChild(e)
      })
  }
  )
})
          
//console.log(employeeCardElementId);
//console.log(e.currentTarget)
