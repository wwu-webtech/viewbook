const stat_template = document.createElement('template');
stat_template.innerHTML = `
<style>
:host {
  --heading-color: var(--light-green);
}

.viewbook-stat {
  padding: var(--space--md);
  text-align: center;
}

#number {
  color: var(--heading-color);
  font-family: var(--font--title);
  font-weight: var(--font-weight--black);
  font-size: var(--font-size--2xl);
  margin-bottom: 0;
}

#image {
  margin: auto;
  max-width: 6rem;
}

#image img {
  max-height: 6rem;
}
</style>

<div class="viewbook-stat">
<div id="image"></div>
<p id="number"></p>
<p id="text"></p>
</div>
`
class ViewbookStat extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(stat_template.content.cloneNode(true));

    if(this.getAttribute('src')) {
      this.shadowRoot.querySelector('#image').innerHTML = '<img src="' + this.getAttribute('src') + '" alt="' + this.getAttribute('alt') +'" />';
    }
    this.shadowRoot.querySelector('#number').innerText = this.getAttribute('number');
    this.shadowRoot.querySelector('#text').innerText = this.getAttribute('text');
  }
  connectedCallback() {
  }
  disconnectedCallback() {
  }
}

customElements.define('viewbook-stat', ViewbookStat);
