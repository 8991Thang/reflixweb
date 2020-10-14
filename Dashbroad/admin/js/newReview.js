let user = JSON.parse(localStorage.getItem("user"));
if(user){
  let profile = document.querySelector(".profile-pic");
profile.innerHTML = /*html*/ `
  <div class="count-indicator">
                <img class="img-xs rounded-circle " src="${user.avatar}" alt="">
                <span class="count bg-success"></span>
              </div>
              <div class="profile-name">
                <h5 class="mb-0 font-weight-normal">${user.name}</h5>
                <span>ADMIN</span>
  </div>`;
let profileDropdown = document.querySelector("#profileDropdown");
profileDropdown.innerHTML = /*html */ `
  <div class="navbar-profile">
                  <img class="img-xs rounded-circle" src="${user.avatar}" alt="">
                  <p class="mb-0 d-none d-sm-block navbar-profile-name">${user.name}</p>
                  <i class="mdi mdi-menu-down d-none d-sm-block"></i>
  </div>
  `;
}

// đăng bài review mới
let formSumit = document.querySelector(".form-review");
let name = document.querySelector("#name");
let content = document.querySelector("#content");
let cast = document.querySelector("#cast");
let owner = document.querySelector("#onwer");
let make = document.querySelector("#make");
let des1 = document.querySelector("#des1");
let des2 = document.querySelector("#des2");
let des3 = document.querySelector("#des3");
let time = document.querySelector("#time");
let trailer = document.querySelector("#trailer");

// function encodeImageFileAsURL1(element) {
//     var file = element.files[0];
//     var reader = new FileReader();
//     reader.onloadend = function() {
//       console.log(reader.result)
//     }
//     reader.readAsDataURL(file);
// }

// get data img convert base64 url
function previewFile() {
  const file = document.querySelector("#img").files[0];
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      document.querySelector('.img').style.maxWidth = "800px";
      document.querySelector('.img').style.maxHeight = "400px";
      document.querySelector('.img').src = reader.result;
      localStorage.setItem("img", reader.result);
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
function previewFileBackGround() {
  const file = document.querySelector("#background").files[0];
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      document.querySelector('.background').style.maxWidth = "800px";
      document.querySelector('.background').style.maxHeight = "400px";
      document.querySelector('.background').src = reader.result;
      localStorage.setItem("imgblur", reader.result);
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
function previewFile1() {
  const file = document.querySelector("#img1").files[0];
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      document.querySelector('.img1').style.maxWidth = "800px";
      document.querySelector('.img1').style.maxHeight = "400px";
      document.querySelector('.img1').src = reader.result;
      localStorage.setItem("img1", reader.result);
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
function previewFile2() {
  const file = document.querySelector("#img2").files[0];
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      document.querySelector('.img2').style.maxWidth = "800px";
      document.querySelector('.img2').style.maxHeight = "400px";
      document.querySelector('.img2').src = reader.result;
      localStorage.setItem("img2", reader.result);
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
function previewFile3() {
  const file = document.querySelector("#img3").files[0];
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    function () {
      document.querySelector('.img3').style.maxWidth = "800px";
      document.querySelector('.img3').style.maxHeight = "400px";
      document.querySelector('.img3').src = reader.result;
      localStorage.setItem("img3", reader.result);
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

function newReview() {
  formSumit.onsubmit = async function (e) {
    e.preventDefault();
    let dataReview = {
      name: name.value,
      time: time.value,
      content: content.value,
      cast: cast.value,
      make: make.value,
      des1: des1.value,
      des2: des2.value,
      des3: des3.value,
      trailer: trailer.value,
      owner: owner.value,
      img: localStorage.getItem("img"),
      img1: localStorage.getItem("img1"),
      img2: localStorage.getItem("img2"),
      img3: localStorage.getItem("img3"),
      imgblur: localStorage.getItem("imgblur"),
      by:JSON.parse(localStorage.getItem("user")).name,
      commentTotal : [],
    };
    if(!dataReview.name || !dataReview.time || !dataReview.content || !dataReview.cast || !dataReview.des1 || !dataReview.des2 || !dataReview.des3 || !dataReview.trailer
      || !dataReview.img || !dataReview.img1 || !dataReview.img2 || !dataReview.img3 || !dataReview.imgblur || !dataReview.owner || !dataReview.make){
        alert("VUI LÒNG ĐIỀN ĐẦY ĐỦ THÔNG TIN TRƯỚC KHI ĐANG BÀI");
        return;
      }
    let dbfirebase = await firebase.firestore().collection("review_moive");
      dbfirebase.add(dataReview)
      .then(function(){
        localStorage.setItem("idReview",dataReview.name);
        alert("Đăng Bài Thành Công!! ");
        window.location.href = "/review.html"  
      })
      .catch(function(){
        console.log(error);
      })
      
  };
}

newReview();
