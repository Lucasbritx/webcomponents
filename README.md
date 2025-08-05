# Web Components POC

A proof of concept project demonstrating the use of native Web Components (Custom Elements) with vanilla HTML, CSS, and JavaScript.

## 📋 Overview

This project showcases the implementation of custom HTML elements using the Web Components standard, including:

- **Custom Elements**: Self-contained, reusable HTML elements
- **Shadow DOM**: Encapsulated styling and markup
- **HTML Templates**: Reusable document fragments

## 🔧 Components

### Available Components:

- **`<my-header>`** - A custom header component
- **`<nav-menu>`** - A navigation menu component with configurable items
- **`<app-drawer>`** - A drawer component with slot-based content projection
- **`<meu-componente>`** - A simple Brazilian Portuguese greeting component
- **`<word-count>`** - An extended paragraph element (customized built-in element)

### Component Usage:

```html
<!-- Navigation menu with custom items -->
<nav-menu items="Home,About,Contact"></nav-menu>

<!-- App drawer with slotted content -->
<app-drawer>
  <h1>Drawer Title</h1>
  <p class="drawer-paragraph">Styled content</p>
</app-drawer>

<!-- Custom header -->
<my-header></my-header>
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd webcomponents
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

#### Development Server (Recommended)

Start the development server with live reload:

```bash
npm run dev
```

#### Basic Server

Start a basic HTTP server:

```bash
npm start
```

Both commands will serve the project locally. Open your browser and navigate to the provided local URL (typically `http://localhost:3000` or `http://localhost:5000`).

### Alternative: Direct File Opening

Since this project uses only vanilla HTML/CSS/JS, you can also open `index.html` directly in your browser. However, using a local server is recommended to avoid CORS issues with ES modules.

## 📁 Project Structure

```
webcomponents/
├── index.html          # Main HTML file
├── index.css           # Global styles
├── header.js           # Header component
├── menu.js             # Navigation menu component
├── package.json        # Project configuration
└── README.md           # This file
```

## 🌟 Features

- **No Framework Dependencies**: Pure Web Components using browser APIs
- **Shadow DOM Encapsulation**: Isolated styling for each component
- **Reusable Components**: Easy to integrate and customize
- **ES Modules**: Modern JavaScript module system
- **Responsive Design**: Mobile-friendly components

## 📚 Learning Resources

- [MDN Web Components Guide](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Custom Elements Specification](https://html.spec.whatwg.org/multipage/custom-elements.html)
- [Shadow DOM Specification](https://dom.spec.whatwg.org/#shadow-trees)

## 🤝 Contributing

This is a proof of concept project. Feel free to fork and experiment with additional Web Components!

## 📄 License

MIT License - feel free to use this code for learning and experimentation.
