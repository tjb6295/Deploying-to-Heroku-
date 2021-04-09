// https://www.w3schools.com/howto/howto_js_dropdown.asp
// search bar dropdown
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

$(document).ready(function(){
  console.log("Ready!");
  makeRequest();
});

function makeRequest(){
  $.ajax({
      method:'GET',
      url:'/recipe',
      success: (data) => {
          console.log(data);
      }
  });
}



// for contact form credit to codebrainer https://www.codebrainer.com/blog/contact-form-in-javascript
   //method which initializes my variables
   class User {
    constructor(firstName, lastName, discription, state, email, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.discription = discription;
    this.state = state;
    this.email = email;
    this.question = question;
    }
   }

   function sendContact() {
       //this alert is sent after the send contact button is pushed 
        alert(firstName.value + " " + "thanks for reaching out!");

        //attempted to actually send this info to my email couldnt figure it out
        location = "mailto:thomas.j.beck23@gmail.com";
   }


 //For collapsible Objective style guide credit to w3schools 
// https://www.w3schools.com/howto/howto_js_collapsible.asp
   var coll = document.getElementsByClassName("collapsible");
   var i;
   
   for (i = 0; i < coll.length; i++) {
     coll[i].addEventListener("click", function() {
       this.classList.toggle("active");
       var content = this.nextElementSibling;
       if (content.style.display === "block") {
         content.style.display = "none";
       } else {
         content.style.display = "block";
       }
     });
   }






