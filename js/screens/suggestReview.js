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
.container__suggest{
    margin-top:100px;
    margin-bottom:40px;
    width: 100%;
    background-color: #081b27;
    display:flex;
    justify-content: center;
}
.item img {
    width:300px;
    height: 154px;
}
.item{
    margin-bottom: 40px;
    margin-top: 10px;
    display:inline-block;
}
.item p {
    width:300px;
    margin:0;
    text-align:left;
    margin-top: 20px;
    color: #f29438;
}
.suggest__body{
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap:wrap;
}
.suggest{
    background:white;
    width:1106px;
    display:flex;
    align-items: center;
    justify-content: center;
}
.suggest__title p{
    margin:0;
    margin: 15px 0;
    text-transform: uppercase;
    color: #eb1689;
    font-size:25px;
    font-weight: 500;
}
.suggest__size{
    width:95%;
    height:95%;
}
.suggest__text{
    cursor: pointer;
}
.suggest__text:hover{
    color: #eb1689;
}
</style>
`
class SuggestReview extends BaseComponent {
    constructor(){
        super();
    }
    render(){
        this._shadowRoot.innerHTML =/*html */ `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
        ${style}

        <div class="container__suggest">
            <div class="suggest">
                <div class="suggest__size">
                    <div class="suggest__title">
                        <p>Bài Viết Mới</p>
                    </div>
                    <div class="suggest__body">
                    </div>
                </div>
            </div>
        </div>
        `
        this.renderSuggest();
    }
    async renderSuggest(){
        let data = [];
        let db = await firebase.firestore().collection("review_moive").get();
        for ( let doc of db.docs){
            data.push(doc.data())
        }
        let randomArr = Array.from(Array(data.length).keys());
        let randomNumber = [];
        randomNumber.push(shuffle(randomArr))
        this._shadowRoot.querySelector(".suggest__body").innerHTML = /*html*/`
        <div class="item">
            <img src="${data[randomNumber[0][7]].imgblur}" alt="">
            <p class="suggest__text">${data[randomNumber[0][7]].name}</p>
        </div>
        <div class="item">
            <img src="${data[randomNumber[0][2]].imgblur}" alt="">
            <p class="suggest__text">${data[randomNumber[0][2]].name}</p>
        </div>
        <div class="item">
            <img src="${data[randomNumber[0][3]].imgblur}" alt="">
            <p class="suggest__text">${data[randomNumber[0][3]].name}</p>
        </div>
        <div class="item">
            <img src="${data[randomNumber[0][1]].imgblur}" alt="">
            <p class="suggest__text">${data[randomNumber[0][1]].name}</p>
        </div>
        <div class="item">
            <img src="${data[randomNumber[0][6]].imgblur}" alt="">
            <p class="suggest__text">${data[randomNumber[0][6]].name}</p>
        </div>
        <div class="item">
            <img src="${data[randomNumber[0][9]].imgblur}" alt="">
            <p class="suggest__text">${data[randomNumber[0][9]].name}</p>
        </div>
        `
        let dataClick = [...this._shadowRoot.querySelectorAll(".suggest__text")];
        for ( let i = 0 ; i < dataClick.length; i++){
            dataClick[i].addEventListener("click", () => {
                localStorage.setItem("idReview",dataClick[i].innerText);
                window.location.href = "/review.html"
            })
        }
    }
}
window.customElements.define("suggest-review", SuggestReview);