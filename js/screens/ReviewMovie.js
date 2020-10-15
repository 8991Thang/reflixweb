import {BaseComponent} from '../screens/BaseComponent.js';
const style = /*html */ `
    <style>
        *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;

}
.review-container{
    margin-top: 0px;
    position: relative;
    display: block;
    background-color: #081b27;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    height: calc(100% + 500px)
}
.container{
    height
    position: relative;
    width: 80%;
    display:flex;
    justify-content:center;
    margin-top:5%;
}
.review-content{
    width: 72%;
    position: relative;
    border-radius: 10px;
    color: #9cabb6;
    font-size: 20px;
    line-height: 23px;
}
h2 {
    padding-top: 20px;
    margin-bottom: 20px;
    color: #f1b722;
    font-size: 30px;
    line-height: 36px;
    font-weight: 300;
}
.content-detail img {
    width:500px;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 10px;
}
.content-detail p {
    line-height:35px;
}
.content-detail div {
    display: flex;
    justify-content: center;
}
.comment-area{
    height:auto;
    margin-top: 5%;
}

.space{
    display: flex;
    justify-content:space-between;
}
.comment {
    width: 90%;
    height: 70px;
    padding: 10px;
    background-color: #d0e2bc;
    outline : none;
    border-radius:5px;
}
.btn-comment {
    margin-bottom: 30px;
    width: 100%;
    display:flex;
    justify-content:flex-end;
}
.btn-comment button {
    border: none;
    outline: none;
    width: 70px;
    height: 40px;
    color: #ffffff;
    cursor: pointer;
    border-radius: 5px;
    background-color:#3898EC;

}
.comment-area img {
    height: 70px;
    width:70px;
    border-radius:none!important;
}
.__user{
    display: flex;
    flex-direction: column;

}
.__user-action{
    display: flex;
    width : 25%;
    font-size: 16px;
    justify-content:space-between;
}
.user__{
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80px;
}
.__user-action p:first-child{
    color: #385898;

}
.__user-name{
    color: #385898;
    cursor: pointer;
    font-weight: 700;
}
.__user-cmt{
    color:white;
}
.d-flex{
    margin-bottom: 10px;
    display:flex;
    justify-content:space-between;
}
.img-avatar{
    width:100%;
    height:80px;
}
.like{
    cursor: pointer;
}
.numberLike{
    color: #385898; 
}

    </style>
`;

class ReviewMovie extends BaseComponent {
    constructor() {
        super();
        this.props = {
            "name" : '',
            "des-1": '',
            "des-2": '',
            "des-3": '',
            "des-4": '',
            "img-1":'',
            "img-2":'',
            "img-3":'',
            "cmt": '',
        }
    }

    static get observedAttributes() {
        return ['des-1', 'des-2', 'des-3', 'des-4',"name","img-1","img-2","img-3","cmt"]
    }
    render() {
        let dataUser = JSON.parse(localStorage.getItem("user"));
        let avatarDefault = 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
        let avatar = !dataUser ? avatarDefault : dataUser.avatar; 
        this._shadowRoot.innerHTML = /*html */ `
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">

        ${style}
        <div class="review-container">
            <div class="container">
                <div class="review-content">
                    <div class="content-detail">
                        <h2>Nội dung phim ${this.props.name}</h2>
                        <p>
                            ${this.props["des-1"]}
                        </p>
                        <div>
                            <img src="${this.props["img-1"]}" alt="">
                        </div>
                        <h2>Review chi tiết</h2>
                        <p>
                            ${this.props["des-2"]}
                        </p>
                        <div>
                            <img src="${this.props["img-2"]}" alt="">
                        </div>
                        <p>
                        ${this.props["des-3"]}
                        </p>
                        <div>
                            <img src="${this.props["img-3"]}" alt="">
                        </div>
                        <p>
                        ${this.props["des-4"]}
                        </p>
                    </div>
                    <div class="comment-area">
                            <h2>Để lại ý kiến của bạn</h2>
                            <div>
                                <div class="space">
                                <img src="${avatar}" alt="">
                                <input class="comment" placeholder="Nhập nội dung...">
                                </div>
                            </div>
                            <br>
                            <div class="btn-comment">
                            <button class="btn-cmt">Bình luận</button>
                            </div>
                            <div class="comment__user">
                            <div class="__user">
                            </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
        `;
        let userComment = this._shadowRoot.querySelector(".__user");
        let id = localStorage.getItem("idReview");
        async function getDataCmt(){
            let dbCmt = await firebase.firestore().collection("review_moive").where("name","==",id).get();
                for ( let db of dbCmt.docs){
                    let dbCmt = db.data().commentTotal;
                    if(dbCmt){
                        userComment.innerHTML="";
                        for ( let i of dbCmt){
                            userComment.innerHTML += /*html*/`
                        <div class="d-flex">
                        <div>
                        <img class="img-avatar" src="${i.avatar}" alt="">
                        </div>  
                    <div  class="user__">
                        <div class="__user-name">${i.username}</div>
                        <div class="__user-cmt">${i.content}</div>
                    <div class="__user-action">
                        <p class="like">Thích.</p>
                        <p class="numberLike">0 </p>
                        <p> / ${i.time}.</p>
                    </div>
                    </div>
                    </div>
                    `
                    }
                    
                    }
                }
        }
        getDataCmt();
        let btnInput = this._shadowRoot.querySelector(".comment");
        let commentBtn = this._shadowRoot.querySelector(".btn-cmt");
        function btnCmt(){
            commentBtn.addEventListener("click",async () =>{
                if(!dataUser){
                    alert("Vui lòng đăng nhập trước khi comment!!");
                    btnInput.value = "";
                    return;
                }
                if(!btnInput.value){
                    alert("Vui Lòng điền comment!!");
                    return;
                }
                if(dataUser){
                    let commentTotal = {
                        commentTotal: firebase.firestore.FieldValue.arrayUnion({
                            content:btnInput.value,
                            email : dataUser.email,
                            time: new Date().toLocaleString(),
                            name: id,
                            avatar: dataUser.avatar,
                            username: dataUser.name,
                        }),
                    }
                    let db = await firebase.firestore().collection("review_moive").where("name","==",id)
                    .get()
                    .then(async function (x){
                        let xId = x.docs[0].id;
                        await firebase.firestore().collection("review_moive").doc(xId).update(commentTotal);
                        btnInput.value = "";
                       
                    })
                    .then(function(){
                        getDataCmt();
                    })
                }
            })
        }
        btnCmt()
    }
}

window.customElements.define('review-movie', ReviewMovie)