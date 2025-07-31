class Menu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const items = this.getAttribute("items") || "Home,About,Contact";

    shadow.innerHTML = `
      <style>
        h1 {
          color: #ff6347;
          font-family: sans-serif;
        }
        div {
          padding: 10px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          height: 70px;
          width: 100%;
        }
        ul {
          list-style-type: none;
          padding: 0;
          display: flex;
          gap: 10px;
          justify-content: center;
        }
        li {
          padding: 5px;
          border-bottom: 1px solid #ccc;
        }
        li:hover {
            background-color: #e0e0e0;
            cursor: pointer;
        }
      </style>
      <div>
        <ul>
          ${items
            .split(",")
            .map((item) => `<li>${item.trim()}</li>`)
            .join("")}
        </ul>
      </div>
    `;
  }
}

customElements.define("nav-menu", Menu);
