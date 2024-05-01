// Definir el componente personalizado para el borde
class BorderComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = "<h2>Plano Cartesiano</h2>";
    }
}

// Registrar el componente personalizado para el borde
customElements.define('border-component', BorderComponent);
