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
let dbDataUser = [];
async function renderUser (deleteUser){
    let db = await firebase.firestore().collection("users").get();
    document.querySelector('.container__total').innerHTML = '';
    for ( let doc of db.docs){
        let status = await firebase.firestore().collection("status").where("user","==",doc.data().email).get();
        let statusUser = status.empty ?  '<p class="btn btn-danger">Không Truy Cập</p>'   : '<p class="btn btn-primary">Đang Truy Cập</p>'
        document.querySelector('.container__total').innerHTML += /*html*/`
        <div class="card" style="width: 18rem;">
            <img src="${doc.data().avatar}" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="change">
                <h3 class="card-title">Name : <b>${doc.data().name}</b></h3>
                <p class="card-title">Emaill : ${doc.data().email}</p>
                <p class="card-title">Địa chỉ : ${doc.data().address}</p>
                </div>
                <div class="w-100 d-flex justify-content-center">
                    ${statusUser}
                </div>
                <div class="d-flex justify-content-around">
                    <button id="${doc.data().email}" class="btn delete btn-outline-danger">Xóa</button>
                    <button name="${doc.data().email}" id="${doc.id}" onclick="edit(this)" class="btn btn-outline-success edit">Chỉnh sửa</button>
                </div>
            </div>
        </div>
        `
        dbDataUser.push({email : doc.data().email, password : doc.data().password, id:doc.id});
    }
    if(document.querySelectorAll(".delete")){
        deleteUser();
    }
}
renderUser(deleteUser);
async function deleteUser(){
    let adminUser = JSON.parse(localStorage.getItem("user"));
    let passwordAdmin = [];
   if(adminUser){
    let psw = await firebase.firestore().collection("users").where("email","==",adminUser.email).get();
    let btn = [...document.querySelectorAll(".delete")];
    btn.forEach(item => {
        item.addEventListener("click",async () => {
            let inputPassword = prompt("Vui lòng nhập mật khẩu ADMIN của bạn !!")
           let email = dbDataUser.filter(y => y.email == item.id);
           if (inputPassword !== psw.docs[0].data().password) {
                alert("Mật khẩu sai , xin bạn vui lòng nhập lại mật khẩu !!");
                return;
           }
           if (inputPassword == psw.docs[0].data().password) {
               await firebase.firestore().collection("users").doc(email[0].id).delete();
               alert(" Bạn đã xóa user thành công !! ");
               renderUser();
           }
           
        })
    })
   }
}

function edit(e){
    e.parentNode.parentNode.innerHTML = /*html*/`
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="input name..." >
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="input email...">
                </div>
                <div class="form-group">
                    <label for="address">Địa chỉ</label>
                    <input type="text" class="form-control" id="address" placeholder="input address...">
                </div>
                <div class="d-flex justify-content-around">
                    <button class="btn  btn-outline-danger" onclick="cancel(this)">Hủy</button>
                    <button name="${e.attributes.name.value}" id= "${e.id}" class="btn btn-outline-success" onclick="update(this)">Cập Nhật</button>
                </div>
    `
}

function cancel(e){
    renderUser();
}

async function update(e){
    data = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        address : document.getElementById("address").value,
    }
    await firebase.firestore().collection("users").doc(e.id).update(data)
    .then(function(){
        renderUser();
    })
//     // console.log(e.id)
//     let cmt = [];
// async function ex(){
//     // let euser = "thangpham982708@gmail.com";
//     // let email = await firebase.firestore().collection("review_moive").get();
//     // email.docs.forEach(item => cmt.push({comment:item.data().commentTotal,id:item.id}))
//     // cmt.forEach(items => {
//     //     for (let i in items.comment) {
//     //         if(items.comment[i].email == e.attributes.name.value){
//     //             console.log(i)
//     //             console.log(items)
//     //         }
//     //     }
//     // })
//     let newData = {
//         commentTotal: [{
//             name: "hung"
//         }]
//         // commentTotal: firebase.firestore.FieldValue.arrayUnion({
//         //     name : "thang"
//         // }),
//     }
//     let email = await firebase.firestore().collection("review_moive").doc("ISRgouH7KoEYH2tmFqhE").update(newData);

// }
//   ex();
}
function rederect(){
    window.location.href="/Dashbroad/admin/newReview.html";
  }



  