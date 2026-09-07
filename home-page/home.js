let image = ["../Assets/first-js.svg","../Assets/second-ts.svg","../Assets/third-php.svg","../Assets/forth-tailwind.svg","../Assets/fifth-laravel.svg","../Assets/sixth-react.svg"];
let index = 0;
let brandImages = document.querySelectorAll(".brand-small-image img");

function showImage() {
    brandImages.forEach(function(img) {
        img.style.display = "none";
    });

    brandImages[index].style.display = "block";
}

function next() {
    index++;
    if(index >=image.length){
        index = 0;
    }
document.getElementById("right-arrow").src = image[index];
}

function previous() {
    index--;
    if(index <0){
        index = image.length -1;
    }
    document.getElementById("left-arrow").src = image[index];
}