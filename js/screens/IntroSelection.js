import {BaseComponent} from '../screens/BaseComponent.js';

const style = /*html*/`
<style>
*{
    box-sizing: border-box;
    }
.container{
    background-image: url("./img/background/bg.jpg") !important;
    width : 100vw;
    height : auto ;
    
}
.container_body{
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
}
.container_body-center{
    display : flex;
    flex-direction : column;
    position : relative;
}
.slideshow-container {
    overflow : hidden;
    position: relative;
    margin: auto;
}
.dot {
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}
.active {
  background-color: red;;
}
.row{
    position : absolute;
    left : 8%;
    top : 17%;
    width : 1300px;
    border-bottom : 2px dashed pink;
}
.mySlides{
    display: none;
}
.mySlides img{
    margin-top : 15rem;
    width : 1550px;
    vertical-align: middle;
}
.fade {
  animation-name: fade;
  animation-duration: 2s;
}
@keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
}

</style>
`
class IntroSelection extends BaseComponent {
    constructor(){
        super();
    }

    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
        this._shadowRoot.innerHTML = /*html*/`
        ${style}
        <div class="container">
            <div class="container_body">
                    <div class="container_body-center">
                        <div class="row"></div>
                        <div class="slideshow-container">
                        <div class="mySlides fade">
                                <img src="./img/background/1920x1080-11.jpg"/>
                            </div>
                            <div class="mySlides fade">
                                <img src="./img/background/publicpreview-1600225693.jpg"/>
                            </div>
                            <div class="mySlides fade">
                                <img src="./img/background/kkokoko.jpg" />
                            </div>
                            <div class="mySlides fade">
                                <img src="./img/background/1920x1080-min.png">
                            </div>
                            <div class="mySlides fade">
                                <img src="./img/background/ac n.jpg">
                            </div>
                        </div>
                        <br>
                        <br>
                            <div style="text-align:center;padding-bottom : 60px;">
                                <span class="dot"></span> 
                                <span class="dot"></span> 
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>

                            </div>
                        </div>
                    </div>
            </div>
        </div>
 `
 // script 

 
            
        const slides = this._shadowRoot.querySelectorAll(".mySlides");
        const dots = this._shadowRoot.querySelectorAll(".dot");
        var slideIndex = 0;
        function showSlides(){
            let i;
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
              }
              slideIndex++;
              if (slideIndex > slides.length) {slideIndex = 1}    
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
              setTimeout(showSlides, 4000); // Change image every
        }
        showSlides();
        
        
    }
}

window.customElements.define("intro-component", IntroSelection);