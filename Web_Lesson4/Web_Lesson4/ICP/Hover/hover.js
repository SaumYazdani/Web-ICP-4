//function takes image source url, and alt text. Currently only displays alt text only. Setting image id to = alt text and image
function upDate(srcc,altt) {
    var image = document.getElementById("image");
    image.innerText=altt;
    CSS.background = srcc.src;
}
//function simply reloads the page when hovered off image
function unDo() {
    location.reload();
}
