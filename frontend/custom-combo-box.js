
import { html, css, LitElement } from 'lit';

class CustomComboBox extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
      selected: { type: String },
      filter: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        padding: 0.5em;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      select {
        width: 100%;
        box-sizing: border-box;
        padding: 0.5em;
        border: 1px solid #ccc;
        border-top: none;
        border-radius: 0 0 3px 3px;
      }
    `;
  }

  constructor() {
    super();
    this.items = [];
    this.selected = '';
    this.filter = '';
    this.visible = false;
  }

  render() {
    const filteredItems = this.items.filter(item =>
      item.toLowerCase().includes(this.filter.toLowerCase())
    );

    return html`
        <div>
        <input id="textCombo" type="text" placeholder="Cerca..." @input="${this._handleInput}"  style="display: ${this.visible ? 'block' : 'none'};" >
        <select @change="${this._handleChange}" @focus="${this._handleFocusIn}" @blur="${this._handleFocusOut}" >
          ${filteredItems.map(item => html`<option>${item}</option>`)}
        </select>
      </div>
    `;
  }

  _handleChange(event) {
    this.selected = event.target.value;
    this.dispatchEvent(new CustomEvent('change', { detail: this.selected }));
  }

  _handleInput(event) {
    this.filter = event.target.value;
    this.requestUpdate();
  }

  setItems(items) {
    this.items = items;
  }

  _handleFocusIn() {
      console.log('focusin');
      this.visible = true;
      const input = this.shadowRoot.getElementById('textCombo');
      if (input) {
          input.style.display = 'block';
       }
      this.requestUpdate();
    }

 _handleFocusOut() {
     console.log('focusout');
     this.visible = false;
     const input = this.shadowRoot.getElementById('textCombo');
     if (input) {
         input.style.display = 'none';
     }
     this.requestUpdate();
 }
}

customElements.define('custom-combo-box', CustomComboBox);
