// first quantity button section //

let cartcount = 1;

function  minustocart() {
    if (cartcount > 1) {
    cartcount--;
    document.getElementById("cartcount").textContent = cartcount;
}
}

function addtocart() {
    cartcount++;
        document.getElementById("cartcount").textContent = cartcount;
} 

// second quantity btn //

let cartcountt = 1;

function minustocartt() {
if (cartcountt > 1) {
     cartcountt--;
    document.getElementById("cartcountt").textContent = cartcountt;
}
}

function addtocartt() {
    cartcountt++;
    document.getElementById("cartcountt").textContent = cartcountt;
}
