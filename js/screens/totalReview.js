import {BaseComponent} from '../screens/BaseComponent.js'
class TotalReview extends BaseComponent {
    constructor(){
        super();
    }
     async render(){
         let dataReview =[];
        let idReview = localStorage.getItem("idReview");
            let db = await firebase.firestore().collection("review_moive").where("name","==",idReview).get();
            for ( let doc of db.docs){
               dataReview.push(doc.data());
            }
        this._shadowRoot.innerHTML = /*html*/`
        <intro-movie img-blur="${dataReview[0].imgblur}"
        img="${dataReview[0].img}"
        title="${dataReview[0].name}"
        admin="${dataReview[0].by}"
        trailer="${dataReview[0].trailer}"
        date-modified = "${dataReview[0].time}"
        owner="${dataReview[0].owner}"
        cast="${dataReview[0].cast}"
        make="${dataReview[0].make}"
        ></intro-movie>
        <review-movie
        name="${dataReview[0].name}"
        des-1="${dataReview[0].content}"
        img-1="${dataReview[0].img1}"
        des-2="${dataReview[0].des1}"
        img-2="${dataReview[0].img2}"
        des-3="${dataReview[0].des2}"
        img-3="${dataReview[0].img3}"
        des-4="${dataReview[0].des3}"
        ></review-movie>
        <suggest-review></suggest-review>
        `;
    }
}


window.customElements.define('total-review',TotalReview)