import {BaseComponent} from '../screens/BaseComponent.js';
const style = /*html */ `
    <style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
}
.main-container{
    width: 100%;
    height: 95vh;
    min-height: 850px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
}
.overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(7, 24, 34, 0.8);
    display: flex;
    align-items: center;
}
.container {
    position: relative;
    z-index: 2;
    display: block;
    max-width: 1200px;
    padding-right: 60px;
    padding-left: 60px;
    margin-left: auto;
    margin-right: auto;
    
}
.movie-container{
    position: relative;
    height: 510px;
    /* background-color: #ffffff; */
    padding-left: 420px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    justify-items: flex-start;
    opacity: 1;
}
.movie-poster{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 340px;
    height: 510px;
    border-radius: 10px;
    background-position: 50% 100%;
    background-size: cover;
}
.movie-title{
    font-size:50px !important;
    color: #ffffff;
    max-width: 70%;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 68px;
    line-height: 70px;
    font-weight: 800;
}
.movie-info{
    color: #ffffff;
    font-size: 15px;
    width: 80%;
    margin-top: 25px;
    margin-bottom: 15px;
    
    
}
.owner{
    color: yellow;
    display: inline-block;
    margin-top: 3px;
    margin-right: 4px;
    line-height: 20px;
}
.date-modified{
    display: inline-block;
    margin-top: 3px;
    margin-right: 10px;
    line-height: 20px;
}
.btn{
    width: 80%;
    margin-top: 0px;
    margin-bottom: 0px;
}
.btn-info{
    margin-top: 0px;
}
.btn-trailer, .btn-detail {
    display: inline-block;
    margin-right: 10px;
    border-radius: 5px;
    color: #ffffff;
    /* background-color: #3898EC; */
    padding: 9px 15px;
    cursor: pointer;
}   
.btn-trailer{
    background-color: #2392f4;
}
.btn-trailer:hover {
    background-color: #025385;
}
.btn-detail{
    background-color:#e46466;
}
.btn-detail:hover{
    background-color:  #ff4646;
}

.short-description{
    display: block;
    margin-top: 10px;
    margin-bottom: 0px;
    color: white;
    font-size: 16px;
    line-height: 31px;
}
.modal {
    display: none;
    position: fixed; 
    z-index: 1; 
    padding-top: 200px; 
    left: 0;
    top: 0;
    width: 100%; 
    height:100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.8); 
}
.modal-trailer{
    position: relative;
    margin: auto;
    padding: 0;
    width: 37%;
    height:49%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
}
@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}
.close{
    color: white;
    float: right;
    background-color:black;
    cursor: pointer;
    text-align: center;
    width: 60px;
    height: 40px;
    line-height:40px;
    border-radius:5px;
    position: absolute;
    border: 1px dashed white;
    left: 57%;
    top: -10%;
}
.heart{
    background-color:transparent;
    width:50px;
    position:fixed;
    bottom:40%;
    z-index:9999;
    cursor:pointer;
	font-size: 150px;
	color: #e00;
	animation: beat 1.5s infinite;
    transform-origin: center;
    right: 10%;
    font-size:70px;
    color:white;
    transition: all 0.5s ease;
}
.btn{
    outline: none;
    border:none;
}
.click__heart{
    color: red !important;
    animation: change 0.8s !important;
    visibility: hidden;
}
/* Heart beat animation */
@keyframes beat{
  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }
} 
@keyframes change{
  0%
  {
    opacity: 1;
    transform: translateY(-70px);
  }
  20%
  {
    opacity: 0.9;

    transform: translateY(-90px);

  }
  40%
  {
    opacity: 0.7;

    transform: translateY(-110px);

  }
  60%
  {
    opacity: 0.5;

    transform: translateY(-130px);

  }
  80%
  {
    opacity: 0.3;
    transform: translateY(-150px);

  }
  90%
  {
    opacity: 0.2;
    transform: translateY(-170px);
  }
  100%
  {
    
    opacity: 0;
    transform: translateY(-190px);

  }
} 
html {
    scroll-behavior: smooth;
}
    </style>
`
class IntroMovie extends BaseComponent {
    constructor(){
        super();
        this.state = {
            name:""
        }

        this.props = {
            cast: '',
            owner: '',
            title: '',
            "date-modified": '',
            "img-blur": "",
            img: '',
            admin:'',
            trailer: '',
            make:''
        }
    }

    static get observedAttributes() {
        return ['owner', 'title', 'date-modified', 'cast','img-blur','img','admin','trailer','make']
    }
    
    render() {
        this._shadowRoot.innerHTML =/*html */ `
            ${style}
            <div class="main-container" style="background-image:url(${this.props["img-blur"]})">
                <div class="overlay">
                    <div class="container">
                        <div class="movie-container"> 
                            <div class="movie-poster" style="background-image:url(${this.props.img})"></div>
                            <h1 class="movie-title">${this.props.title}</h1>
                            <div class="movie-info">
                                <div class="owner">Đăng bởi Admin : <b>${this.props.admin}</b></div>
                            </div>
                            <div class="btn">
                                <div class="btn-info">
                                    <div class="btn-trailer">Trailer</div>
                                    <div class="btn-detail">Xem thêm</div>
                                </div>
                                <div class="modal">
                                    <div class="modal-trailer">
                                        <span class="close">Close</span>
                                        <iframe class="video" width="860" height="615" src="${this.props.trailer}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                            <div class="short-description">
                                <p>
                                Ngày phát hành: ${this.props["date-modified"]} (Việt Nam) <br>
                                Đạo diễn: ${this.props.owner} <br>
                                Hãng sản xuất: ${this.props.make}<br>
                                Diễn Viên: ${this.props.cast}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="end"></div>
            <button type="button" class="btn btn-secondary heart" data-toggle="tooltip" data-placement="top" title="Like this MOVIE">
            &#x2665;
</button>
           
        `;
        this.$modal = this._shadowRoot.querySelector('.modal')
        this.$close = this._shadowRoot.querySelector('.close')
        this.$btnTrailer = this._shadowRoot.querySelector('.btn-trailer');
        this.$video = this._shadowRoot.querySelector('.video');
        this.$btnTrailer.onclick = () => {
            this.$modal.style.display = "block";
        }
        this.$close.onclick = () => {
            
            let tmp = this.$video.src;
            this.$video.src = tmp;

            this.$modal.style.display = "none";
        }
        
        this.$btnDetail = this._shadowRoot.querySelector('.btn-detail')
        this.$btnDetail.onclick = () => {
            let el = this._shadowRoot.querySelector('.end')
            el.scrollIntoView({behavior: "smooth"})
        }
        
        //like movie review
        this.likeReview();
    }   
     async likeReview(){
        let dataLike = [];
        let heart =this._shadowRoot.querySelector(".heart");
        let dataUser = JSON.parse(localStorage.getItem("user"));
        let movieLike = localStorage.getItem("idReview");
        if (dataUser){
        let dblike = await firebase.firestore().collection("users").where("email","==",dataUser.email).get()
        .then(function(x){
            dataLike.push(x.docs[0].data().likeMovie);
        })
        if(dataLike[0] !== undefined){
            dataLike[0].forEach(x => {
                if(x.name == movieLike){
                    this._shadowRoot.querySelector(".heart").style.color = "red";
                    localStorage.setItem("true",true);
                }
                else{
                    localStorage.removeItem("true");
                }
            })
        }
        }
        heart.addEventListener('click',async() => {
            if(!dataUser){
                alert("Bạn cần đăng nhập để like phim nhé ^^!");
                return;
            }
            if(localStorage.getItem("true")){
                alert("Bạn đã thích phim này rồi !!");
                return;
            }
             this._shadowRoot.querySelector(".heart").classList.add("click__heart");
             let like = {
                likeMovie: firebase.firestore.FieldValue.arrayUnion({
                    email : dataUser.email,
                    time: new Date().toLocaleString(),
                    username: dataUser.name,
                    name:movieLike,
                }),
            }
            let db = await firebase.firestore().collection("users").where("email","==",dataUser.email).get()
            .then(async function (x){
               let idUser = x.docs[0].id;
               await firebase.firestore().collection("users").doc(idUser).update(like)
            })
         })
    }
   

      

}

window.customElements.define('intro-movie', IntroMovie);