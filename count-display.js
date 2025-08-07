class CountDisplay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .count-display {
          font-size: 2em;
          font-weight: bold;
          color: #333;
          margin: 20px 0;
          padding: 10px;
          background-color: white;
          border-radius: 4px;
        }
      </style>
      <div class="count-display">0</div>
    `;
  }

  set value(val) {
    const display = this.shadowRoot.querySelector(".count-display");
    display.textContent = val;
  }

  get value() {
    const display = this.shadowRoot.querySelector(".count-display");
    return parseInt(display.textContent) || 0;
  }

  connectedCallback() {
    const initialValue = this.getAttribute("value");
    if (initialValue !== null) {
      this.value = initialValue;
    }
  }
}
customElements.define("count-display", CountDisplay);
