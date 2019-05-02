const navItem = document.getElementById("main-nav-content")

let menuToggle = () => {
    const navItem = document.getElementById("main-nav-content")
    if (navItem.className === "main-nav") {
        navItem.className += " responsive";
      } else {
        navItem.className = "main-nav";
      }
}

//menuToggle.addEventListener("click", menuToggle(navItem))
