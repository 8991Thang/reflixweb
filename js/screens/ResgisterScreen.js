import { BaseComponent } from "../screens/BaseComponent.js";
const style = /*html*/ `
<style>
*{
  margin: 0;
  padding: 0;
}
a:focus, a:active {
  text-decoration: none;
  outline: none;
  transition: all 300ms ease 0s;
}
.body {
  width : 100vw;
  height : 100vh;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  background-image: url("../img/body-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
font-family: 'Cantata One', serif;
}

.main {
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}

.container {
  padding-bottom: 115px;
  padding-top: 135px;
  width: 1123px;
  background-image: url("../img/container-bg.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  overflow: hidden; 
}

.signup-content {
  width: 522px; 
  background: rgba(177, 135, 77, 0.75);
  float: right; 
  margin-left: 50px;
  display: flex;
    justify-content: center;
    align-items: center;
  
}
h2{
    font-size: 2.2rem;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Inknut Antiqua', serif !important;
    font-weight : bolder;
    letter-spacing: 5px;
}
.signup-form {
    height: 500px;
    padding-left: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
 }

.form-group {
  margin-bottom: 28px; 
}

.field-icon {
  float: right;
  margin-right: 0px;
  margin-top: -22px;
  position: relative;
  z-index: 2;
  color: #fff; }

.label-agree-term {
  font-size: 13px;
  font-weight: 400;
  color: #fff; }


.form-submit {
  width: auto;
  display: inline-block;
  border: none;
  background: #fff;
  color: #b18757;
  padding: 10px;
  height: 50px;
  box-shadow: 0px 15px 9.9px 0.1px rgba(0, 0, 0, 0.15);
  margin-right: 25px; }
  .form-submit:hover {
    background-color: #e6e6e6; }

.submit {
  width: 130px;
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  outline : none;
 }
.submit-link {
  border: 2px solid #fff;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  color: #fff; 
  padding: 14px 0;
}
  .submit-link:hover {
    background: #fff;
    color: #b18757; }

@media screen and (max-width: 992px) {
  .container {
    width: calc( 100% - 30px);
    max-width: 100%;
    margin: 0 auto; }

  .signup-content {
    width: 100%; } }
@media screen and (max-width: 480px) {
  .submit {
    width: 100%; }

  .form-submit {
    margin-bottom: 20px;
    margin-right: 0px; }

  .signup-form {
    padding: 54px 30px 36px 30px; }
 }
 .social_network{
   margin-left : 30px;
 }
.social_network div {
  padding-top : 20px;
}
.social_network div img{
  width : 40px;
  margin-left : 30px;
  cursor : pointer;
}
.social_network div img:hover{
  transform : scale(1.5)
}


</style>
`;
class Register extends BaseComponent {
  constructor() {
    super();
  }
  render() {
    this._shadowRoot.innerHTML = /*html*/ `
    ${style}
 <div class="body">
    <div class="main">
        <div class="container">
            <div class="signup-content">
                <form id="signup-form" class="signup-form register-form">
                    <h2>Sign up </h2>
                    <div class="form-group">
                        <input-wrapper label="Your Name" value ="" type="text" class="form-input name" error=""></input-wrapper>
                    </div>
                    <div class="form-group">
                  <input-wrapper label="Email"  value ="" type="email" class="email " error=""></input-wrapper>
                    </div>
                    <div class="form-group">
                        <input-wrapper label="PassWord" type="password" class="password-input" error=""></input-wrapper>
                    </div>
                    <div class="form-group">
                        <input-wrapper label="Confirm PassWord" value ="" type="password" class="confirm-password" error=""></input-wrapper>
                    </div>
                    <div class="form-group">
                        <input type="submit" name="submit" id="submit" class="form-submit submit" value="Sign up"/>
                        <a href="/index2.html#!/login" class="submit-link submit btn-register">Sign in</a>
                    </div>
                </form>
                <div class="social">
                  <div class="social_network">
                    <div><img src="https://img.icons8.com/plasticine/2x/facebook-new.png" alt="fb" srcset=""></div>
                    <div><img style="width : 33px"  src="https://i.pinimg.com/originals/36/03/d6/3603d632370eb53f2fd0e59ba7de236b.png" alt="tw"></div>
                    <div><img src="https://img.icons8.com/plasticine/2x/google-logo.png" alt="" srcset=""></div>
                  </div>
                </div>
            </div>
        </div>
    </div>

</div>
        `;

    this.$formRegister = this._shadowRoot.querySelector(".register-form");
    const resultEmail = [];
    const  mailformat = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    this.$formRegister.onsubmit = (event) => {
      event.preventDefault();

      // lay du lieu tu cac input wrapper
      let confirmPsw = this._shadowRoot.querySelector(".confirm-password")
        .valueInput;
      const dataUser = {
        name: this._shadowRoot.querySelector(".name").valueInput,
        email: this._shadowRoot.querySelector(".email").valueInput,
        password: this._shadowRoot.querySelector(".password-input").valueInput,
        avatar :"https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
        address:"Hà Nội , Việt Nam",
      };
      if (!dataUser.name && !dataUser.email && !dataUser.password) {
        this._shadowRoot
          .querySelector(".name")
          .setAttribute("error", "Please input your name!!");
        this._shadowRoot
        .querySelector(".email")
        .setAttribute("error", "Please input your email!!");
        this._shadowRoot
          .querySelector(".password-input")
          .setAttribute("error", "Please input your password!!");
          return;
      }
      if (dataUser.name) {
        this._shadowRoot.querySelector(".name").setAttribute("error", "");
        this._shadowRoot
          .querySelector(".name")
          .setAttribute("value", dataUser.name);
      }
      if (!dataUser.name) {
        this._shadowRoot
          .querySelector(".name")
          .setAttribute("error", "Please input your name!!");
        return;
      }
      if(dataUser.name.length < 6){
        this._shadowRoot.querySelector(".name").setAttribute("error", "Please input your name at least over 6 characters !!");
        return;
      }
      if (!dataUser.email) {
        this._shadowRoot
          .querySelector(".email")
          .setAttribute("error", "Please input your email!!");
        return;
      }
      if(dataUser.email.length < 6 ) {
        this._shadowRoot
          .querySelector(".email")
          .setAttribute("error", "Please set a email at least over 6 characters !!");
        this._shadowRoot
          .querySelector(".email")
          .setAttribute("value", "");
        return;
      }
      if(resultEmail.includes(dataUser.email) == true){
        this._shadowRoot
          .querySelector(".email")
          .setAttribute("error", "Email already exists");
        return;
      }
      if(mailformat.test(dataUser.email) == false){
        this._shadowRoot
          .querySelector(".email")
          .setAttribute("error", "Email format incorrect");
        return;
      };
      if (dataUser.email) {
        this._shadowRoot.querySelector(".email").setAttribute("error", "");
        this._shadowRoot
          .querySelector(".email")
          .setAttribute("value", dataUser.email);
      }
      if (!dataUser.password) {
        this._shadowRoot
          .querySelector(".password-input")
          .setAttribute("error", "Please input your password!!");
          return;
      }
      if(dataUser.password.length < 6 || dataUser.password.length > 10 ) {
        this._shadowRoot
          .querySelector(".password-input")
          .setAttribute("error", "Please set a password of 6 - 10 characters!!");
        this._shadowRoot
          .querySelector(".confirm-password")
          .setAttribute("value", "");
        return;
      }
      if (dataUser.password != confirmPsw) {
        this._shadowRoot
          .querySelector(".password-input")
          .setAttribute("error", "Nhập lại sai password!!");
        this._shadowRoot
          .querySelector(".confirm-password")
          .setAttribute("value", "");
        return;
      }
      if (dataUser.password) {
        this._shadowRoot
          .querySelector(".password-input")
          .setAttribute("value", "");
          this._shadowRoot
          .querySelector(".password-input")
          .setAttribute("error", "");
      }
      if (confirmPsw) {
        this._shadowRoot
          .querySelector(".confirm-password")
          .setAttribute("value", "");
      } 
      addUser(dataUser);
    };
       
    $: firebase = firebase.firestore().collection("users");
    
    async function addUser(data){
      await firebase.add(data);
      alert("Register Sucessfully");
      window.location.href = "/index2.html#!/login";
    }
    async function readData(){
      const result = await firebase.get();
      for (let doc of result.docs){
        resultEmail.push(doc.data().email);
      }
    }
    readData();
  }
}

window.customElements.define("register-screen", Register);
