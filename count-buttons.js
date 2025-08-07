class CountButtons extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button id="decrement">-</button>
      <button id="increment">+</button>
      <reset-button></reset-button>
    `;

    this.querySelector("#increment").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("increment", { bubbles: true }));
    });

    this.querySelector("#decrement").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("decrement", { bubbles: true }));
    });

    this.querySelector("reset-button").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("reset", { bubbles: true }));
    });
  }
}
customElements.define("count-buttons", CountButtons);
