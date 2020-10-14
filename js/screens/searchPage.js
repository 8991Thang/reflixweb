import {BaseComponent} from "../screens/BaseComponent.js"
let style = /*html*/`
<style>
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
}
.container__total{
    with: 100vw;
    height: auto;
    background-image: url("/img/background/bg.jpg");
    display:flex;
    justify-content: center;
    align-items: center;
}
.title{
    color:white;
}
.container__content{
    height: auto;
    width: 1550px;
    margin-top:230px;
}
.total__search{
    width:100%;
    height:100%;

}
.movie{
    background: white;
    width:100%;
    height:auto;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.review{
    background: white;
    width:100%;
    height:auto;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top:15px;
}
.review__tile{
    margin-bottom: 10px;
    margin-top: 11px;
    width:95%;
    height:auto;
    display:flex;
    align-items: center;
    color: #eb1689;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid #eb1689;
}
.review__item{
    width:95%;
    height:auto;
    flex-wrap: wrap;
    display:flex;
}
.review__tile p {
    font-size:30px;
    margin:0;
}
.movie__tile{
    margin-bottom: 10px;
    margin-top: 11px;
    width:95%;
    height:auto;
    display:flex;
    align-items: center;
    color: #eb1689;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid #eb1689;
}
.movie__tile p {
    font-size:30px;
    margin:0;
}
.movie__item{
    width:95%;
    height:auto;
    display:flex;
    align-items: center;
    margin-top:15px;
}
.movie__items{
    margin-right:16px;

}
.item{
    width: 100%;
    height:90%;
    display: flex;
    flex-wrap: wrap;
}
.movie__items-poster {
    width : 220px;
    height : 340px;
    cursor : pointer;   
}
.movie__items-poster-info p {
    color: red;
}
.movie__items-poster-info:lastchild{
    line-height:60px;
}
.movie__items-poster-info b {
    color: black;
}
/* .movie__items{} */
.movie__items-poster:hover .movie__items-poster-info{
    z-index : 9;
    transform : rotateY(360deg)
}
.movie__items-poster img{
    position : absolute;
    z-index : 3;
    height: 340px;
}

.movie__items-poster{
    box-shadow : 0px 0px 10px black;
}

.movie__items-poster-info{
    transition : all 1s ease;
    width : 220px;
    height : 340px;
    background : rgb(255,255,255,0.6);
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    position : absolute;
    z-index : 1;
    color : black;
}

.movie__items-poster-info a {
    margin-bottom : 25px;
    text-align: center;
    height : 40px;
    line-height : 40px;
    color : white;;
    text-decoration: none;
    width : 100px;
    background : #cf256f;
    text-transform : uppercase;
    font-weight : bolder;
}
.img-poster{
    width : 220px !important;
}
.movie__items-detail{
    width : 220px;
    text-align : center;
}
.movie__items-detail > h2 {
    cursor : pointer;
    margin:0;
    margin: 20px 0; 
    font-size: 20px;
    color: #f29438;
    font-size: 18px;
    text-decoration: none;
    font-weight: 700;
}
.movie__items-detail > h2:hover{
    text-decoration: underline;
}
.movie__items-detail p {
    font-size: 16px;
    color: #ea3b92;
    font-weight: 700;

}
.movie__items-detail:first-child {
    padding-top : 10px;
}
.card{
    width: 450px;
    margin:20px 0;
    margin-right: 30px;
}
.card-img-top{
    height:252px;
}
.card-title{
    cursor: pointer;
}
.card-title:hover{
    color:red;
}
.chitiet{
    color:white !important;
}
</style>

`


class SearchMovie extends BaseComponent {
    constructor() {
      super();
    }
    render(){
        this._shadowRoot.innerHTML = /*html*/ `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
        ${style}
        <div class="container__total">
            <div class="container__content">
                <div class="title">
                    <h2>Kết quả Tìm kiếm : <b class="title__find"></b></h2>
                </div>
                <div class="total__search">
                    <div class="movie">
                        <div class="movie__tile">
                            <p>PHIM</p>
                        </div>
                        <div class="movie__item">
                            <div class="item">
                            </div>
                        </div>
                    </div>
                    <div class="review">
                        <div class="review__tile">
                            <p>TIN ĐIỆN ẢNH</p>
                        </div>
                        <div class="review__item">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `

        // render Data search
        this.renderDataSearch();
      
    }

    async renderDataSearch(){
        function change_alias(alias) {
            var str = alias;
            str = str.toLowerCase();
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
            str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
            str = str.replace(/đ/g,"d");
            str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
            str = str.replace(/ + /g," ");
            str = str.trim();
            return str;
        }
        let data = [];
        let dataSearch = localStorage.getItem("valueSearch");
        let confirmData = change_alias(dataSearch);
        let dataFb = await firebase.firestore().collection("data_movie").get();
        for ( let doc of dataFb.docs){
            data.push(doc.data());
        }
        let userMovie = data.filter(x => {
            if(change_alias(x.name).indexOf(confirmData) > -1){
            return x;
            }
        })
        let renderData = userMovie.forEach(dbMoive => {
            this._shadowRoot.querySelector(".item").innerHTML += /*html*/`
            <div class="movie__items">
                <div class="movie__items-poster">
                                        <a href=""> <img class="img-poster" src="${dbMoive.img}" alt="poster"></a>
                                        <div class="movie__items-poster-info">
                                            <a id="${dbMoive.name}" class="chitiet">Chi tiết</a>
                                            <a target="_blank" href="${dbMoive.trailer}">Trailer</a>
                                            <p><b>Thời lượng</b> : ${dbMoive.time} </p>
                                            <p><b>Thể Loại</b> :${dbMoive.type} </p>
                                        </div>
                                    </div>
                                    <div class="movie__items-detail">
                                        <h2 class="title__"><a>${dbMoive.name}</a></h2>
                                        <p><b>Ngày Khởi Chiếu :</b> ${dbMoive.date}</p>
                                    </div>
                                </div>`
        })
        let dataReviewTotal = [];
        let dataReview = await firebase.firestore().collection("review_moive").get();
        for (let id of dataReview.docs){
            dataReviewTotal.push(id.data());
        }
        let userReview = dataReviewTotal.filter(x => {
            if(change_alias(x.name).indexOf(confirmData) > -1){
            return x;
            }
        })
        userReview.forEach(dbMoive => {
            this._shadowRoot.querySelector(".review__item").innerHTML += /*html*/`
            <div class="card">
                                <img src="${dbMoive.imgblur}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${dbMoive.name}</h5>
                                    <p class="card-text">${dbMoive.content}</p>
                                </div>
                            </div>
                            `
        })
        this._shadowRoot.querySelector('.title__find').innerText = dataSearch;

        let titleReview = [...this._shadowRoot.querySelectorAll(".card-title")];
       for(let i = 0; i < titleReview.length; i++){
            titleReview[i].addEventListener("click",() => {
                localStorage.setItem('idReview',titleReview[i].innerText);
                window.location.href = "/review.html"
            })
       }
       let title = [...this._shadowRoot.querySelectorAll(".title__")];
       for(let i = 0; i < title.length; i++){
            title[i].addEventListener("click",() => {
                localStorage.setItem('idMovie',title[i].innerText);
                window.location.href = "/moviePage.html"
            })
       }
        let chitiet = [...this._shadowRoot.querySelectorAll(".chitiet")];
       for(let i = 0; i < titleReview.length; i++){
            chitiet[i].addEventListener("click",() => {
                localStorage.setItem('idMovie',chitiet[i].id);
                window.location.href = "/moviePage.html"
            })
       }
       
    }
}

window.customElements.define("search-movie",SearchMovie);