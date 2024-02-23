import { html, LitElement } from 'lit';

class CustomComboBox extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
      selected: { type: String },
      filter: { type: String }
    };
  }

  constructor() {
    super();
    this.items = [];
    this.selected = '';
    this.filter = '';
  }

  render() {
    const filteredItems = this.items.filter(item =>
      item.toLowerCase().includes(this.filter.toLowerCase())
    );

    return html`
      <select @change="${this._handleChange}">
        ${filteredItems.map(item => html`<option>${item}</option>`)}
      </select>
      <input type="text" placeholder="Cerca..." @input="${this._handleInput}" />
    `;
  }

  _handleChange(event) {
    this.selected = event.target.value;
    this.dispatchEvent(new CustomEvent('change', { detail: this.selected }));
  }

  _handleInput(event) {
    this.filter = event.target.value;
  }
}

customElements.define('custom-combo-box', CustomComboBox);
