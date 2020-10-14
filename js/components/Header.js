import { BaseComponent } from "../screens/BaseComponent.js";
let dataImg = []; 
const style = /*html*/ `
<style>
*{
    font-family: 'Roboto', sans-serif;
	font-smoothing: antialiased;
    margin : 0;
    padding : 0;
	box-sizing : border-box;
	font-family: 'Quicksand', sans-serif;
}
a{
	text-decoration: none;
}

.fixed__pc{
	width:100vw; !important;
    top: 0 !important;
    position: fixed !important;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 75px;
	animation: blur 1s;
	background-color: #191025!important;
    border-bottom: 1px solid #ea3b92;
}
@keyframes blur
{0%{opacity:0}
100%{opacity:1}}
.header-section {
	position: absolute;
	width: 100%;
	left: 0;
	top: 0;
	z-index: 999;
	display:flex;
	align-items: center;
	justify-content: center;
}
.edit-nav{
	width: 1550px;
	display:flex;
	align-items: center;
	justify-content:space-between;

}
.header-warp {
	display: flex;
	justify-content:flex-end;
	width:100%;
	margin: 0 auto;
}
.hide{
	display: none !important;
}
.header-social p,
.footer-social p,
.geme-social-share p {
	display: inline-block;
	color: #9190a5;
	font-size: 16px;
	padding-top: 4px;
}

.header-social a img,
.footer-social a img,
.geme-social-share a {
	display: inline-flex;
	width: 32px;
	height: 32px;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	color: #fff;
	font-size: 12px;
	margin-left: 13px;
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}
.header-social{
	width:90%;
	border-bottom: 2px solid #ff009e;
	margin-top :10px;
	position: relative;
	margin-bottom: 10px;
}
.nav_search{
	position: absolute;
	top:50%;
	left:50%;
	transform: translate(-50%, -50%);
	z-index:999;
}
.nav_search input{
	border:none;
	background-color: #fff;
    border: 2px solid #eb1689;
    border-radius: 20px;
    padding: 5px 30px;
    color: #eb1689;
	box-shadow: none;
	outline : none;
	transition: all 0.5s ease;
}
.focusone{
	padding: 5px 100px !important;
}
.btn__search{
	font-size: 21px;
    color: #eb1689;
    position: absolute;
    top: 6px;
	right: 38px;
	cursor: pointer;
}
.header-social a img:hover,
.footer-social a img:hover,
.geme-social-share a:hover {
	background: red;
}
.sticky{
	position:sticky !important;
	top: 0 !important;
}
.header-bar-warp {
	height:80px;
	align-items: center;
		justify-content: space-between !important;
}

.site-logo {
    float: left;
}
.site-logo > img {
    width : 200px;
}

.user-panel {
	font-size: 16px;
	font-weight: 500;
	color: #fff;
	right: 153px;
	top:10px;
    position: absolute;
}
.top-nav-area{
	width:1300px;
	<!-- height:100%; -->
	display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row-reverse;
}
.user-panel a {
    color: #fff;
    font-family: 'Roboto', sans-serif;
}

.user-panel a:hover {
	color: red;
}

.main-menu {
	list-style: none;
	text-align: center;
	margin: 0;
	margin-right: 274px;
	height:100%;
}

.main-menu li {
	line-height: 80px;
    height: 100%;
	display: inline-block;
	position: relative;
	margin-left:40px;
}

.main-menu li a {
	text-transform: uppercase;
	letter-spacing: 1.5px;
    text-decoration: none;
    display: block;
	font-size: 16px;
	font-weight: 500;
	color: #fff;
	width:100%;
	text-align: center;
	position: relative;
	transition: all 0.5s ease;
	background-color:transparent;
}
.active{
	width: 130px !important;
	background-color: #ea3b92 !important;
}

.li-style:hover{
	
}
.li-style:hover .li-style a:after{	
	visibility: visible;
}
.hv{
	position:absolute;
	width:0%;
	height:3%;
	bottom:0;
	border-radius: 10px;
    background: #ea3b92;
	left:0;
	z-index:-1;
	opacity:0;
	transition: all 0.5s ease;
}
.li-style:hover .hv{
	opacity:1;
	width:100%;

}
.active:after{
	content: '';
    transform: skewX(-15deg);
    -webkit-transform: skewX(-15deg);
    background: #ea3b92;
    position: absolute;
    top: 0;
    width: 29px;
    bottom: 0;
    right: -15px;
    z-index: -1;
}
.main-menu li a i {
	color: #928d92;
}

.main-menu li a:hover {
}


.main-menu li:hover .sub-menu {
	visibility: visible;
	opacity: 1;
	margin-top: 0;
}


.after{
    cursor: pointer;
    background-repeat: no-repeat;
	background-position: right center;  
	
}
.afterUser{
	cursor: pointer;
    position: absolute;
	content: "";
	width:40px;
	right: -23px;
    top: 27px;
   background-image: url(../img/icons/arrow-down.png);
    background-repeat: no-repeat;
	background-position: right center;
	transition: all 0.5s ease;
}
.xoayngang{
	width: auto;
	justify-content:space-between !important;
	flex-direction: row-reverse !important;
}
.main-menu li .sub-menu {
	position: absolute;
	list-style: none;
	text-align: left;
	left: 0;
	top: 105%;
	visibility: hidden;
	opacity: 0;
	margin-top: 50px;
	background: #fff;
	z-index: 99;
	transition: all 0.4s ease-in-out;
    box-shadow: 0px 0px 10px black;	
	display: flex;
	flex-direction: row;
    justify-content: space-between;
}

.main-menu li .sub-menu li {
    padding-top: 10px;
    cursor: pointer;
	display: block;
}
.sub-menu li{
	text-align: center;
	line-height: 50px;
	height: 70px;
	width : 120px;
	background-color: #ea3b92 !important;
	margin:0;
    color : white;

}
.sub-menu li:hover{
	
    color : white;
	background: #191025 !important;
}
.main-menu li .sub-menu li a {
	display: block;
	color: #000;
	margin-right: 0;
	padding: 8px 30px;
}

.main-menu li .sub-menu li a:after {
	display: none;
}

.slicknav_menu {
	display: none;
}
.user{
	font-weight:700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.user img{
	height: 60px;
	border-radius:50%;
	width:60px;
}
.user div {
	padding-bottom: 8px;
}
.user-menu{
	width: 200px;
	margin-top:10px;
	list-style: none;
	float:left;
	position: absolute;
	text-align : center;
	right: -33px;
	top : 170%;
	background : #302525;
	border : 1.5px solid white;
	opacity : 0;
	visibility:hidden;
	transition : all 0.9s ease;
}
.user-menu li:hover{
	background:black;
}
.user-menu li:first-child{
	background : blue;
	border:none;
}
.user-menu li:first-child:hover{
	background : #003366
}
.show{
	top : 86%;
	opacity : 1;
}
.rotate{
	transform:rotateX(180deg)
}	
.openModal{
	cursor:pointer;
}
.openModal li {
	list-style-type : none;
}
.user-menu li:last-child{
	background : #FF4646;
}
.user-menu li:last-child:hover{
	background : #A80000 !important;
}
.user-menu li {
	cursor : pointer;
	font-size:15px;
	border-top : 1px solid pink;
	padding-bottom : 17px;
	display:flex;
	justify-content:center;
	align-items: center;
	padding-right: 10px;
	padding-top:30px;
	display: block;
}
.sub-menu ul:before{
	content :"asd";
	width:100px;
	height:100px;
	background :red;
	position: absolute;
}
.box{
	position:fixed;
	top:50%;
	left:50%;
	width:700px;
	height: 700px;
	transform: translate(-50%,-50%);
	z-index: 9999;
	opacity: 0;
	visibility: hidden;
	transition: all 0.5s ease;
}
.show{
	opacity:1;
	visibility: visible;
}.show1{
	opacity:1 !important;
	visibility: visible !important;
}
.closer{
	position: absolute;
	top:0;
	right:0;
	width: 40px;
	height: 40px;
	border-radius:50%;
	display:flex;
	justify-content:center;
	align-items: center;
	background: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);
	cursor: pointer;
}
.closer svg{
	font-weight: 1000;
	color:white;
	font-size:25px;
}
.blur{
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background:rgb(0,0,0,0.7);
	z-index:999;
	display:none;
}
.show__blur{
	display:block;
}
a, a:hover {
	 text-decoration: none;
}
 .icon {
	 display: inline-block;
	 width: 1em;
	 height: 1em;
	 stroke-width: 0;
	 stroke: currentColor;
	 fill: currentColor;
}
 .wrapper {
	 width: 100%;
	 width: 100%;
	 height: auto;
	 padding: 50px 20px;
	 display: flex;
	 border-radius: 12px;
	 background-image: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);
	 display: flex;
	 background-image: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);
}
@media screen and (max-width: 768px) {
	 .wrapper {
		 height: auto;
		 min-height: 100vh;
		 padding-top: 100px;
	}
}
 .profile-card {
	 width: 100%;
	 min-height: 460px;
	 margin: auto;
	 box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
	 background: #fff;
	 border-radius: 12px;
	 max-width: 700px;
	 position: relative;
}
 .profile-card.active .profile-card__cnt {
	 filter: blur(6px);
}
 .profile-card.active .profile-card-message, .profile-card.active .profile-card__overlay {
	 opacity: 1;
	 pointer-events: auto;
	 transition-delay: 0.1s;
}
 .profile-card.active .profile-card-form {
	 transform: none;
	 transition-delay: 0.1s;
}
 .profile-card__img {
	 width: 150px;
	 height: 150px;
	 margin-left: auto;
	 margin-right: auto;
	 transform: translateY(-50%);
	 border-radius: 50%;
	 overflow: hidden;
	 position: relative;
	 z-index: 4;
	 box-shadow: 0px 5px 50px 0px #6c44fc, 0px 0px 0px 7px rgba(107, 74, 255, 0.5);
}
 @media screen and (max-width: 576px) {
	 .profile-card__img {
		 width: 120px;
		 height: 120px;
	}
}
 .profile-card__img img {
	 display: block;
	 width: 100%;
	 height: 100%;
	 object-fit: cover;
	 border-radius: 50%;
}
 .profile-card__cnt {
	 margin-top: -35px;
	 text-align: center;
	 padding: 0 20px;
	 padding-bottom: 40px;
	 transition: all 0.3s;
}
 .profile-card__name {
	 font-weight: 700;
	 font-size: 24px;
	 color: #6944ff;
	 margin-bottom: 15px;
}
 .profile-card__txt {
	 font-size: 18px;
	 font-weight: 500;
	 color: #324e63;
	 margin-bottom: 15px;
}
 .profile-card__txt strong {
	 font-weight: 700;
}
 .profile-card-loc {
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 font-size: 18px;
	 font-weight: 600;
}
 .profile-card-loc__icon {
	 display: inline-flex;
	 font-size: 27px;
	 margin-right: 10px;
}
 .profile-card-inf {
	 display: flex;
	 justify-content: center;
	 flex-wrap: wrap;
	 align-items: flex-start;
	 margin-top: 35px;
}
 .profile-card-inf__item {
	 padding: 10px 35px;
	 min-width: 150px;
}
 @media screen and (max-width: 768px) {
	 .profile-card-inf__item {
		 padding: 10px 20px;
		 min-width: 120px;
	}
}
 .profile-card-inf__title {
	 font-weight: 700;
	 font-size: 27px;
	 color: #324e63;
}
 .profile-card-inf__txt {
	 font-weight: 500;
	 margin-top: 7px;
}
 .profile-card-social {
	 margin-top: 25px;
	 display: flex;
	 justify-content: space-around;
	 align-items: center;
	 flex-wrap: wrap;
}
 .profile-card-social__item {
	 display: inline-flex;
	 width: 55px;
	 height: 55px;
	 margin: 15px;
	 border-radius: 50%;
	 align-items: center;
	 justify-content: center;
	 color: #fff;
	 background: #405de6;
	 box-shadow: 0px 7px 30px rgba(43, 98, 169, 0.5);
	 position: relative;
	 font-size: 21px;
	 flex-shrink: 0;
	 transition: all 0.3s;
}
 @media screen and (max-width: 768px) {
	 .profile-card-social__item {
		 width: 50px;
		 height: 50px;
		 margin: 10px;
	}
}
 @media screen and (min-width: 768px) {
	 .profile-card-social__item:hover {
		 transform: scale(1.2);
	}
}
 .profile-card-social__item.facebook {
	 background: linear-gradient(45deg, #3b5998, #0078d7);
	 box-shadow: 0px 4px 30px rgba(43, 98, 169, 0.5);
}
 .profile-card-social__item.twitter {
	 background: linear-gradient(45deg, #1da1f2, #0e71c8);
	 box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.7);
}
 .profile-card-social__item.instagram {
	 background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
	 box-shadow: 0px 4px 30px rgba(120, 64, 190, 0.6);
}
 .profile-card-social__item.behance {
	 background: linear-gradient(45deg, #1769ff, #213fca);
	 box-shadow: 0px 4px 30px rgba(27, 86, 231, 0.7);
}
 .profile-card-social__item.github {
	 background: linear-gradient(45deg, #333, #626b73);
	 box-shadow: 0px 4px 30px rgba(63, 65, 67, 0.6);
}
 .profile-card-social__item.codepen {
	 background: linear-gradient(45deg, #324e63, #414447);
	 box-shadow: 0px 4px 30px rgba(55, 75, 90, 0.6);
}
 .profile-card-social__item.link {
	 background: linear-gradient(45deg, #d5135a, #f05924);
	 box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.6);
}
 .profile-card-social .icon-font {
	 display: inline-flex;
}
 .profile-card-ctr {
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 margin-top: 40px;
}
 @media screen and (max-width: 576px) {
	 .profile-card-ctr {
		 flex-wrap: wrap;
	}
}
 .profile-card__button {
	 background: none;
	 border: none;
	 font-family: 'Quicksand', sans-serif;
	 font-weight: 700;
	 font-size: 19px;
	 margin: 15px 35px;
	 padding: 15px 40px;
	 min-width: 201px;
	 border-radius: 50px;
	 min-height: 55px;
	 color: #fff;
	 cursor: pointer;
	 backface-visibility: hidden;
	 transition: all 0.3s;
}
 @media screen and (max-width: 768px) {
	 .profile-card__button {
		 min-width: 170px;
		 margin: 15px 25px;
	}
}
 @media screen and (max-width: 576px) {
	 .profile-card__button {
		 min-width: inherit;
		 margin: 0;
		 margin-bottom: 16px;
		 width: 100%;
		 max-width: 300px;
	}
	 .profile-card__button:last-child {
		 margin-bottom: 0;
	}
}
 .profile-card__button:focus {
	 outline: none !important;
}
 @media screen and (min-width: 768px) {
	 .profile-card__button:hover {
		 transform: translateY(-5px);
	}
}
 .profile-card__button:first-child {
	 margin-left: 0;
}
 .profile-card__button:last-child {
	 margin-right: 0;
}
 .profile-card__button.button--blue {
	 background: linear-gradient(45deg, #1da1f2, #0e71c8);
	 box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.4);
}
 .profile-card__button.button--blue:hover {
	 box-shadow: 0px 7px 30px rgba(19, 127, 212, 0.75);
}
 .profile-card__button.button--orange {
	 background: linear-gradient(45deg, #d5135a, #f05924);
	 box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.35);
}
 .profile-card__button.button--orange:hover {
	 box-shadow: 0px 7px 30px rgba(223, 45, 70, 0.75);
}
 .profile-card__button.button--gray {
	 box-shadow: none;
	 background: #dcdcdc;
	 color: #142029;
}
 .profile-card-message {
	 width: 100%;
	 height: 100%;
	 position: absolute;
	 top: 0;
	 left: 0;
	 padding-top: 130px;
	 padding-bottom: 100px;
	 opacity: 0;
	 pointer-events: none;
	 transition: all 0.3s;
}
 .profile-card-form {
	 box-shadow: 0 4px 30px rgba(15, 22, 56, 0.35);
	 max-width: 80%;
	 margin-left: auto;
	 margin-right: auto;
	 height: 100%;
	 background: #fff;
	 border-radius: 10px;
	 padding: 35px;
	 transform: scale(0.8);
	 position: relative;
	 z-index: 3;
	 transition: all 0.3s;
}
 @media screen and (max-width: 768px) {
	 .profile-card-form {
		 max-width: 90%;
		 height: auto;
	}
}
 @media screen and (max-width: 576px) {
	 .profile-card-form {
		 padding: 20px;
	}
}
 .profile-card-form__bottom {
	 justify-content: space-between;
	 display: flex;
}
 @media screen and (max-width: 576px) {
	 .profile-card-form__bottom {
		 flex-wrap: wrap;
	}
}
 .profile-card textarea {
	 width: 100%;
	 resize: none;
	 height: 210px;
	 margin-bottom: 20px;
	 border: 2px solid #dcdcdc;
	 border-radius: 10px;
	 padding: 15px 20px;
	 color: #324e63;
	 font-weight: 500;
	 font-family: 'Quicksand', sans-serif;
	 outline: none;
	 transition: all 0.3s;
}
 .profile-card textarea:focus {
	 outline: none;
	 border-color: #8a979e;
}
 .profile-card__overlay {
	 width: 100%;
	 height: 100%;
	 position: absolute;
	 top: 0;
	 left: 0;
	 pointer-events: none;
	 opacity: 0;
	 background: rgba(22, 33, 72, 0.35);
	 border-radius: 12px;
	 transition: all 0.3s;
}
.img__profile{
	object-fit:cover;
	object-position: 50% 50%;
}
.opacity-bg{
	background : rgb(8, 22, 36,0.6) !important;
}
.right{
	right:85px !important;
	top: 7px; !important; 
}
.box-edit{
	position:fixed;
	top:50%;
	left: 50%;
	transform:translate(-50%, -50%);
	z-index:9999;
	opacity: 0;
	visibility: hidden;
	transition: all 0.5s ease;
}
.comment__list,.show__like{
	cursor: pointer;
	transition: all 0.5s ease;
}
.comment__list:hover,.show__like:hover{
	transform:scale(1.3)
}
.popcorn{
	width:300px;
	text-align:right;
}
.popcorn img{
	width:70px;
	margin-right: 30px;
}
.popcorn img:nth-child(1),.popcorn img:nth-child(2){
	width:45px;
}
.login{
	margin-top: 15px !important;
}
.margin-r{
	margin-right: 15px;
}
</style>
`;
class Header extends BaseComponent {
  constructor() {
    super();
  }

  async render() {
    const data = localStorage.getItem("user");
    const dataConvert = JSON.parse(data);
    if (data) {
		let adUser = await firebase.firestore().collection("users").where("email","==",dataConvert.email).get();
      if (adUser.docs[0].data().admin == true) {
        var admin = `<li><a target="_blank" tag href="/Dashbroad/admin/index.html">Manager</a></li>`;
      } else {
        var admin = "";
	  }
	  let datafb = await firebase.firestore().collection("users").where("email","==",dataConvert.email).get();
	  for (let userData of datafb.docs){
		  var dataUser = `
				<div class="user after">
					<div><img src="${userData.data().avatar}" alt=""></div>
					<ul class="openModal">
						<li>${userData.data().name}
					<ul class="user-menu">
						<li class="hoso">Hồ Sơ</li>
						${admin}
						<li class="chinhsua">Chỉnh Sửa</li>
						<li class="log-out">Đăng Xuất</li>
						</ul>	
						</li>
					</ul>
					<div class="afterUser"></div>
				</div>
				
				`;
	  }
      
    }
    var userName = data
      ? `${dataUser}`
      : ` <div class="login"><a href="/index2.html#!/login">Login</a> / <a href="/index2.html#!/register">Register</a> </div>`;

    this._shadowRoot.innerHTML = /*html*/ `
		<!-- Page Preloder -->
	<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
	

    ${style} 
	<div id="preloder">
    <div class="loader"></div>
</div>

<!-- Header section -->
<header class="header-section">
	<div class="edit-nav">
	<div class="">
	<a href="/index.html" class="site-logo">
		<img src="./img/logo/logo2.png" alt="reflix">
	</a>
</div>
<div class="header-warp">
	<div>
	<div class="header-social d-flex justify-content-between align-items-center">
	<div class="popcorn">
	<img src="./img/logo/Firstfear-Whistlepuff-Video-file.ico" alt="">
	<img src="./img/logo/img_560158.png" alt="">
		<img src="./img/logo/popcorn-movie-time-512.webp" alt="">
	</div>
	<div>
		<p>Follow us:</p>
		<a href="#"><img src="https://img.icons8.com/plasticine/2x/facebook-new.png" alt="fb" srcset=""></a>
		<a href="#"><img style="width : 30px;height:29px"  src="https://i.pinimg.com/originals/36/03/d6/3603d632370eb53f2fd0e59ba7de236b.png" alt="tw"></a>
		<a href="#"><img src="https://img.icons8.com/plasticine/2x/google-logo.png" alt="" srcset=""></a>
	</div>
	<div class="nav_search">
		<input class="input__search" type="text" placeholder="Tìm Kiếm">
		<div class="btn__search">
			<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
				<path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
			</svg>
		</div>
	</div>
</div>
<div class="sticky header-bar-warp d-flex">
	<nav class="top-nav-area">
		<div class="user-panel">
		   ${userName}
		</div>
		<!-- Menu -->
		<ul class="main-menu primary-menu">
			<li><a href="/index.html" class="active">Trang Chủ </a></li>
			<li class="li-style"><a href="/index2.html#!/review">Review Phim <span class="hv"></span></a></li>
			<li class="li-style"><a href="" class="arrow-down">Thể Loại <span class="hv"></span></a>
				<ul class="sub-menu">
					<li class="type-movie" >Hành Động</li>
					<li class="type-movie">Tình Cảm</li>
					<li class="type-movie">Viễn Tưởng</li>
					<li class="type-movie">Hoạt Hình</li>
					<li class="type-movie">Hài Hước</li>
					<li class="type-movie">Kinh Dị</li>
				</ul>
			</li>
			<li class="li-style"><a href="#paral" class="arrow-down">News Movie <span class="hv"></span></a>
			</li>
			<li class="li-style"><a href="contact.html">Giới Thiệu Reflix <span class="hv"></span></a></li>
		</ul>
	</nav>
</div>
	</div>
</div>
	</div>
</header>
<div class="box">
	<div class="hoso">
	<div class="wrapper">
	<div class="profile-card js-profile-card">
	  <div class="profile-card__img">
		<img class="img__profile" src="#" alt="">
	  </div>
  
	  <div class="profile-card__cnt js-profile-cnt">
		<div class="profile-card__name"></div>
		<div class="profile-card__txt">Thành Viên : <strong class="thanhvien">Cửa Lò</strong></div>
		<div class="profile-card-loc">
		  <span class="profile-card-loc__icon">
			<svg class="icon"><use xlink:href="#icon-location"></use></svg>
		  </span>
  
		  <span class="profile-card-loc__txt">
			Istanbul, Turkey
		  </span>
		</div>
  
		<div class="profile-card-inf">
		  <div class="profile-card-inf__item">
			<div class="profile-card-inf__title">1598</div>
			<div class="profile-card-inf__txt">Followers</div>
		  </div>
  
		  <div class="profile-card-inf__item">
			<div class="profile-card-inf__title">65</div>
			<div class="profile-card-inf__txt">Following</div>
		  </div>
  
		  <div class="profile-card-inf__item show__like">
			<div class="profile-card-inf__title like">0</div>
			<div class="profile-card-inf__txt">Like</div>
		  </div>
  
		  <div class="profile-card-inf__item comment__list">
			<div class="profile-card-inf__title number">0</div>
			<div class="profile-card-inf__txt">Comment</div>
		  </div>
		</div>
  
		<div class="profile-card-social">
		  <a href="https://lh3.googleusercontent.com/PKMJ3Guz6fCvoJPuIf0LrzdkN__8xBoOPDHBQUQ73VRfFslu8naBm-RpxF4ps3gVEZs" class="profile-card-social__item facebook" target="_blank">
			<span class="icon-font">
				<svg class="icon"><use xlink:href="#icon-facebook"></use></svg>
			</span>
		  </a>
  
		  <a href="https://lh3.googleusercontent.com/PKMJ3Guz6fCvoJPuIf0LrzdkN__8xBoOPDHBQUQ73VRfFslu8naBm-RpxF4ps3gVEZs" class="profile-card-social__item twitter" target="_blank">
			<span class="icon-font">
				<svg class="icon"><use xlink:href="#icon-twitter"></use></svg>
			</span>
		  </a>
  
		  <a href="https://lh3.googleusercontent.com/PKMJ3Guz6fCvoJPuIf0LrzdkN__8xBoOPDHBQUQ73VRfFslu8naBm-RpxF4ps3gVEZs" class="profile-card-social__item instagram" target="_blank">
			<span class="icon-font">
				<svg class="icon"><use xlink:href="#icon-instagram"></use></svg>
			</span>
		  </a>  
		  <a href="https://lh3.googleusercontent.com/PKMJ3Guz6fCvoJPuIf0LrzdkN__8xBoOPDHBQUQ73VRfFslu8naBm-RpxF4ps3gVEZs" class="profile-card-social__item github" target="_blank">
			<span class="icon-font">
				<svg class="icon"><use xlink:href="#icon-github"></use></svg>
			</span>
		  </a>
  
		  <a href="https://lh3.googleusercontent.com/PKMJ3Guz6fCvoJPuIf0LrzdkN__8xBoOPDHBQUQ73VRfFslu8naBm-RpxF4ps3gVEZs" class="profile-card-social__item codepen" target="_blank">
			<span class="icon-font">
				<svg class="icon"><use xlink:href="#icon-codepen"></use></svg>
			</span>
		  </a>
  
		  <a href="https://lh3.googleusercontent.com/PKMJ3Guz6fCvoJPuIf0LrzdkN__8xBoOPDHBQUQ73VRfFslu8naBm-RpxF4ps3gVEZs" class="profile-card-social__item link" target="_blank">
			<span class="icon-font">
				<svg class="icon"><use xlink:href="#icon-link"></use></svg>
			</span>
		  </a>
  
		</div>
  
		<div class="profile-card-ctr">
		  <button class="profile-card__button button--blue js-message-btn">Message</button>
		  <button class="profile-card__button button--orange">Follow</button>
		</div>
	  </div>
  
	  <div class="profile-card-message js-message">
		<form class="profile-card-form">
		  <div class="profile-card-form__container">
			<textarea placeholder="Say something..."></textarea>
		  </div>
  
		  <div class="profile-card-form__bottom">
			<button class="profile-card__button button--blue js-message-close">
			  Send
			</button>
  
			<button class="profile-card__button button--gray js-message-close">
			  Cancel
			</button>
		  </div>
		</form>
  
		<div class="profile-card__overlay js-message-close"></div>
	  </div>
  
	</div>
  
  </div>
  
  <svg hidden="hidden">
	<defs>
	  <symbol id="icon-codepen" viewBox="0 0 32 32">
		<title>codepen</title>
		<path d="M31.872 10.912v-0.032c0-0.064 0-0.064 0-0.096v-0.064c0-0.064 0-0.064-0.064-0.096 0 0 0-0.064-0.064-0.064 0-0.064-0.064-0.064-0.064-0.096 0 0 0-0.064-0.064-0.064 0-0.064-0.064-0.064-0.064-0.096l-0.192-0.192v-0.064l-0.064-0.064-14.592-9.696c-0.448-0.32-1.056-0.32-1.536 0l-14.528 9.696-0.32 0.32c0 0-0.064 0.064-0.064 0.096 0 0 0 0.064-0.064 0.064 0 0.064-0.064 0.064-0.064 0.096 0 0 0 0.064-0.064 0.064 0 0.064 0 0.064-0.064 0.096v0.064c0 0.064 0 0.064 0 0.096v0.064c0 0.064 0 0.096 0 0.16v9.696c0 0.064 0 0.096 0 0.16v0.064c0 0.064 0 0.064 0 0.096v0.064c0 0.064 0 0.064 0.064 0.096 0 0 0 0.064 0.064 0.064 0 0.064 0.064 0.064 0.064 0.096 0 0 0 0.064 0.064 0.064 0 0.064 0.064 0.064 0.064 0.096l0.256 0.256 0.064 0.032 14.528 9.728c0.224 0.16 0.48 0.224 0.768 0.224s0.544-0.064 0.768-0.224l14.528-9.728 0.32-0.32c0 0 0.064-0.064 0.064-0.096 0 0 0-0.064 0.064-0.064 0-0.064 0.064-0.064 0.064-0.096 0 0 0-0.064 0.064-0.064 0-0.064 0-0.064 0.064-0.096v-0.032c0-0.064 0-0.064 0-0.096v-0.064c0-0.064 0-0.096 0-0.16v-9.664c0-0.064 0-0.096 0-0.224zM17.312 4l10.688 7.136-4.768 3.168-5.92-3.936v-6.368zM14.56 4v6.368l-5.92 3.968-4.768-3.168 10.688-7.168zM2.784 13.664l3.392 2.304-3.392 2.304c0 0 0-4.608 0-4.608zM14.56 28l-10.688-7.136 4.768-3.2 5.92 3.936v6.4zM15.936 19.2l-4.832-3.232 4.832-3.232 4.832 3.232-4.832 3.232zM17.312 28v-6.432l5.92-3.936 4.8 3.168-10.72 7.2zM29.12 18.272l-3.392-2.304 3.392-2.304v4.608z"></path>
	  </symbol>
  
	  <symbol id="icon-github" viewBox="0 0 32 32">
		<title>github</title>
		<path d="M16.192 0.512c-8.832 0-16 7.168-16 16 0 7.072 4.576 13.056 10.944 15.168 0.8 0.16 1.088-0.352 1.088-0.768 0-0.384 0-1.632-0.032-2.976-4.448 0.96-5.376-1.888-5.376-1.888-0.736-1.856-1.792-2.336-1.792-2.336-1.44-0.992 0.096-0.96 0.096-0.96 1.6 0.128 2.464 1.664 2.464 1.664 1.44 2.432 3.744 1.728 4.672 1.344 0.128-1.024 0.544-1.728 1.024-2.144-3.552-0.448-7.296-1.824-7.296-7.936 0-1.76 0.64-3.168 1.664-4.288-0.16-0.416-0.704-2.016 0.16-4.224 0 0 1.344-0.416 4.416 1.632 1.28-0.352 2.656-0.544 4-0.544s2.72 0.192 4 0.544c3.040-2.080 4.384-1.632 4.384-1.632 0.864 2.208 0.32 3.84 0.16 4.224 1.024 1.12 1.632 2.56 1.632 4.288 0 6.144-3.744 7.488-7.296 7.904 0.576 0.512 1.088 1.472 1.088 2.976 0 2.144-0.032 3.872-0.032 4.384 0 0.416 0.288 0.928 1.088 0.768 6.368-2.112 10.944-8.128 10.944-15.168 0-8.896-7.168-16.032-16-16.032z"></path>
		<path d="M6.24 23.488c-0.032 0.064-0.16 0.096-0.288 0.064-0.128-0.064-0.192-0.16-0.128-0.256 0.032-0.096 0.16-0.096 0.288-0.064 0.128 0.064 0.192 0.16 0.128 0.256v0z"></path>
		<path d="M6.912 24.192c-0.064 0.064-0.224 0.032-0.32-0.064s-0.128-0.256-0.032-0.32c0.064-0.064 0.224-0.032 0.32 0.064s0.096 0.256 0.032 0.32v0z"></path>
		<path d="M7.52 25.12c-0.096 0.064-0.256 0-0.352-0.128s-0.096-0.32 0-0.384c0.096-0.064 0.256 0 0.352 0.128 0.128 0.128 0.128 0.32 0 0.384v0z"></path>
		<path d="M8.384 26.016c-0.096 0.096-0.288 0.064-0.416-0.064s-0.192-0.32-0.096-0.416c0.096-0.096 0.288-0.064 0.416 0.064 0.16 0.128 0.192 0.32 0.096 0.416v0z"></path>
		<path d="M9.6 26.528c-0.032 0.128-0.224 0.192-0.384 0.128-0.192-0.064-0.288-0.192-0.256-0.32s0.224-0.192 0.416-0.128c0.128 0.032 0.256 0.192 0.224 0.32v0z"></path>
		<path d="M10.912 26.624c0 0.128-0.16 0.256-0.352 0.256s-0.352-0.096-0.352-0.224c0-0.128 0.16-0.256 0.352-0.256 0.192-0.032 0.352 0.096 0.352 0.224v0z"></path>
		<path d="M12.128 26.4c0.032 0.128-0.096 0.256-0.288 0.288s-0.352-0.032-0.384-0.16c-0.032-0.128 0.096-0.256 0.288-0.288s0.352 0.032 0.384 0.16v0z"></path>
	  </symbol>
  
	  <symbol id="icon-location" viewBox="0 0 32 32">
		<title>location</title>
		<path d="M16 31.68c-0.352 0-0.672-0.064-1.024-0.16-0.8-0.256-1.44-0.832-1.824-1.6l-6.784-13.632c-1.664-3.36-1.568-7.328 0.32-10.592 1.856-3.2 4.992-5.152 8.608-5.376h1.376c3.648 0.224 6.752 2.176 8.608 5.376 1.888 3.264 2.016 7.232 0.352 10.592l-6.816 13.664c-0.288 0.608-0.8 1.12-1.408 1.408-0.448 0.224-0.928 0.32-1.408 0.32zM15.392 2.368c-2.88 0.192-5.408 1.76-6.912 4.352-1.536 2.688-1.632 5.92-0.288 8.672l6.816 13.632c0.128 0.256 0.352 0.448 0.64 0.544s0.576 0.064 0.832-0.064c0.224-0.096 0.384-0.288 0.48-0.48l6.816-13.664c1.376-2.752 1.248-5.984-0.288-8.672-1.472-2.56-4-4.128-6.88-4.32h-1.216zM16 17.888c-3.264 0-5.92-2.656-5.92-5.92 0-3.232 2.656-5.888 5.92-5.888s5.92 2.656 5.92 5.92c0 3.264-2.656 5.888-5.92 5.888zM16 8.128c-2.144 0-3.872 1.728-3.872 3.872s1.728 3.872 3.872 3.872 3.872-1.728 3.872-3.872c0-2.144-1.76-3.872-3.872-3.872z"></path>
		<path d="M16 32c-0.384 0-0.736-0.064-1.12-0.192-0.864-0.288-1.568-0.928-1.984-1.728l-6.784-13.664c-1.728-3.456-1.6-7.52 0.352-10.912 1.888-3.264 5.088-5.28 8.832-5.504h1.376c3.744 0.224 6.976 2.24 8.864 5.536 1.952 3.36 2.080 7.424 0.352 10.912l-6.784 13.632c-0.32 0.672-0.896 1.216-1.568 1.568-0.48 0.224-0.992 0.352-1.536 0.352zM15.36 0.64h-0.064c-3.488 0.224-6.56 2.112-8.32 5.216-1.824 3.168-1.952 7.040-0.32 10.304l6.816 13.632c0.32 0.672 0.928 1.184 1.632 1.44s1.472 0.192 2.176-0.16c0.544-0.288 1.024-0.736 1.28-1.28l6.816-13.632c1.632-3.264 1.504-7.136-0.32-10.304-1.824-3.104-4.864-5.024-8.384-5.216h-1.312zM16 29.952c-0.16 0-0.32-0.032-0.448-0.064-0.352-0.128-0.64-0.384-0.8-0.704l-6.816-13.664c-1.408-2.848-1.312-6.176 0.288-8.96 1.536-2.656 4.16-4.32 7.168-4.512h1.216c3.040 0.192 5.632 1.824 7.2 4.512 1.6 2.752 1.696 6.112 0.288 8.96l-6.848 13.632c-0.128 0.288-0.352 0.512-0.64 0.64-0.192 0.096-0.384 0.16-0.608 0.16zM15.424 2.688c-2.784 0.192-5.216 1.696-6.656 4.192-1.504 2.592-1.6 5.696-0.256 8.352l6.816 13.632c0.096 0.192 0.256 0.32 0.448 0.384s0.416 0.064 0.608-0.032c0.16-0.064 0.288-0.192 0.352-0.352l6.816-13.664c1.312-2.656 1.216-5.792-0.288-8.352-1.472-2.464-3.904-4-6.688-4.16h-1.152zM16 18.208c-3.424 0-6.24-2.784-6.24-6.24 0-3.424 2.816-6.208 6.24-6.208s6.24 2.784 6.24 6.24c0 3.424-2.816 6.208-6.24 6.208zM16 6.4c-3.072 0-5.6 2.496-5.6 5.6 0 3.072 2.528 5.6 5.6 5.6s5.6-2.496 5.6-5.6c0-3.104-2.528-5.6-5.6-5.6zM16 16.16c-2.304 0-4.16-1.888-4.16-4.16s1.888-4.16 4.16-4.16c2.304 0 4.16 1.888 4.16 4.16s-1.856 4.16-4.16 4.16zM16 8.448c-1.952 0-3.552 1.6-3.552 3.552s1.6 3.552 3.552 3.552c1.952 0 3.552-1.6 3.552-3.552s-1.6-3.552-3.552-3.552z"></path>
	  </symbol>
  
	  <symbol id="icon-facebook" viewBox="0 0 32 32">
		<title>facebook</title>
		<path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
	  </symbol>
  
	  <symbol id="icon-instagram" viewBox="0 0 32 32">
		<title>instagram</title>
		<path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
		<path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
		<path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
	  </symbol>
  
	  <symbol id="icon-twitter" viewBox="0 0 32 32">
		<title>twitter</title>
		<path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
	  </symbol>
	  <symbol id="icon-link" viewBox="0 0 32 32">
		<title>link</title>
		<path d="M17.984 11.456c-0.704 0.704-0.704 1.856 0 2.56 2.112 2.112 2.112 5.568 0 7.68l-5.12 5.12c-2.048 2.048-5.632 2.048-7.68 0-1.024-1.024-1.6-2.4-1.6-3.84s0.576-2.816 1.6-3.84c0.704-0.704 0.704-1.856 0-2.56s-1.856-0.704-2.56 0c-1.696 1.696-2.624 3.968-2.624 6.368 0 2.432 0.928 4.672 2.656 6.4 1.696 1.696 3.968 2.656 6.4 2.656s4.672-0.928 6.4-2.656l5.12-5.12c3.52-3.52 3.52-9.248 0-12.8-0.736-0.672-1.888-0.672-2.592 0.032z"></path>
		<path d="M29.344 2.656c-1.696-1.728-3.968-2.656-6.4-2.656s-4.672 0.928-6.4 2.656l-5.12 5.12c-3.52 3.52-3.52 9.248 0 12.8 0.352 0.352 0.8 0.544 1.28 0.544s0.928-0.192 1.28-0.544c0.704-0.704 0.704-1.856 0-2.56-2.112-2.112-2.112-5.568 0-7.68l5.12-5.12c2.048-2.048 5.632-2.048 7.68 0 1.024 1.024 1.6 2.4 1.6 3.84s-0.576 2.816-1.6 3.84c-0.704 0.704-0.704 1.856 0 2.56s1.856 0.704 2.56 0c1.696-1.696 2.656-3.968 2.656-6.4s-0.928-4.704-2.656-6.4z"></path>
	  </symbol>
	</defs>
  </svg>
  <span class="closer">
  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg>
  </span>
  </div>
  </div>
  <div class="box-edit">
	<div class="hoso">
	<div class="wrapper">
	<div class="profile-card js-profile-card">
	  <div class="profile-card__img">
		<img class="edit__box-img img__edit" src="#" alt="">
	  </div>
  
	  <div class="profile-card__cnt js-profile-cnt">
		<div class="profile-card__name edit__user-name"></div>
		<div class="profile-card__txt">Thành Viên : <strong class="thanhvien__edit">...</strong></div>
			<div>
				<div class="form-row">
					<div class="col">
					<input type="text" class="form-control first__name" placeholder="First name">
					</div>
					<div class="col">
					<input type="text" class="form-control last__name" placeholder="Last name">
					</div>
				</div>
                <div class="form-group row">
                    <label class="col"></label>
                    <div class="col-lg-12">
                        <input class="form-control email__edit" type="text" placeholder="Email" />
                    </div>
				</div>
				<div class="form-row">
					<div class="col">
					<input type="password" class="form-control psw__edit" placeholder="Password">
					</div>
					<div class="col">
					<input type="password" class="form-control psw__confirm" placeholder="Confirm PassWord">
					</div>
				</div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label"></label>
                    <div class="col-lg-12">
                        <input class="form-control address__edit" type="text"  placeholder="Address" />
                    </div>
				</div>
				<div class="custom-file">
				<label class="custom-file-label" for="img__upload" aria-describedby="inputGroupFileAddon02">Choose avatar image</label>
				<input type="file" class="custom-file-input" id="img__upload" >
			</div>
			<div class="profile-card-ctr">
			<button class="profile-card__button button--blue js-message-btn">Cancel</button>
			<button class="profile-card__button button--orange update-prf">Update Profile</button>
			</div>
			</div>
        </div>
  
	</div>
  
  </div>
  <span class="closer edit">
  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg>
  </span>
  </div>
  </div>
<div class="blur"></div>
`;
    //loc type movie
    this.typeMovie();
    // loc diem movie
	// edit data user info
	this.editUserInfo();
	// dang xuat tai khoan;
    this.logOut();
    //show menu user
    this.showUserMenu();
    // show data user
    this.showInfoUser();
    //dem so luot user comment on
	this.countComment();
	//count like the movie
	this.countLikeMovie();
	// render img to base64
	// fix nav
	window.addEventListener("scroll",(e) => {
		const data = JSON.parse(localStorage.getItem("user"));
		let navPC = this._shadowRoot.querySelector(".header-warp");
		let topNav = this._shadowRoot.querySelector(".top-nav-area");
		

		navPC.classList.toggle("fixed__pc",window.scrollY > 0);
		topNav.classList.toggle("fixed__pc",window.scrollY > 0);
		let navSocail = this._shadowRoot.querySelector(".header-social");
		navSocail.classList.toggle("hide",window.scrollY > 0)
		this._shadowRoot.querySelector('.header-bar-warp').classList.toggle("opacity-bg",window.scrollY > 0)
		this._shadowRoot.querySelector('.nav_search').classList.toggle("hide",window.scrollY > 0)
		if(data){
			this._shadowRoot.querySelector('.user').classList.toggle("xoayngang",window.scrollY > 0)
			this._shadowRoot.querySelector('.openModal').classList.toggle("margin-r",window.scrollY > 0)
		}
		if (data){
			this._shadowRoot.querySelector('.user').classList.toggle("right",window.scrollY > 0)
		}
	})
	// get value search input
	this.getValueInputSearch();
	// console.log(file)

	this._shadowRoot.querySelector("#img__upload").addEventListener("change", readFile);
	let srcImg = this._shadowRoot.querySelector('.edit__box-img');
	function readFile() {
		if (this.files && this.files[0]) {
    
			var FR= new FileReader();
			
			FR.addEventListener("load", function(e) {
				  dataImg.push(e.target.result);
				  srcImg.src = e.target.result;
				  
			});
			FR.readAsDataURL( this.files[0] );
		  }
	  }
}
  typeMovie() {
    let dataMovie = firebase.firestore().collection("data_movie");
    const subMenu = this._shadowRoot.querySelector(".sub-menu");

    subMenu.addEventListener("click", async (event) => {
      const typeData = event.target.innerText;
	  localStorage.setItem("type", typeData);
	  window.location.href = "/typeMoive.html";
    });
  }
  logOut() {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      let out = this._shadowRoot.querySelector(".log-out");
      out.addEventListener("click", async (event) => {
        var r = confirm("Bạn thực sự muốn đăng xuất ???");
        if (r == true) {
          let dataUser = await firebase
            .firestore()
            .collection("status")
            .where("user", "==", data.email)
            .onSnapshot(async(querySnapshot) => {
			let remove = querySnapshot.docs[0].id;
			 await firebase.firestore().collection("status").doc(remove).delete()
			 .then(function (){
				localStorage.removeItem("user");
				location.reload();
			 })
            });
        } else {
          return;
        }
      });
    } else {
      return;
    }
  }
  showUserMenu() {
    const data = localStorage.getItem("user");
    if (data) {
	  let after = this._shadowRoot.querySelector(".after");
	  let show = this._shadowRoot.querySelector(".afterUser");
      let userMenu = this._shadowRoot.querySelector(".user-menu");
      after.addEventListener("click", () => {
        userMenu.classList.toggle("show");
        show.classList.toggle("rotate");
      });
    }
  }
  showInfoUser() {
	let data = JSON.parse(localStorage.getItem("user"));
	if(data){
		let admin = !data.admin ? "Member" : "ADMIN";
		let imgProfile = (this._shadowRoot.querySelector(".img__profile").src =
		data.avatar);
	  let nameProfile = (this._shadowRoot.querySelector(
		".profile-card__name"
	  ).innerText = data.name);
	  let thanhvien = (this._shadowRoot.querySelector(
		".thanhvien"
	  ).innerText = admin);
	  let addressProfile = (this._shadowRoot.querySelector(
		".profile-card-loc__txt"
	  ).innerText = data.address);
  
	  let hoso = this._shadowRoot.querySelector(".hoso");
	  hoso.addEventListener("click", () => {
		let box = this._shadowRoot.querySelector(".box").classList.add("show");
		let blur = this._shadowRoot
		  .querySelector(".blur")
		  .classList.add("show__blur");
	  });
	  let closer = this._shadowRoot.querySelector(".closer");
	  closer.addEventListener("click", () => {
		let box = this._shadowRoot.querySelector(".box").classList.remove("show");
		let blur = this._shadowRoot
		  .querySelector(".blur")
		  .classList.remove("show__blur");
	  });
	  let blur = this._shadowRoot.querySelector(".blur");
	  blur.addEventListener("click", () => {
		let box = this._shadowRoot.querySelector(".box").classList.remove("show");
		let boxEdit = this._shadowRoot.querySelector(".box-edit").classList.remove("show1");
		let blur = this._shadowRoot
		  .querySelector(".blur")
		  .classList.remove("show__blur");
	  });
	  //box edit info
	  let chinhsua = this._shadowRoot.querySelector(".chinhsua");
	  chinhsua.addEventListener("click", () => {
		let boxEdit = this._shadowRoot.querySelector(".box-edit").classList.add("show1");
		let blur = this._shadowRoot
		  .querySelector(".blur")
		  .classList.add("show__blur");
	  });
	  let closerEdit = this._shadowRoot.querySelector(".edit");
	  closerEdit.addEventListener("click", () => {
		let boxEdit = this._shadowRoot.querySelector(".box-edit").classList.remove("show1");
		let blur = this._shadowRoot
		  .querySelector(".blur")
		  .classList.remove("show__blur");
	  });
	}
    
  }

  async countComment(){
    let data = JSON.parse(localStorage.getItem("user"));
	if (data){
		let dbData = await firebase.firestore().collection("review_moive").get();
	let dataCmt = [];
	let showCmT = [];
    for (let i of dbData.docs) {
      let dataCommentTotal = i.data().commentTotal;
      for (let i of dataCommentTotal){
		  if (i.email == data.email) {
			dataCmt.push(i.email);
			showCmT.push(i);
        }
      }
    }
    let numberComments = (this._shadowRoot.querySelector(".number").innerText =
	  dataCmt.length);
	  this._shadowRoot.querySelector(".comment__list").addEventListener("click", () => {
		  showCmT.forEach(x => {
			  alert(`Bạn đã comment phim : "${x.name}" với nội dung là : "${x.content}" , thời gian : ${x.time}.`);
		  })
	  })
	  }
	}
	async countLikeMovie(){
		let dataLike = [];
		let dataUser = JSON.parse(localStorage.getItem("user"));
		if(dataUser){
			let userLike = await firebase.firestore().collection("users").where("email","==",dataUser.email).get();
			for( let doc of userLike.docs){
				dataLike.push(doc.data().likeMovie);
				if(!doc.data().likeMovie){
					return;
				}
				else{
					this._shadowRoot.querySelector(".like").innerText = doc.data().likeMovie.length;
	
				}
			}
			let showLike = this._shadowRoot.querySelector(".show__like");
			showLike.addEventListener("click", ()=>{
				if(dataLike[0].length > 0){
					dataLike[0].forEach(x => {
						alert(`Bạn đã thích phim "${x.name}" vào lúc : "${x.time}"`)
					})
				}
				else{
					return;
				}
			})
		}
		
	}
	async editUserInfo(){
		let data = JSON.parse(localStorage.getItem("user"));
		if (data){
			let admin = !data.admin ? "Member" : "ADMIN";
		let adminSet = !data.admin ? false : true;
		let dbfirebase = await firebase.firestore().collection("users").where("email","==",data.email).get()
		.then(async(x) => {
			// get thanh vien
			let thanhvien = (this._shadowRoot.querySelector(
				".thanhvien__edit"
			  ).innerText = admin);
			let userData = x.docs[0].data();
			// get avatar user form db
			this._shadowRoot.querySelector('.edit__box-img').src = userData.avatar;
			// get name data form db
			this._shadowRoot.querySelector('.edit__user-name').innerText = userData.name;
			var idUser = x.docs[0].id;
			let btnUpdate = this._shadowRoot.querySelector(".update-prf");

			btnUpdate.addEventListener("click", async ()=> {
				const  mailformat = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
				if(!this._shadowRoot.querySelector(".first__name").value || !this._shadowRoot.querySelector(".last__name").value
				|| !this._shadowRoot.querySelector(".email__edit").value || !this._shadowRoot.querySelector(".address__edit").value 
				|| !this._shadowRoot.querySelector(".psw__edit").value || !this._shadowRoot.querySelector(".psw__confirm").value ){
					alert("Nhập đầy đủ thông tin!");
					return;
				}
				if(this._shadowRoot.querySelector(".psw__edit").value !== this._shadowRoot.querySelector(".psw__confirm").value){
					alert("Nhập lại sai password!!");
					this._shadowRoot.querySelector(".psw__confirm").value = "";
					return;
				}
				if(mailformat.test(this._shadowRoot.querySelector(".email__edit").value) == false){
					alert("Nhập sai định dạng Email mời nhập lại !!!");
					this._shadowRoot.querySelector(".email__edit").value = "";
					return;
				}
				let confirmEmal = await firebase.firestore().collection("users").where("email","==",this._shadowRoot.querySelector(".email__edit").value).get();
				if(confirmEmal.empty == false){
					alert("Email đã tồn tại xin vui lòng nhập lại !!");
					this._shadowRoot.querySelector(".email__edit").value = "";
					return;
				}
				if(this._shadowRoot.querySelector(".psw__edit").value.length < 6){
					alert("Vui lòng đặt mật khẩu trên 6 ký tự");
					this._shadowRoot.querySelector(".psw__edit").value = "";
					this._shadowRoot.querySelector(".psw__confirm").value = "";
					return;
				}
				if(dataImg.length < 0){
					alert("Mời Bạn Upload ảnh avatar !!");
					return;
				}
				let editDataUser ={
					name:this._shadowRoot.querySelector(".first__name").value + " " + this._shadowRoot.querySelector(".last__name").value,
					email: this._shadowRoot.querySelector(".email__edit").value,
					address: this._shadowRoot.querySelector(".address__edit").value,
					avatar: dataImg[0],
					password: this._shadowRoot.querySelector(".psw__edit").value,
					admin : adminSet,
				}
				let dbUser = await firebase.firestore().collection("users").doc(idUser).update(editDataUser)
				.then(async function(){
					let dbfirebase = await firebase.firestore().collection("status")
					.where("user","==",data.email)
					.get()
					.then( async (y) => {
						let statusIdNew = y.docs[0].id;
						await firebase.firestore().collection("status").doc(statusIdNew).update({
							user: editDataUser.email,
						})
					})
				.then(function (){
					localStorage.setItem("user",JSON.stringify(editDataUser));
					alert("Chúc mừng bạn đã thay đổi thông tin thành công!!");
				})
				})
				.then(function (){
					location.reload();
				})
				


			})
		})
		}
	}
	getValueInputSearch(){
		let input = this._shadowRoot.querySelector(".input__search");
		let btnSearch = this._shadowRoot.querySelector(".btn__search");
		btnSearch.addEventListener("click",() => {
			localStorage.setItem('valueSearch',input.value);
			window.location.href = "/searchPage.html"
		})
		input.addEventListener("focus",() => {
			input.classList.toggle("focusone");
		})

	}
}

window.customElements.define("header-component", Header);
