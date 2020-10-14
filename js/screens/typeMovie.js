import {BaseComponent} from '../screens/BaseComponent.js';
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
    margin-bottom:50px;
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
    margin-right:30px;

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
.movie__items-detail > h2 > a{
    font-size: 20px;
    font-size: 18px;
    text-decoration: none;
    margin:0;
    font-weight: 700;
    cursor: pointer;
    color: #f29438 !important;
}
.detail{
    color: #fff !important;
}
.movie__items-detail > h2 > a:hover{
    text-decoration: underline !important;
}
.movie__items-detail p {
    font-size: 16px;
    color: #ea3b92;
    font-weight: 700;
}
.movie__items-detail:first-child {
    padding-top : 10px;
}
</style>
`
class TypeMovie extends BaseComponent {
    constructor(){
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
                    <h2>Kết quả tìm kiếm thể loại : <b class="title__find"></b></h2>
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
                </div>
            </div>
        </div>
        `
        this.renderTypeMovie();
    }
    async renderTypeMovie(rederect){
        let typeOfMovie = localStorage.getItem("type");
        let dbOfType = await firebase.firestore().collection("data_movie").where("type","==",typeOfMovie).get()
        for (let doc of dbOfType.docs){
            this._shadowRoot.querySelector('.item').innerHTML += /*html*/`
            <div class="movie__items">
                                    <div class="movie__items-poster">
                                                        <a href=""> <img class="img-poster" src="${doc.data().img}" alt="poster"></a>
                                                        <div class="movie__items-poster-info">
                                                        <a name="${doc.data().name}" class="detail" >Chi tiết</a>
                                                        <a target="_blank" href="${doc.data().trailer}">Trailer</a>
                                                        <p><b>Thời lượng</b> : ${doc.data().time} </p>
                                                        <p><b>Thể Loại</b> : ${doc.data().type} </p>
                                                    </div>
                                                </div>
                                                <div class="movie__items-detail">
                                                    <h2><a class="title" >${doc.data().name}</a></h2>
                                                    <p><b>Ngày Khởi Chiếu :</b> ${doc.data().date}</p>
                                    </div>
            </div>`
        }
        this._shadowRoot.querySelector(".title__find").innerText = typeOfMovie;
        // rederect
        this.rederect();
    }
    rederect(){
        let detail = [...this._shadowRoot.querySelectorAll(".detail")];
        detail.forEach(item => {
            item.addEventListener("click",() => {
                console.log(item.name)
                localStorage.setItem("idMovie",item.name);
                window.location.href = "/moviePage.html"
            })
        })
        let title = [...this._shadowRoot.querySelectorAll(".title")];
        title.forEach(item => {
            item.addEventListener("click",() => {
                console.log(item.name)
                localStorage.setItem("idMovie",item.innerText);
                window.location.href = "/moviePage.html"
            })
        })
    }
}

window.customElements.define("type-movie",TypeMovie);