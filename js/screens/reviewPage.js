import {BaseComponent} from "./BaseComponent.js"
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
</style>
`
class ReviewTotal extends BaseComponent {
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
                    <h2><b class="title__find">Review Page :</b></h2>
                </div>
                <div class="total__search">
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
        //render data collection review_moive

        this.renderReveview();
    }
    async renderReveview(){
        let db = await firebase.firestore().collection("review_moive").get();
        for ( let doc of db.docs){
            this._shadowRoot.querySelector(".review__item").innerHTML += /*html*/`
            <div class="card">
                <img src="${doc.data().imgblur}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${doc.data().name}</h5>
                    <p class="card-text">${doc.data().content}</p>
                </div>
            </div>
            `
        }

        let titleReview = [...this._shadowRoot.querySelectorAll(".card-title")];
       for(let i = 0; i < titleReview.length; i++){
            titleReview[i].addEventListener("click",() => {
                localStorage.setItem('idReview',titleReview[i].innerText);
                window.location.href = "/review.html"
            })
       }
    }

}

window.customElements.define("review-total",ReviewTotal);