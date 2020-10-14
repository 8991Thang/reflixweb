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
function rederect(){
    window.location.href="/Dashbroad/admin/newReview.html";
  }
  
}

// render data card review movie
async function renderCardMovie(){
    let db = await firebase.firestore().collection("review_moive").get();
    let collectionCard = document.querySelector(".card__collection");
    collectionCard.innerHTML = '';
    for (let doc of db.docs){
        collectionCard.innerHTML +=/*html*/`
        <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${doc.data().img}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${doc.data().name}</h5>
                      <p class="card-text">${doc.data().content}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Đạo Diễn : ${doc.data().owner}</li>
                      <li class="list-group-item">Diễn Viên : ${doc.data().cast}</li>
                      <li class="list-group-item">Ngày Đăng : ${doc.data().time}</li>
                    </ul>
                    <div class="card-body btn">
                        <button id="${doc.id}" class="btn btn-outline-danger delete"onclick="deleteCard(this)" >Xoá</button>
                        <button class="btn btn-outline-success"> Chỉnh Sửa</button>
                    </div>
                  </div>
        
        `
    }
}
renderCardMovie();

async function deleteCard(event){
  var r = confirm("Bạn có chắc chắn muốn xóa bài viết này không?!");
  let user = JSON.parse(localStorage.getItem("user"));

  if (r == true) {
    let confirmPsw = await firebase.firestore().collection("users").where("email","==",user.email).get();
    let password = prompt("Vui lòng nhập mật khẩu ADMIN của bạn !!");
    if (password == confirmPsw.docs[0].data().password){
        let db = await firebase.firestore()
            .collection("review_moive")
            .doc(event.id)
            .delete()
            .then(() => {
              alert("Bạn đã xóa bài viết thành công!! ")
            })
            .then(() => {
              renderCardMovie();
            })
            .catch(function(){
              alert("error")
            })
    }
    else{
      alert("Mật khẩu sai mời bạn nhập lại");
      return;
    }
    
  } else {
    return;
  }   
}


//  function deleteCard(){
//   let btnDelete = [...document.querySelectorAll(".btn-danger")];
// console.log(btnDelete)
//   btnDelete.forEach(item => {
//     item.addEventListener("click",() => {
//       console.log(item.id)
//     })
//   })

// }

// deleteCard();