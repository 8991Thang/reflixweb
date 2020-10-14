import {BaseComponent} from "../screens/BaseComponent.js"
import {shuffle} from '../screens/untils.js'

const style = /*html*/ `
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
}
.container__total {
    height:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #081b27;
    
}
.container__brand{
    width:100%;
    height:700px;
    background-size:cover;
    background-position: center center;
    background-attachment: fixed;
    background-repeat:no-repeat;
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
}
.container__brand:before{
    position:absolute;
    content:"";
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0, 0.7)
}
.brand__title{
    margin-top: 67px;
    position:absolute;
    color:white;
    z-index:9;
    text-align: center;
}
.title{
    text-transform: uppercase;
    font-size: 55px;
    margin-bottom: 20px;
    line-height: 1.2;
    font-weight:700;
}
.title p{
    letter-spacing:4px;
}

.nav__news a:nth-child(1){
    color: #76c100 !important;
    display: inline-block;
    font-size: 30px;
    font-weight: 400;
    text-transform: capitalize;
    margin: 0 20px;
    cursor: pointer;
}
.dots{
    height:2px;
    background:#76c100;
    opacity:0;
    transition: all 0.5s ease;
    width:1%;
    visibility: hidden;
    transform: translateX(-50%);
    overflow: hidden;
}
.nav__news div:nth-child(1):hover .dots{
    transform: translateX(0%);
    opacity:1;
    width:100%;
    visibility:visible;

}
.nav__news p:nth-child(3),.nav__news span{
    display: inline-block;
    font-size: 30px;
    text-transform: capitalize;
    font-weight: 400;
    margin: 0 20px;
    cursor: pointer;
}
.nav__news span{
    margin:0;
}
.container__news{
    width:1300px;
    height:auto;
    <!-- background: #ccc -->
}
.news__title{
    margin: 70px 0;

}
.content img {
    width:150px;
    height:90px;    
}
.news__title{
    width : 70%;
    line-height: 30px;
}
.img-center {
    text-align: center;
}
.img-center img{
    width: 660px;
}
.title__news{
    font-size :40px;
    font-weight :700;
    color: #f1b722 !important;
    line-height: 50px;
    cursor: pointer;
}
.title__news:hover{
    text-decoration: underline;
}
.time__news{
    color: #888;
}
.des1{
    color: #fff;
    font-size :17px;
}
.des1 p{
    margin:40px 0 20px 0;
}
.content-first{
    margin:30px 0;
    font-size: 20px;
    color: #fff;
    font-weight:700;
}
.suggest__content > div{
    display:flex;
    flex-direction:row;
    align-items: center;
    margin-top:15px;
}
.content-info{
    margin-left:20px;
    width:233px;
}
.suggest__top{
    text-align: center;
}
.suggest{
    margin: 80px 0 0 20px;
}
.suggest__top p {
    font-size:18px;
    color: #f1b722 !important;
    font-weight :700;
}
.content-info{
    color:white;
}
.content-info p:nth-child(2){
    color: #888;
}


.fixed__suggest{
    top: 45px;
    position: fixed !important;
    right: 277px !important;
    margin: 0 auto;
    animation: blur 1s ease;
}
@keyframes blur
{
    0%
    {opacity:0}
100%
{opacity:1}
}

.content-info p:nth-child(1):hover{
    cursor: pointer;
    text-decoration: underline;
}
</style>
`

class NewsDetail extends BaseComponent {
    constructor(){
        super();
    }
    render() {
        this._shadowRoot.innerHTML = /*html*/ `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
        ${style}
        <div class="container__total">
            <div class="container__brand" style=" background-image: url('/img/background/Coco-Movie-Banner-e1511823348502.jpg')">
                <div class="brand__title">
                    <div class="title">
                        <p>Movie News</p>
                    </div>
                    <div class="nav__news d-flex justify-content-center">
                        <div>
                        <a>Home</a>
                        <span class="dots"></span>
                        </div>
                        <span>|</span><p>Movie News</p>
                    </div>
                </div>
            </div>
            <div class="container__news d-flex justify-content-between">
                
            </div>

    </div>
        `
        window.addEventListener("scroll",(e) => {
            let navPC = this._shadowRoot.querySelector(".suggest__news");
            navPC.classList.toggle("fixed__suggest",window.scrollY > 1000);
        })

        //render news
        this.renderNews();
    }
    async renderNews(){
        let id = localStorage.getItem("idNews");
        let db = await firebase.firestore().collection("news__movie").where("name","==",id).get();
        //render dom bacground img
        this._shadowRoot.querySelector(".container__brand").style.backgroundImage = `url(${db.docs[0].data().imgbg})`;
        //render content news 
        let data = [];
        let dbFb = await firebase.firestore().collection("news__movie").get();
        for (let i of dbFb.docs){
            data.push(i.data());
        }
        let randomArr = Array.from(Array(data.length).keys());
        let random = [];
        random.push(shuffle(randomArr));
        console.log(random);
        this._shadowRoot.querySelector(".container__news").innerHTML = /*html*/ `
        <div class="news__title">
                    <div>
                        <div class="title__news">
                            <p>[Tin Tức] : ${db.docs[0].data().name}!</p>
                        </div>
                        <div class="time__news">
                            <p><b>ADMIN : ${db.docs[0].data().by}</b> | ${db.docs[0].data().date} (GMT+7)</p>
                        </div>
                    </div>
                    <div class="news__info">
                        <div class="info-content">
                            <p class="content-first">${db.docs[0].data().content}</p>
                            <div>
                                <div>
                                    <div class="des1">
                                        <p>${db.docs[0].data().des1}</p>
                                    </div>
                                </div>
                                <div class="img-center">
                                    <img src="${db.docs[0].data().img1}" alt="" class="img1">
                                </div>
                            </div>
                             <div>
                                <div>
                                    <div class="des1">
                                        <p>${db.docs[0].data().des2}</p>
                                    </div>
                                </div>
                                <div class="img-center">
                                    <img src="${db.docs[0].data().img2}" alt="" class="img1">
                                </div>
                            </div>
                             <div>
                                <div>
                                    <div class="des1">
                                        <p>${db.docs[0].data().des3}</p>
                                    </div>
                                </div>
                                <div class="img-center">
                                    <img src="${db.docs[0].data().img3}" alt="" class="img1">
                                </div>
                            </div>
                            <div class="des1">
                                        <p>${db.docs[0].data().des4}</p>
                                    </div>
                        </div>
                    </div>
                </div>
                <div class="suggest__news">
                <div class="suggest">
                    <div class="suggest__top">
                    <p>Tin Nổi Bật</p>
                    </div>
                    <div class="suggest__content">
                        <div>
                            <div class="content">
                                <img src="${data[random[0][0]].img}" alt="">
                            </div>
                            <div>
                                <div class="content-info">
                                    <p>${data[random[0][0]].name}</p>
                                    <p>${data[random[0][0]].date} (GMT+7)</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="content">
                                <img src="${data[random[0][1]].img}" alt="">
                            </div>
                            <div>
                                <div class="content-info">
                                    <p>${data[random[0][1]].name}</p>
                                    <p>${data[random[0][1]].date} (GMT+7)</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="content">
                                <img src="${data[random[0][2]].img}" alt="">
                            </div>
                            <div>
                                <div class="content-info">
                                    <p>${data[random[0][2]].name}</p>
                                    <p>${data[random[0][2]].date} (GMT+7)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        `   
    }
}

window.customElements.define("news-detail",NewsDetail);