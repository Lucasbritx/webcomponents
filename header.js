class Header extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        h1 {
          color: darkgreen;
          font-family: sans-serif;
        }
        div {
          padding: 10px;
          background-color: lightgray;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      </style>
      <div>
        <h1>Header Component</h1>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("my-header", Header);
