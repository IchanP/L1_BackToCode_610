const template = document.createElement('template')
template.innerHTML = `
<div class="greetme">
    <style>

    </style>

</div>
`

customElements.define('pg222pb-greetme',
  /**
   *
   */
  class extends HTMLElement {
    /**
     *
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
)
