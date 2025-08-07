class ResetButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button id="reset" class="reset-btn">Reset</button>`;
  }
}
customElements.define("reset-button", ResetButton);
