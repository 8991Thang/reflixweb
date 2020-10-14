import {BaseComponent} from "../screens/BaseComponent.js"

class Footer extends BaseComponent{
    constructor(){
        super();
    }
    render(){
        this._shadowRoot.innerHTML = /*html*/`
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
                <style>
                    h6{
                        letter-spacing:2px;
                    }
                </style>
                    <!-- Footer -->
            <footer style="width:100vw;background:#1c2031;color:white" class="page-footer font-small unique-color-dark">

            <div style="background-color: #b6093a;">
            <div class="container">

                <!-- Grid row-->
                <div class="row py-4 d-flex align-items-center">

                <!-- Grid column -->
                <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                    <h6 class="mb-0">Get connected with us on social networks!</h6>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-6 col-lg-7 text-center text-md-right">

                    <!-- Facebook -->
                    <a class="fb-ic">
                    <i class="fab fa-facebook-f white-text mr-4"> </i>
                    </a>
                    <!-- Twitter -->
                    <a class="tw-ic">
                    <i class="fab fa-twitter white-text mr-4"> </i>
                    </a>
                    <!-- Google +-->
                    <a class="gplus-ic">
                    <i class="fab fa-google-plus-g white-text mr-4"> </i>
                    </a>
                    <!--Linkedin -->
                    <a class="li-ic">
                    <i class="fab fa-linkedin-in white-text mr-4"> </i>
                    </a>
                    <!--Instagram-->
                    <a class="ins-ic">
                    <i class="fab fa-instagram white-text"> </i>
                    </a>

                </div>
                <!-- Grid column -->

                </div>
                <!-- Grid row-->

            </div>
            </div>

            <!-- Footer Links -->
            <div class="container text-center text-md-left mt-5">

            <!-- Grid row -->
            <div class="row mt-3">

                <!-- Grid column -->
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <!-- Content -->
                <h6 class="text-uppercase font-weight-bold"></h6>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 100px;">
                <p style="line-height:30px"> <b>Reflix</b> được kết hợp từ Review và Flix là một website review về tin tức về phim ảnh , trang web review uy tín và chất lượng
                 nhất hiện nay!!!</p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <!-- Links -->
                <h6 class="text-uppercase font-weight-bold ">CREATE WEB BY</h6>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                <p>
                    <a href="#!">HTML</a>
                </p>
                <p>
                    <a href="#!">CSS</a>
                </p>
                <p>
                    <a href="#!">JAVASCRIPT</a>
                </p>
                <p>
                    <a href="#!">BOOTSTRAP</a>
                </p>

                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <!-- Links -->
                <h6 class="text-uppercase font-weight-bold">CREATOR</h6>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                <p>
                    <a href="#!">Phạm Thắng</a>
                </p>
                <p>
                    <a href="#!">Dương Quốc Khánh</a>
                </p>
                <p>
                    <a href="#!">Nguyễn Bá Ân</a>
                </p>

                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <!-- Links -->
                <h6 class="text-uppercase font-weight-bold">Contact</h6>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                <p>
                    <i class="fas fa-home mr-3"></i> HA NOI CITY, VN</p>
                <p>
                    <i class="fas fa-envelope mr-3"></i> Reflix@contact.com</p>
                <p>
                    <i class="fas fa-phone mr-3"></i> + 09 234 567 88</p>
                <p>
                    <i class="fas fa-print mr-3"></i> + 09 234 567 89</p>

                </div>
                <!-- Grid column -->

            </div>
            <!-- Grid row -->

            </div>
            <!-- Footer Links -->

            <!-- Copyright -->
            <div style="background-color:#171b2e" class="footer-copyright text-center py-3">© 2020 NoCopyright:
            <a href="#"> Reflix.com</a>
            </div>
            <!-- Copyright -->

    </footer>
        ` 

    }
}

window.customElements.define("footer-component",Footer);