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
      url:'/clothing',
      success: (data) => {
          console.log(data);
      }
  });
}



// for contact form credit to codebrainer https://www.codebrainer.com/blog/contact-form-in-javascript
let discriptionValue = Other.checked ? "employer" : "other"

//I commented this part out for now but I would like to eventually make it so that the information is actually sent to
//my email, I felt that this was to involved for now and would take me a couple hours to work out
// function getDiscription() {
//     return document.querySelector('input[name="discription"]:checked')
//    }

//    document.addEventListener("DOMContentLoaded", function() {
//     fields.firstName = document.getElementById('firstName');
//     fields.lastName = document.getElementById('lastName');
//     fields.email = document.getElementById('email');
//     fields.country = document.getElementById('state');
//     fields.question = document.getElementById('question');
//    })

//    function isNotEmpty(value) {
//     if (value == null || typeof value == 'undefined' ) return false;
//     return (value.length > 0);
//    }

//    function isNumber(num) {
//     return (num.length > 0) && !isNaN(num);
//    }

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