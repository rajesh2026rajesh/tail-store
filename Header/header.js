 
 //register button//

        function openModel() {
            document.getElementById("my-form").style.display = "flex";
        }
        function closeModel() {
            document.getElementById("my-form").style.display = "none";
        }

        //login-button//

         function loginopenModel() {
            document.getElementById("login-page").style.display="flex";
        }
        function logincloseModel() {
            document.getElementById("login-page").style.display="none"; 
        }


        //register button thank uu show//


        function regSubmit(event) {
            event.preventDefault();

            document.querySelector(".information-user").style.display = "none";
            document.getElementById("ThankYou").style.display = "block";
        }


        //login button thank uu show//

      function loginSubmit(event) {
     event.preventDefault();

    document.querySelector(".login-form").style.display = "none";
    document.getElementById("thankYou").style.display = "block";
}
    //search button//

function opensearch() {
    document.getElementById("search-Input").classList.toggle("show");
}

    //cart count//
    
    let cartcount = 0;
    function addtocart() {
        cartcount++;
         document.getElementById("cartcount").textContent = cartcount;
    }
