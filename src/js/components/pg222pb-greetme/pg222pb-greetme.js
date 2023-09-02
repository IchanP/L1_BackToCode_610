const template = document.createElement('template')
template.innerHTML = `
<div class="greetme">
    <style>
        :root {

        }
        .greetingwrapper {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 5%;
            max-height: 300px;
            color: black;
        }
        .greetingwrapper[hidden="true"] {
            display: none;
        }
        .characterimage {
            margin-top: 4%;
            object-fit: none;
            object-position: top;
            border-radius: 30%;
        }
        .speech-wrapper {
            width: 30%;
        }
        .speech-bubble {
            background: #efefef;
            border-radius: 4px;
            font-size: 1.2rem;
            line-height: 1.3;
            padding: 15px;
            position: relative;
            height: 50%;
            width: 100%;
        }
        .speech-bubble-ds__arrow {
            border-left: 21px solid transparent;
            border-top: 20px solid rgba(0, 0, 0, 0.2);
            bottom: -25px;
            position: absolute;
            right: 6px;
        }
        .speech-bubble-ds__arrow::before {
            border-left: 23px solid transparent;
            border-top: 23px solid #a7a7a7;
            bottom: 2px;
            content: "";
            position: absolute;
            right: 2px;
        }
        .speech-bubble-ds__arrow::after {
            border-left: 21px solid transparent;
            border-top: 21px solid #efefef;
            bottom: 4px;
            content: "";
            position: absolute;
            right: 2px;
        }
        .greetme form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            
        }
        .greetme button[type="submit"] {
            width: 35%;
            margin-top: 0.5%;
            padding: 0.2rem;
            border-radius: 2%;
            border: none;
            background-color: #441137;
            transition: 250ms ease-in-out;
            color: white;
            cursor: pointer;
        }
        .greetme button[type="submit"]:hover {
            background-color: #4e1640;
        }
        .greetme input {
            margin-top: 0.2%;
            width: 30%;
        }
        .greetme input:focus {
            outline: none;
        }
        
    </style>
    <form autocomplete="off"> 
        <label for="name">What's your name?</label>
        <input type="text" id="name" name="name" placeholder="Please enter your name" required>
        <button type="submit">Please greet me!</button>
    </form>
    <div class="greetingwrapper" hidden="true">
     <div class="speech-wrapper">
         <div class="speech-bubble">
            <p class="greeting-text">Greetings <span class="enteredname"></span> nice to meet you!</p>
             <div class="speech-bubble-ds__arrow">
            </div>
        </div>
     </div>
     <img class="characterimage" src="" />
    </div>
</div>
`

customElements.define('pg222pb-greetme',
  /**
   * Class representing the greetme component.
   * TODO ADD MORE
   */
  class extends HTMLElement {
    /**
     * Initializes components, creates an instance of greetme.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }

    /**
     * Adds event listener when the element is instered into the DOM.
     */
    connectedCallback () {
      this.shadowRoot.querySelector('form').addEventListener('submit', this.handleFormSubmit.bind(this))
    }

    /**
     * Handles the form submition by grabbing input name and grabbing MAL data.
     *
     * @param {Event} event - The event that triggered the listener.
     */
    handleFormSubmit (event) {
      event.preventDefault()

      const name = this.shadowRoot.querySelector('input').value

      this.shadowRoot.querySelector('.enteredname').append(name)

      this.shadowRoot.querySelector('.greetingwrapper').setAttribute('hidden', 'false')
    }
  }
)
