import {BaseComponent} from '../screens/BaseComponent.js';

const style =/*html*/`
<style>
    .input-wrapper{
        margin-top : 10px;
    }
    ::placeholder { /* Most modern browsers support this now. */
    color:white;
    text-transform:uppercase;
    letter-spacing : 1.5px;
    }
    .input-main{
        background: transparent;
        border : none !important;
        outline : none !important;
        color : #ffffff !important;
        width: 300px !important;
        display: block;
        font-weight: bold;
        font-size: 14px;
        color: #fff;
        border-bottom: 1px solid #ebebeb !important;
        height : 25px;
    }
    #err{
        margin-top: 0.6rem;
        text-align: center;
        width: 300px;
        position: absolute;
        color: #cccccc;
    }
    .label{
        margin-top: 1rem;
        letter-spacing: 1px;
        opacity : 0 !important;
        text-transform: uppercase;
        transition : all 0.5s linear;
    }
    .label2{
        opacity :1 !important;
    }
    .label3{
        opacity :0 !important;
    }
   

</style>

`
export class InputWrapper extends BaseComponent {
    constructor(){
        super();
        this.props = {
            label: "",
            type: "",
            error : "" ,
            value : "",
        };
    }
    static get observedAttributes() {
        return ['label', 'type', 'error','value'];
    }
    render(){
        this._shadowRoot.innerHTML = 
        /*html*/ `
        ${style}
        <div class="input-wrapper">
            <label class ="label">${this.props.label}</label>
            <div class="focus_input">
            <input placeholder="${this.props.label}" value="${this.props.value}" class="input-main" type="${this.props.type}" autocomplete="off" />
            </div>

            <div id="err">${this.props.error}</div>
        </div> 
        `
        let label = this._shadowRoot.querySelector(".label");
        let focus = this._shadowRoot.querySelector(".input-main");

        focus.addEventListener("keyup", (event) =>{
            label.classList.add("label2")
            focus.placeholder = "";
            
        })

    }
    get valueInput(){
        return this._shadowRoot.querySelector(".input-main").value;
    }


}




window.customElements.define("input-wrapper",InputWrapper)