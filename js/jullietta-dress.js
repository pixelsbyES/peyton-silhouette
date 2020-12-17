var thumbnails = document.getElementsByClassName("product-thumbnail");
var product_images = document.getElementsByClassName("carousel-image");

for (let x = 0; x < thumbnails.length; x++) {
    for (let a = 0; a < product_images.length; a++) {
        var background_image = product_images[a].src;
        if (x === a) {
            thumbnails[a].style.cssText += `background-image:url(${background_image})`;
        }

    }


}

var element1 = document.getElementsByClassName("add-to-cart-button")[0].children[0].children[0];

function hover() {
    // element1.src = "images/SVG/add-to-cart-black.svg"
    element1.setAttribute('src', 'images/SVG/add-to-cart-black.svg');
}

function unhover() {
    element1.setAttribute('src', 'images/SVG/add-to-cart.svg');
}