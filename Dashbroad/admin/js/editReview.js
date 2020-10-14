// rederect
function rederect(){
    window.location.href="/Dashbroad/admin/newReview.html";
  }

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