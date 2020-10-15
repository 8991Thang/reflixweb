if(user){
    async function infoUser() {
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
    infoUser();
  
    function rederect(){
      window.location.href="/Dashbroad/admin/newReview.html";
    }
}

async function renderUserPq(){
    let dbUser = await firebase.firestore().collection("users").get();
    let count = 1;
    document.querySelector('.user-data').innerHTML = '';
    for ( db of dbUser.docs){
        let admin = db.data().admin ? `Admin` : "Member";
        let confirmAD = db.data().admin ? ` <option value="1">Admin</option><option value="2">Member</option>` : `<option value="2">Member</option><option value="1">Admin</option>`
        document.querySelector('.user-data').innerHTML += /*html*/`
        <tr>
                <th scope="row">${count++}</th>
                <td>${db.data().name}</td>
                <td>${db.data().email}</td>
                <td>${db.data().address}</td>
                <td>${admin}</td>
                <td>
                  <select id=${db.id} class="custom-select selectValue">
                   ${confirmAD}
                  </select>
                </td>
              </tr>
        `
    }
    getValueSelect();
}
renderUserPq();

async function getValueSelect(){
  let selectForm = [...document.querySelectorAll(".selectValue")];
  let user = JSON.parse(localStorage.getItem("user"));
  let confirmPsw = await firebase.firestore().collection("users").where("email","==",user.email).get();
  let psw = confirmPsw.docs[0].data().password;
  selectForm.forEach(i => {
    i.addEventListener("change", async() => {
      let inputPSW = Number(prompt("Vui lòng nhập mật khẩu admin"));
      if(inputPSW != psw){
        alert("Bạn nhập sai mật khẩu admin vui lòng nhập lại"); 
        renderUserPq();
        return;
      }
      let admin = i.value == 1 ? true : false;
      await firebase.firestore().collection("users").doc(i.id).update({
        admin : admin,
      })
      .then(function (){
        renderUserPq();
      })
    })
  })
}