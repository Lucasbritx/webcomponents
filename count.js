import "./count-display.js";
import "./count-buttons.js";
import "./reset-button.js";

class Count extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .counter {
          padding: 20px;
          background-color: lightgray;
          border: 1px solid #ccc;
          border-radius: 8px;
          text-align: center;
          font-family: sans-serif;
          max-width: 300px;
          margin: 0 auto;
        }
        h1 {
          color: darkgreen;
          margin: 0 0 20px 0;
        }
          button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 15px;
          margin: 0 5px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1em;
        }
        button:hover {
          background-color: #0056b3;
        }
        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        .reset-btn {
          background-color: #dc3545;
        }
        .reset-btn:hover {
          background-color: #c82333;
        }
      </style>
      <div class="counter">
        <h1>Counter Component</h1>
        <count-display></count-display>
        <count-buttons></count-buttons>
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.addEventListener("increment", () => this.increment());
    this.shadowRoot.addEventListener("decrement", () => this.decrement());
    this.shadowRoot.addEventListener("reset", () => this.reset());

    const initialCount = this.getAttribute("initial-count");
    if (initialCount !== null) {
      this.count = parseInt(initialCount) || 0;
    }

    this.updateDisplay();
  }

  increment() {
    this.count++;
    this.updateDisplay();
    this.dispatchCountChangeEvent();
  }

  decrement() {
    this.count--;
    this.updateDisplay();
    this.dispatchCountChangeEvent();
  }

  reset() {
    this.count = 0;
    this.updateDisplay();
    this.dispatchCountChangeEvent();
  }

  updateDisplay() {
    const display = this.shadowRoot.querySelector("count-display");
    if (display) display.value = this.count;
  }

  dispatchCountChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("countchange", {
        detail: { count: this.count },
        bubbles: true,
      })
    );
  }

  get value() {
    return this.count;
  }

  set value(newValue) {
    this.count = parseInt(newValue) || 0;
    this.updateDisplay();
  }

  static get observedAttributes() {
    return ["initial-count"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "initial-count") {
      this.count = parseInt(newValue) || 0;
      this.updateDisplay();
    }
  }
}

customElements.define("my-count", Count);
