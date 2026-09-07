let images = ["../Assets/first-js.svg","../Assets/second-ts.svg","../Assets/third-php.svg","../Assets/forth-tailwind.svg","../Assets/fifth-laravel.svg","../Assets/sixth-react.svg"];
let index = 0;
function next() {
    index++;
    if(index >=imges.length){
        index = 0;
    }
document.getElementById("right-arrow").src = image[index];
}

function previous() {
    index--;
    if(index <0){
        index = images.length -1;
    }
    document.getElementById("left-arrow").src = image[index];
}