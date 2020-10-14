import {BaseComponent} from '../screens/BaseComponent.js';
import {shuffle} from '../screens/untils.js'

const style = /*html */ `
    <style>
        *{
            padding: 0;
            margin:0;
            box-sizing: border-box;
        }
        .container{
            width: 100%;
            height: 100%;
            padding-top:55px;
            padding-bottom: 50px;
            background-image: url(./img/background/luoi.png);
            background-color: #cf256f;
        }
        a{
            color: #ffffff;
            text-decoration: none;
            
        }
        a:hover {
            transition: 0.3s;
            text-decoration: underline;
        }
        .news-container{
            width: 1170px;
            margin: auto;
        }
        .news-container-header{
            font-size: 20px;
            font-style: italic;
            margin-bottom: 20px;
            display: flex;
            
            
        }
        .news-container-header :hover {
            color: #ffc107;
            transition: 0.3s;
            text-decoration: underline;
        }
        
        #paral{
            display:flex;
            margin-top: 5px;   
            margin-right: 5px;   
            width: 14px;
            height: 17px;
            background: #ffc107;
            -webkit-transform: skew(-20deg);
            -moz-transform: skew(-20deg);
            -o-transform: skew(-20deg);
            transform: skew(-20deg);
        }
       
        .news-container-content{
            display: flex;
            flex-direction: column;
        }
        .news-1, .news-2{
            position: relative;
            transition: all .2s ease-in-out;
            cursor: pointer;
        }
        .title{
            margin-bottom:15px !important;
            font-size: 20px;
            line-height: 10px;
            color: #f1b722;
            font-weight: bold;
        }
        .date-modified {
            color: white;
            font-size: 13px;
            margin-top: 10px;
        }
        i{
            margin-right: 2px;
        }
        .news-container-1{
            display: flex;
            justify-content: space-between;         
        }
        .news-1 img {
            width: 570px;
            height: 394px !important;
            border-radius: 5px;  
        }
        .news-1 .news-1-img {
            position: relative;
            overflow: hidden;
        }
        .news-1 .news-1-img img {
            max-width: 100%;
            transition: transform 1s;
        }
        .news-1:hover .news-1-img img {
            transform: scale(1.2)
        }
        .hv{
            position: absolute;
            left: 0;
            width:0%;
            height:105%;
            background:#C13100;
            opacity:0.6;
            transition: all 0.4s ease;
            z-index:-1;
        }
        .hv-2{
            position: absolute;
            left: 0;
            width:0%;
            height:108%;
            background:#C13100;
            opacity:0.5;
            transition: all 0.4s ease;
            z-index:-1;
            bottom:-2px;
        }
        .news-1:hover .hv{
            width: 103%;
        }
        .news-2:hover .hv-2{
            width: 100%;
        }
        .news-1-img:after,.news-2-img:after{
            content: '';
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background:linear-gradient(rgba(255,255,255,0),rgba(0,0,0))
        }
        .news-1-info, .news-2-info{
            position: absolute;
            bottom: 16%;
            left: 11px;
            z-index:1;
        }
        .news-container-2 {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
        }
        .news-2 img {
            width: 377px;
            height: 252px;
            border-radius: 5px;
        }
        .news-2 .news-2-img {
            position: relative;
            overflow: hidden;
        }
        .news-2 .news-2-img img {
            max-width: 100%;
            transition: transform 2s;
        }
        .news-2:hover .news-2-img img {
            transform: scale(1.2)
        }

    </style>
`;
class NewsMovie extends BaseComponent {
    constructor() {
        super();
        this.props ={

        }
    }
    
    static get observedAttributes() {
        return [];
    }

    render() {
        this._shadowRoot.innerHTML = /*html */ `
            <!-- owlCarousel -->
            <script src="https://code.jquery.com/jquery-3.5.1.js"></script> 
            <!-- wow-js -->
            <script src='https://cdn.rawgit.com/matthieua/WOW/1.0.1/dist/wow.min.js'></script>
            <link rel='stylesheet' href='https://cdn.rawgit.com/daneden/animate.css/v3.1.0/animate.min.css'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            ${style}
            <div class="container">

                <div class="news-container">

                    <div class="news-container-header wow bounceInUp "data-wow-offset="100 " data-wow-duration="1s">
                        <div id="paral"></div>
                        <a >ACTRESS UPDATE</a>
                    </div>
                    <div div class="news-container-content">
                    </div>

                </div>
        `;
        //render data news
        this.renderDataNews();
    }
    async renderDataNews(){
        let data = [];
        let db = await firebase.firestore().collection("news__movie").get();
        for ( let i of db.docs){
            data.push(i.data());
        }
        let randomArr = Array.from(Array(data.length).keys());
        let randomNumber = [...shuffle(randomArr)];
        this._shadowRoot.querySelector(".news-container-content").innerHTML = /*html */ `
        <div class="news-container-1">
        <div class="news-1 click" name="${data[randomNumber[0]].name}">
            <div class="news-1-img">
                <img src="${data[randomNumber[0]].img}" alt="">
            </div>
            <div class="news-1-info">
                <a  class="title">${data[randomNumber[0]].name}</a>
                <span class="hv"></span>
                <div class="date-modified">
                <i class="fa fa-clock-o"></i>${data[randomNumber[0]].date}
                </div>
            </div>
        </div>
        <div class="news-1 click" name="${data[randomNumber[1]].name}">
            <div class="news-1-img">
                <img src="${data[randomNumber[1]].img}" alt="">
            </div>
            <div class="news-1-info">
                <a class="title">‘${data[randomNumber[1]].name}</a>
                <span class="hv"></span>
                <div class="date-modified">
                <i class="fa fa-clock-o"></i>${data[randomNumber[1]].date}
                </div>
            </div>
        </div>
    </div>

    <div class="news-container-2">
        <div class="news-2 click" name="${data[randomNumber[2]].name}">
            <div class="news-2-img">
                <img src="${data[randomNumber[2]].img}" alt="">
            </div>
            <div class="news-2-info">
                <a  class="title">${data[randomNumber[2]].name}</a>
                <span class="hv-2"></span>
                <div class="date-modified">
                <i class="fa fa-clock-o"></i>${data[randomNumber[2]].date}
                </div>
            </div>
        </div>
        <div class="news-2 click"name="${data[randomNumber[3]].name}">
            <div class="news-2-img">
                <img src="${data[randomNumber[3]].img}" alt="">
            </div>
            <div class="news-2-info">
                <a  class="title">${data[randomNumber[3]].name}</a>
                <span class="hv-2"></span>
                <div class="date-modified">
                <i class="fa fa-clock-o"></i>${data[randomNumber[3]].date}
                </div>
            </div>
        </div>
        <div class="news-2 click" name="${data[randomNumber[4]].name}">
            <div class="news-2-img">
                <img src="${data[randomNumber[4]].img}" alt="">
            </div>
            <div class="news-2-info">
                <a  class="title">${data[randomNumber[4]].name}</a>
                <span class="hv-2"></span>
                <div class="date-modified">
                <i class="fa fa-clock-o"></i>${data[randomNumber[4]].date}
                </div>
            </div>
        </div>
    </div>
    </div>
        `
        //rederect
        this.rederect();
    }
    rederect(){
        let click = [...this._shadowRoot.querySelectorAll('.click')];
        click.forEach(item => {
            item.addEventListener("click",() => {
                localStorage.setItem("idNews",item.attributes.name.value);
                window.location.href = "/newsMovie.html"
            })
        })
    }
}

window.customElements.define('news-movie', NewsMovie)