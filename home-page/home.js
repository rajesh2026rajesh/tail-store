let image = ["../Assets/first-js.svg","../Assets/second-ts.svg","../Assets/third-php.svg","../Assets/forth-tailwind.svg","../Assets/fifth-laravel.svg","../Assets/sixth-react.svg","../Assets/seventh-image.svg"];
let index = 0;
function next() {
    index++;
    if(index >= image.length){
        index = 0;
    }
document.getElementById("brand-image").src = image[index];
}

function previous() {
    index--;
    if(index < 0){
        index = image.length -1;
    }
    document.getElementById("brand-image").src = image[index];
}