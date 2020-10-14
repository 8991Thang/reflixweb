// khai bao init
const dataMovie = firebase.firestore().collection("data_movie");
const dataReview = firebase.firestore().collection("review_moive");
//

const sliceMoive = document.querySelector(".center__movie-top");


/*
@param {render slice}
*/
async function renderSlice(){
    let respon = await dataMovie.get();
    for ( let data of respon.docs){
        sliceMoive.innerHTML += /*html*/`
                    <div class="movie__items">
                        <div class="movie__items-poster">
                            <a href=""> <img class="img-poster" src="${data.data().img}" alt="poster"></a>
                            <div class="movie__items-poster-info">
                                <a id="${data.data().name}" class="click">Chi tiết</a>
                                <a target="_blank" href="${data.data().trailer}">Trailer</a>
                                <p><b>Thời lượng</b> : ${data.data().time}</p>
                                <p><b>Thể Loại</b> : ${data.data().type}</p>
                            </div>
                        </div>
                        <div class="movie__items-detail">
                            <h2><p style="font-size:24px" class="name__movie">${data.data().name}</p></h2>
                            <p><b>Thời lượng</b> : ${data.data().time}</p>
                            <p><b>Ngày Khởi Chiếu</b> : ${data.data().date}</p>
                        </div>
                    </div>
        `
    }
    let nameMovie = [...document.querySelectorAll(".name__movie")];
    nameMovie.forEach(i => {
        i.addEventListener("click",() => {
            localStorage.setItem("idMovie", i.innerText);
            window.location.href = "/moviePage.html"
        })
    })
    let idNew = [...document.querySelectorAll(".click")];
    idNew.forEach(i => {
        i.addEventListener("click",() => {
            localStorage.setItem("idMovie", i.id);
            window.location.href = "/moviePage.html"
        })
    })
}
renderSlice();





const  reviewMovie = document.querySelector(".review_movie");
/**
 * @param render Review
 */
async function renderReview(){
    let respon = await dataReview.get();
    // tao random number
    let dataArr = [];
    for ( let data of respon.docs){
        dataArr.push(data.data());
    }
    let randomNumber = Array.from(Array(dataArr.length).keys());
    //random function
    function shuffle(array) {
        var currentIndex = array.length,
          temporaryValue,
          randomIndex;
  
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
  
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
  
        return array;
      }
    let random = [...shuffle(randomNumber)];
    reviewMovie.innerHTML = /*html*/`
    <div class="news__img">
    <div class="news__img-center position-relative" >
        <div class="img__center ">
            <img src="${dataArr[random[0]].img}" alt="joker">
        </div>
        <div class="img__info position-absolute d-flex flex-column justify-content-around pl-4">
            <p class="review">Review</p>
            <a href="/review.html" class="img__title">
                <span class="name__review">${dataArr[random[0]].name} </span>
            </a>
            <div class="img__time w-50 d-flex flex-row justify-content-between">
                <span>by<b> : ${dataArr[random[0]].by} / </b></span>
                <span><i class="far fa-clock"></i> ${dataArr[random[0]].time}</span>
                <span>/ <i class="far fa-comment-dots"></i> ${dataArr[random[0]].commentTotal.length}</span>
            </div>
        </div>
        <div class="blur w-100 position-absolute"></div>
    </div>
    <div class="news__img-footer d-flex">
        <div class="news__img-footer-total">
            <div class="hv" ><img src="${dataArr[random[1]].img}" alt="" ></div>
            <span class="review">Review</span>
            <a href="/review.html" class="name__review">${dataArr[random[1]].name}</a>

            <div class="news__img-footer-time">
                <span><i class="far fa-clock"></i> ${dataArr[random[1]].time}</span>
                <span>/ <i class="far fa-comment-dots"></i> ${dataArr[random[1]].commentTotal.length}</span>
            </div>
        </div>
        <div class="news__img-footer-total">
            <div  class="hv"><img src="${dataArr[random[8]].img}" alt="" ></div>
            <span class="review">Review</span>
            <a href="/review.html" class="name__review">${dataArr[random[8]].name}</a>

            <div class="news__img-footer-time">
                <span><i class="far fa-clock"></i> ${dataArr[random[8]].time}</span>
                <span>/ <i class="far fa-comment-dots"></i> ${dataArr[random[8]].commentTotal.length}</span>
            </div>
        </div>
        <div class="news__img-footer-total">
            <div  class="hv"><img src="${dataArr[random[6]].img}" alt="" ></div>
            <span class="review">Review</span>
            <a href="/review.html" class="name__review">${dataArr[random[6]].name}</a>
            <div class="news__img-footer-time">
                <span><i class="far fa-clock"></i> ${dataArr[random[6]].time}</span>
                <span>/ <i class="far fa-comment-dots"></i> ${dataArr[random[6]].commentTotal.length}</span>
            </div>
        </div>
        
    </div>
</div>
    `
}
renderReview();
function getDataLocal(){
    reviewMovie.addEventListener("click",(e) => {
        localStorage.setItem("idReview", e.target.innerText);
    })
}
getDataLocal();

let renderLeft = document.querySelector(".news__movie")
async function renderLeftReview(){
    let respon = await dataMovie.get();
    let dataLeft = [];
    for ( let data of respon.docs){
        dataLeft.push(data.data());
    }
    let dataRandow = Array.from(Array(dataLeft.length).keys());
    function shuffle(array) {
        var currentIndex = array.length,
          temporaryValue,
          randomIndex;
  
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
  
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
  
        return array;
      }
    let random = [...shuffle(dataRandow)];
    renderLeft.innerHTML = /*html*/ `
    <div class="news__moive-title">
                            <p>News Movie ToDay</p>
                        </div>
                        <div class="news__moive-title d-flex justify-content-between wow fadeInRightBig" data-wow-duration="0.5s" data-wow-offset="250">
                            <div class="news__moive-img">
                                <img src="${dataLeft[random[2]].img}" alt="">
                            </div>
                            <div class="news_movie-img-title ">
                                <div><p class="title">${dataLeft[random[2]].name}</p></div>
                                <div><p class="time pt-2"><i class="far fa-clock"></i>  ${dataLeft[random[2]].date}</p></div>
                            </div>
                        </div>
                        <div class="news__moive-title d-flex justify-content-between wow fadeInRightBig " data-wow-duration="0.8s" data-wow-offset="200">
                            <div class="news__moive-img">
                                <img src="${dataLeft[random[3]].img}" alt="">
                            </div>
                            <div class="news_movie-img-title ">
                                <div><p  class="title">${dataLeft[random[3]].name}</p></div>
                                <div><p class="time pt-2"> <i class="far fa-clock"></i> ${dataLeft[random[3]].date}</p></div>
                            </div>
                        </div>
                        <div class="news__moive-title d-flex justify-content-between wow fadeInRightBig" data-wow-duration="1.1s" data-wow-offset="150">
                            <div class="news__moive-img">
                                <img src="${dataLeft[random[5]].img}" alt="">
                            </div>
                            <div class="news_movie-img-title ">
                                <div><p  class="title">${dataLeft[random[5]].name}</p></div>
                                <div><p class="time pt-2"><i class="far fa-clock"></i> ${dataLeft[random[5]].date}</p></div>
                            </div>
                        </div>
                        <div class="news__moive-title d-flex justify-content-between wow fadeInRightBig" data-wow-duration="1.4s" data-wow-offset="50">
                            <div class="news__moive-img">
                                <img src="${dataLeft[random[8]].img}" alt="">
                            </div>
                            <div class="news_movie-img-title ">
                                <div><p  class="title">${dataLeft[random[8]].name}</p></div>
                                <div><p class="time pt-2"><i class="far fa-clock"></i> ${dataLeft[random[8]].date}</p></div>
                            </div>
                        </div>

    `
    let clickTitle = [...document.querySelectorAll(".title")];
    clickTitle.forEach(i => {
        i.addEventListener("click",() =>{
            localStorage.setItem("idMovie",i.innerText);
            console.log(i.innerText);
            window.location.href = "/moviePage.html"
        })
    })
}
renderLeftReview()