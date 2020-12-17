// window.addEventListener('scroll', function () {
//     let header = document.getElementsByClassName('navbar')[0];

//     let windowPosition = window.scrollX > 0;
//     header.classList.toggle('fixed-top', windowPosition);


//     //header.classList.toggle('navbar', windowPosition);
// });


// document.getElementsByClassName("trigger").onclick = revealFilter;

// function revealFilter() {
//     alert('i clicked');
//     document.getElementsByClassName("filters")[0].classList.toggle("left");
// }


// TO CHANGE THE PRODUCTS ON DISPLAY WITH PAGINATON

var product_pages = document.getElementsByClassName("product_page");
var page_buttons = document.getElementsByClassName("page-item");

for (let a = 0; a < page_buttons.length; a++) {
    page_buttons[a].onclick = displayPage;


    function displayPage() {

        var current_page = a - 1;
        var page_on_display = window.getComputedStyle(product_pages[current_page], null).getPropertyValue("display");

        if ((page_on_display === "flex") && (a === 0)) {
            product_pages[current_page - 1].style.display = "flex";
        }

        for (let x = 0; x < product_pages.length; x++) {
            if ((x !== current_page) && (current_page !== -1) && (current_page !== 5)) {
                product_pages[x].style.display = "none";
            } else {
                product_pages[current_page].style.display = "flex";
            }

        }


    }

}

// TO MAKE THE FILTERS RESPONSIVE

if (window.innerWidth <= 500) {
    document.getElementsByClassName("filters")[0].classList.toggle("sidenav");
    document.getElementById("flip").style.display = "block";
}

// $(document).ready(function () {
//     $("#flip").click(function () {
//         $("#panel").slideToggle("slow");
//     });
// });


// $("#flip").click(function () {
//     $("#panel").animate({
//         display: "inline-block",
//         left: '0'
//     });
// });


$("#flip").click(function () {
    $("#panel").toggleClass("filter-left");
    $("#flip").toggleClass("filter-button-left");
    if (($(".filter-button-arrow").attr("src")) === "images/SVG/right-arrow.svg") {
        $(".filter-button-arrow").attr("src", 'images/SVG/left-arrow.svg');
    } else {
        $(".filter-button-arrow").attr("src", 'images/SVG/right-arrow.svg');
    }

});