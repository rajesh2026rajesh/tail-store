
function hideAll() {
    document.getElementById("description").style.display = "none";
    document.getElementById("Additional-info").style.display = "none";
    document.getElementById("size-info").style.display = "none";
    document.getElementById("review-info").style.display = "none";

    document.querySelectorAll(".all-heading").forEach(function(tab) {
        tab.classList.remove("active");
    });
}


function showdescription() {
    hideAll();

    document.getElementById("description").style.display = "flex";

    document.querySelectorAll(".all-heading")[0].classList.add("active");
}


function showAdditional() {
    hideAll();

    document.getElementById("Additional-info").style.display = "block";

    document.querySelectorAll(".all-heading")[1].classList.add("active");
}


function showSize() {
    hideAll();

    document.getElementById("size-info").style.display = "block";

    document.querySelectorAll(".all-heading")[2].classList.add("active");
}


function showReviews() {
    hideAll();

    document.getElementById("review-info").style.display = "block";

    document.querySelectorAll(".all-heading")[3].classList.add("active");
}


// Default: Description
showdescription();

// button increase //

//plus //
let cartcountt = 1;
function addtocartt() {
    cartcountt++;
    document.getElementById("cartcountt").textContent = cartcountt;
}
    
// mins button//


function minstocartt(){
    if (cartcountt > 1){
    cartcountt--;
    document.getElementById("cartcountt").textContent = cartcountt;
}
}