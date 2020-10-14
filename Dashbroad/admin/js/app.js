// profile info
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
// ONLINE USER

async function renderMovie(){
  let previewList = document.querySelector("#list");

  let respon = await firebase.firestore().collection("data_movie").get();
  // console.log(respon.docs[0].data())
        previewList.innerHTML = /*html */ `
                            <div class="preview-item border-bottom">
                            <div class="preview-thumbnail">
                              <div class="preview-icon bg-primary">
                                <i class="mdi mdi-file-document"></i>
                              </div>
                            </div>
                            <div class="preview-item-content d-sm-flex flex-grow">
                              <div class="flex-grow">
                                <h6 class="preview-subject">${respon.docs[0].data().name}</h6>
                                <p class="text-muted mb-0">${respon.docs[0].data().directors}</p>
                              </div>
                              <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                                <p class="text-muted">${respon.docs[0].data().date}</p>
                                <p class="text-muted mb-0">${respon.docs[0].data().type}</p>
                              </div>
                              </div>
                              </div>
                              <div class="preview-item border-bottom">
                            <div class="preview-thumbnail">
                              <div class="preview-icon bg-primary">
                                <i class="mdi mdi-file-document"></i>
                              </div>
                            </div>
                            <div class="preview-item-content d-sm-flex flex-grow">
                              <div class="flex-grow">
                                <h6 class="preview-subject">${respon.docs[1].data().name}</h6>
                                <p class="text-muted mb-0">${respon.docs[1].data().directors}</p>
                              </div>
                              <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                                <p class="text-muted">${respon.docs[1].data().date}</p>
                                <p class="text-muted mb-0">${respon.docs[1].data().type}</p>
                              </div>
                              </div>
                              </div><div class="preview-item border-bottom">
                              <div class="preview-thumbnail">
                                <div class="preview-icon bg-primary">
                                  <i class="mdi mdi-file-document"></i>
                                </div>
                              </div>
                              <div class="preview-item-content d-sm-flex flex-grow">
                                <div class="flex-grow">
                                  <h6 class="preview-subject">${respon.docs[2].data().name}</h6>
                                  <p class="text-muted mb-0">${respon.docs[2].data().directors}</p>
                                </div>
                                <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                                  <p class="text-muted">${respon.docs[2].data().date}</p>
                                  <p class="text-muted mb-0">${respon.docs[2].data().type}</p>
                                </div>
                                </div>
                                </div><div class="preview-item border-bottom">
                                <div class="preview-thumbnail">
                                  <div class="preview-icon bg-primary">
                                    <i class="mdi mdi-file-document"></i>
                                  </div>
                                </div>
                                <div class="preview-item-content d-sm-flex flex-grow">
                                  <div class="flex-grow">
                                    <h6 class="preview-subject">${respon.docs[3].data().name}</h6>
                                    <p class="text-muted mb-0">${respon.docs[3].data().directors}</p>
                                  </div>
                                  <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                                    <p class="text-muted">${respon.docs[3].data().date}</p>
                                    <p class="text-muted mb-0">${respon.docs[3].data().type}</p>
                                  </div>
                                  </div>
                                  </div><div class="preview-item border-bottom">
                                  <div class="preview-thumbnail">
                                    <div class="preview-icon bg-primary">
                                      <i class="mdi mdi-file-document"></i>
                                    </div>
                                  </div>
                                  <div class="preview-item-content d-sm-flex flex-grow">
                                    <div class="flex-grow">
                                      <h6 class="preview-subject">${respon.docs[4].data().name}</h6>
                                      <p class="text-muted mb-0">${respon.docs[4].data().directors}</p>
                                    </div>
                                    <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                                      <p class="text-muted">${respon.docs[4].data().date}</p>
                                      <p class="text-muted mb-0">${respon.docs[4].data().type}</p>
                                    </div>
                                    </div>
                                    </div><div class="preview-item border-bottom">
                                    <div class="preview-thumbnail">
                                      <div class="preview-icon bg-primary">
                                        <i class="mdi mdi-file-document"></i>
                                      </div>
                                    </div>
                                    <div class="preview-item-content d-sm-flex flex-grow">
                                      <div class="flex-grow">
                                        <h6 class="preview-subject">${respon.docs[5].data().name}</h6>
                                        <p class="text-muted mb-0">${respon.docs[5].data().directors}</p>
                                      </div>
                                      <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                                        <p class="text-muted">${respon.docs[5].data().date}</p>
                                        <p class="text-muted mb-0">${respon.docs[5].data().type}</p>
                                      </div>
                                      </div>
                                      </div>
        `;
}
renderMovie();
        // rederect 