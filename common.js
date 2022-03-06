// var refToheader = document.getElementById("header");
//         var reftoimg = document.createElement("img");
//         // reftoimg.setAttribute = ("src" ,"assests\images\logo.png");

// //     refToheader.innerHTML = `<div id="header-div">
// //     <a href="index.html" target="_self"><img src="${reftoimg.src}"/>    </a>
// // </div>
// // <div style="margin-right: 2%;" >
// //     <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" >
// //         Log in
// //       </button>
// // </div>`


// img.setAttribute("src", "assests\images\logo.png");

// refToheader.innerText = '<img src="'+reftoimg.src+'" />'

var refToheader = document.getElementById("header");
    var temp = `<div id="header-div" >
    <a href="index.html" target="_self"> <img src="assests/images/logo.png" id="logo" alt="logo"  /></a>
</div>
<div style="margin-right: 2%;" >
    <button type="button" id = "submit-id" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Log in
      </button>
</div>`;
refToheader.innerHTML = temp;
var refToFooter = document.getElementById("footer");
var footerContent = `<div id="footer-div">
<section >
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#model-two">
        Contact Us
      </button>
</section>

<section >
    <span>&copy; 2020 ROOM SEARCH PVT.LTD</span>
</section>
<section id="social-meadia" >
    <a href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png" alt="facebook" /></a>
    <a href="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png"
            alt="instagram" /></a>
    <a href="https://twitter.com" target="_blank"><img src="assests/images/twitter.png" alt="twitter" /></a><br>
</section>  
</div>`;
refToFooter.innerHTML=footerContent;

var refToModal1 = document.getElementById("modal-1");
refToModal1.innerHTML=`<div class="modal fade" id="model-two" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Contact Us</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <p>Thank you for reaching out!!! <br>Please enter your email and we will get back to you.</p>
        <form >
            <label for="mail">Email:</label>
            <input type="email" name="mail" id="mail">
    </div>
    <div class="modal-footer">
      <button type="button"  class="btn btn-primary" id = "submit-button">submit</button>
    </div>
  </div>
</div>
</div>`;
var  refToModal2 = document.getElementById("modal-2");
refToModal1.innerHTML= `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">please login</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <form>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Email: </label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Password: </label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword3" required autocomplete="off">
              </div>
            </div>
            </fieldset>
            <button type="submit" id = "sign-in"  onclick = "validate()" class="btn btn-primary" style="margin-left: 45%;">Sign in</button>
          </form>
    </div>
   
  </div>
</div>
</div>`;

var refToModal1Form = document.getElementById("exampleModal")
var refToSubmitButton = document.getElementById("submit-id");
var refToEmail = document.getElementById("inputEmail3");
var refToPassword = document.getElementById("inputPassword3");
// localStorage.setItem("usename","admin");
// localStorage.setItem("word","admin");



function validate(){
    const username = refToEmail.value;
    const password = refToPassword.value
    if(username == "admin" && password == "admin"){
      alert("you have scucesfully loged in");
      document.getElementById("submit-id").innerText = "logout";
    }else{
      alert("please enter valid password");
    }
      localStorage.setItem("usename",username);
      localStorage.setItem("password",admin);
}
// function logout(){
//   let unsername = localStorage.getItem("usename");
//   let password = localStorage.getItem("password");
//   if(username == null || password == null){
//     location.reload();
//   }else{
//     document.getElementById("submit-id").innerText = "logout";
//   }
// }

// logout();
var isViewMoreIsOn = false;

// document.getElementsByClassName("image-container2").style.visibility = "hidden";
// if(isViewMoreIsOn == false){
//   document.getElementsByClassName("image-container2").style.visibility = "hidden";
// }
// function viewMore(){
//   isViewMoreIsOn = true
//   if(isViewMoreIsOn == true){
//     document.getElementsByClassName("image-container2").style.visibility = "visible";
//   }else{
//     isViewMoreIsOn = false;
//   }
// }





// var userEncoded =   localStorage.getItem("uname");
// if(userEncoded == null || userEncoded == undefined )
// {
//   window.location.href = "login.html";
// }
// else
// {
//   var userName = atob(userEncoded);
//   var refToUserNameText = document.getElementById("userNameText");
//   refToUserNameText.innerText = "Welcome " + userName;

// }

// function LogOut()
// {
//  localStorage.removeItem("uname");
//  window.location.href = "login.html";
// }
