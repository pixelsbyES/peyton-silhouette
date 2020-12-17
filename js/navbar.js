// NAVBAR FOR PHONES AND TABLETS

document.getElementsByClassName("first-button")[0].onclick = openNavbar;

function openNavbar() {
    document.getElementsByClassName("navbar-toggler-icon")[0].classList.toggle("open");
    //document.getElementById("navbarNavDropdown").style.backgroundColor = "rgba(218, 214, 204, 1)";
    document.getElementsByClassName("navbar")[0].classList.toggle("background");
}