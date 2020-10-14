import {BaseComponent} from '../screens/BaseComponent.js'
import {shuffle} from '../screens/untils.js'
const style = /*html*/ `
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    font-weight:bold;
}
a{
    list-style: none;
}
a:hover{
    list-style: none;

}

.container__total{
    width:100%;
    display: flex;
    justify-content:center;
    background-image: url("/img/background/bg.jpg");
    background-repeat: no-repeat;
}
.total{
    width:1550px;
    margin-top:200px;
}
.total__info{
    padding: 15px;
    margin-top: -180px;
    position: relative;
    z-index: 99;
}
.img{
    width:1550px;
    height:500px;
    position:relative;
    border: 1px solid black;
}
.img img {
    width:100%;
    height:100%;
    object-fit: cover;

}
.blur{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background: rgb(0,0,0,0.8);
    z-index :9
}

.img__info img{
    width:100%;
    height:100%;

}
.img__info{
    height:430px;
    width: 300px;
    border: 2px solid #f29438;
    border-radius: 4px;
    margin-right: 40px;
}
.info__movie{
    color: #fff;
    font-size: 12pt;
    margin: 0 auto;
    font-weight: 700;
}
.info__title{
    margin-bottom:80px;
}
.info__title p:nth-child(1){
    font-size: 30px;
    text-transform: unset;
    font-weight: 700;
    color: #f12d8f;
    text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
}
.info__title p:nth-child(2){
    font-size: 24px;
    color: #fff;
}
.info__movie b{
    color: #e658cd;
    font-weight:700;
    width: 110px;
    display: inline-block;
}
.age_restricted{
    background-image: url("/img/icons/age.png");
    font-size: 35px;
    font-weight: 700;
    float: right;
    width: 125px;
    height: 150px;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 115px;
    position: absolute;
    top: 240px;
    right: 100px
}
.age_restricted span{
    font-weight: 900;
}
.icon span{
    display: block;
    position: relative;
    z-index: 3;
    width: 0;
    height: 0;
    border-left: 32px solid #fff;
    border-top: 22px solid transparent;
    border-bottom: 22px solid transparent;
}
.icon {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-sizing: content-box;
    display: block;
    width: 32px;
    height: 44px;
    border-radius: 50%;
    padding: 18px 20px 18px 28px;
    cursor: pointer !important;
}
.icon:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    height: 80px;
    background: #ea3b92;
    border-radius: 50%;
    display: block;
    transform: translateX(-50%) translateY(-50%);
    z-index:0;
    animation: pulse 1.5s ease-out infinite;
}
.icon:after {
    z-index:2;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80px;
    height: 80px;
    background: #ea3b92;
    border-radius: 50%;
    display: block;
    transform: translateX(-50%) translateY(-50%);
    transition: all .2s;
    
}
@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0px rgb(234, 59, 146,0.8);
	}
	
	70% {
		transform: scale(1.1);
		box-shadow: 0 0 0 25px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}

.movie-content{
    margin-top: 15px;
    box-shadow: 7px 7px 1px #f29438;
    position: relative;
}
.movie-content:after{
    background: #ea3b92;
    top: 99px;
    height: 91px;
    height: calc(100% - 99px);
    content: ' ';
    position: absolute;
    width: 20px;
    left: 0;
}
.movie-content:before{
    content: "";
    position: absolute;
    width: 20px;
    left: 0;
    background-image: url('/img/icons/content.png');
    background-position: top left;
    background-repeat: no-repeat;
    height: 99px;
    z-index: 2;
}
.showdow{
    position: absolute;
    top: 64px;
    left: 8px;
    width: 9px;
    height: 10px;
    background-color: #f29438;
    transform: rotate(-60deg);
}
.shadow:after{
    content: ' ';
    width: 10px;
    display: block;
    height: 10px;
    background-color: #f29438;
    transform: rotate(-31deg);
    margin-top: -4px;
    margin-left: 2px;
}
.content{
    background: #ea3b92;
    color: #FFF;
    padding: 20px 20px 20px 10px;
    margin-left: 15px;
}
.read-more{
    background-color: #fff;
    float: right;
    margin-right: 30px;
    opacity: .9;
    background-image: url('/img/icons/arrow-down (1).png');
    background-position: center center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    border-radius: 50px;
    z-index: 9;
    text-indent: -10000px;
    cursor: pointer;
    transition: all 0.5s ease;
}
.quay{
    transform: rotate(-180deg)
}
.text{
    overflow: hidden;
    line-height:40px;
    font-size: 18px;
    height: 172px;
    transition: all 0.5s ease;
}
.height{
    height:250px;
}
.list{
    display:flex;
    flex-direction:column;
    align-items: center;
    height:820px;
    justify-content: space-around;
}
.list div {
    display:inline-block;
    height: 150px;
    width:300px;
}
.related-movie{
    text-align: center;
}
.related-movie h2{
    font-size: 20pt;
    line-height: 20px;
    color: #f29438;
    padding: 10px;
    display: inline-block;
    margin-top: 0;
    border-bottom: 1px solid #f29438;
}
.poster{
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.5s ease;
}
.poster:hover{
    transform: scale(1.1);
}
.arrow-down{
    background-color: #fff;
    opacity: .9;
    background-image: url("/img/icons/arrow-down (1).png");
    background-position: center center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    z-index: 9;
    margin: auto;
}
.more{
    font-size: 17pt;
    color: #fff;
}
.box{
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.7);
    position:fixed;
    top:50%;
    left:50%;
    z-index:999;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    opacity:0;
    visibility: hidden;
}
.show{
    opacity:1;
    visibility: visible;
}
.box__trailer{
    position:relative;
}
.closer{
    position: absolute;
    top: -30px;
    right: 0;
    font-size:40px;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;
}
.closer:hover{
    color:red;
}
.view-more{
    cursor: pointer;
}

</style>
`
class MoviePage extends BaseComponent {
    constructor() {
        super();
    }
    async render() {
        this._shadowRoot.innerHTML = /*html*/ `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
        ${style}


        <div class="container__total">
            <div class="total">
                <div class="total_img">
                </div>
                <div class="total__info d-flex align-items-center">
                </div>
                <div class="row">
                    <div class="col-md-8 col-sm-8">
                        <div class="movie-content">
                            <div class="showdow"></div>
                            <div class="content">
                                <div class="text"> 
                                </div>
                                </div>
                            <p class="read-more"></p>
                        </div>
                        <suggest-review></suggest-review>
                </div>
                <div class="col-md-4 col-sm-4">
                        <div class="related-movie">
                            <h2>Phim đang chiếu</h2>
                            <div class="list">
                                
                            </div>
                            <div class="view-more">
                                <p class="more-movie">
                                    <div class="more">xem thêm</div>
                                    <div class="arrow-down"></div>
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="box">
            <div class="box__trailer">
               
            
            </div>
        </div>
        `
       
        //render data
        let idMovie = localStorage.getItem("idMovie");
        let db = await firebase.firestore().collection("data_movie").where("name","==",idMovie).get();
        this._shadowRoot.querySelector(".total_img").innerHTML = /*html*/`
            <div class="img">
            <img src="${db.docs[0].data().imgblur}" alt="">
            <span class="blur"></span>
            <div class="icon">
                <span></span>
            </div>
            </div>
        `
        this._shadowRoot.querySelector(".total__info").innerHTML = /*html*/`
        <div class="img__info">
                        <img src="${db.docs[0].data().img}" alt="">
                    </div>
                    <div class="info">
                        <div class="info__title">
                            <p>${db.docs[0].data().name}</p>
                            <p>${db.docs[0].data().nameEN}</p>
                        </div>
                        <div class="info__movie">
                            <div class="d-flex">
                                <b>Thời Lượng :</b><p> &nbsp; ${db.docs[0].data().time}</p>
                            </div>
                            <div class="d-flex">
                                <b>Khởi Chiếu từ :</b><p> &nbsp; ${db.docs[0].data().date}</p>
                            </div>
                            <div class="d-flex">
                                <b>Thể Loại :</b><p> &nbsp; ${db.docs[0].data().type}</p>
                            </div> 
                            <div class="d-flex">
                                <b>Định dạng :</b><p> &nbsp; ${db.docs[0].data().format}</p>
                            </div>
                            <div class="d-flex">
                                <b>Đạo Diễn  :</b><p> &nbsp; ${db.docs[0].data().directors}</p>
                            </div>
                            <div class="d-flex">
                                <b>Diễn Viên  :</b><p> &nbsp; ${db.docs[0].data().cast}</p>
                            </div>
                            <div class="d-flex">
                                <b>Độ Tuổi :</b><b style="width: 30px">C${db.docs[0].data().age}</b><p>- PHIM CẤM PHỔ BIẾN ĐẾN KHÁN GIẢ DƯỚI ${db.docs[0].data().age} TUỔI </p>
                            </div>
                        </div>
                        <div class="age_restricted">
                            <span>C${db.docs[0].data().age}</span>
                        </div>
                    </div>
        `
        this._shadowRoot.querySelector(".text").innerHTML = /*html*/`
            <p style="text-align: justify;">${db.docs[0].data().description}</p>
            
        `
        this._shadowRoot.querySelector(".box__trailer").innerHTML = /*html*/`
        
        <iframe class="video" width="760" height="515" src="${db.docs[0].data().trailer2}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <span class="closer">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-octagon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </span>
        `
        let dataRandow = [];
        let moiveOpen = await firebase.firestore().collection("data_movie").get();
        for(let doc of moiveOpen.docs){
            dataRandow.push(doc.data());
        }
        let dataRandowNumber = Array.from(Array(dataRandow.length).keys());
        let random = [];
        random.push(shuffle(dataRandowNumber));
        let random2 = [...shuffle(dataRandowNumber)]
        this._shadowRoot.querySelector(".list").innerHTML = /*html*/ `
            <div id="${dataRandow[random2[1]].name}" class="poster" style="background-image: url('${dataRandow[random2[1]].imgblur}')"></div>
            <div id="${dataRandow[random2[2]].name}"  class="poster" style="background-image: url('${dataRandow[random2[2]].imgblur}')"></div>
            <div id="${dataRandow[random2[3]].name}"  class="poster" style="background-image: url('${dataRandow[random2[3]].imgblur}')"></div>
            <div id="${dataRandow[random2[5]].name}"  class="poster" style="background-image: url('${dataRandow[random2[5]].imgblur}')"></div>
            <div id="${dataRandow[random2[4]].name}"  class="poster" style="background-image: url('${dataRandow[random2[4]].imgblur}')"></div>
        `
        let clickPoster = [...this._shadowRoot.querySelectorAll(".poster")];
        clickPoster.forEach(x => {
            x.addEventListener("click",() => {
                localStorage.setItem("idMovie",x.id);
                window.location.href = "/moviePage.html"
            })
        })

        this._shadowRoot.querySelector('.view-more').addEventListener("click",() => {
            let a = '';
            localStorage.setItem("valueSearch",a);
            window.location.href = "/searchPage.html"
        })
         //read more methods
         this.readMore();
        // //closerBoxTrailer()
        this.closerBoxTrailer();
    }
    readMore(){
        let read = this._shadowRoot.querySelector(".read-more");
        read.addEventListener("click",() => {
            this._shadowRoot.querySelector(".text").classList.toggle("height");
            read.classList.toggle("quay")
        })
    }
    closerBoxTrailer(){
        this._shadowRoot.querySelector(".icon").addEventListener("click",() => {
            this._shadowRoot.querySelector(".box").classList.add("show");
            let tmp = this._shadowRoot.querySelector('.video').src;
            this.$video = this._shadowRoot.querySelector('.video');
            this.$video.src = tmp; 
        })
        this._shadowRoot.querySelector('.box').addEventListener("click",() => {
            this._shadowRoot.querySelector(".box").classList.remove("show");
            let tmp = this._shadowRoot.querySelector('.video').src;
            console.log(tmp);
            this.$video = this._shadowRoot.querySelector('.video');
            this.$video.src = tmp; 
        })
    }
}


window.customElements.define("movie-page", MoviePage);