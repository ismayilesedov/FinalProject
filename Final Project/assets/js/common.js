
  console.log("salam");
    //hamburger-menu
    let hamburgerIcon = document.querySelector(".hamburger-icon i");
    let hamburgerMenuList = document.querySelector(".hamburger-menu-list .nav-menu")

    hamburgerIcon.addEventListener("click", function () {
        hamburgerMenuList.classList.toggle("close")

    })

    //responsive navbar
    let userIcon = document.querySelector(".right-icons .icons i");
    let logReg = document.querySelector(".right-icons .icons .log-reg")

    userIcon.addEventListener("click", function (e) {
        e.preventDefault();
        logReg.classList.toggle("d-none");
    })
