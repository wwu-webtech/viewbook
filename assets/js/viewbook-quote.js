const quote_template = document.createElement('template');
quote_template.innerHTML = `
<style>
:host {
  --heading-color: var(--white);
  --text-color: var(--white);
}

.viewbook-quote {
  position: relative;
  margin: var(--space--xl) var(--space--sm) var(--space--sm);
  padding: var(--space--md);
  border-left: solid 1px  var(--text-color);
  max-width: var(--content-area-max-width--sm);
  color: var(--text-color);
}

@media (min-width: 36.3125rem) {
  .viewbook-quote {
    margin: var(--space--xl) var(--space--md);
    border-left: solid 2px  var(--text-color);
  }
}

.viewbook-quote:before {
  position: absolute;
  top: 0;
  left: -2px;
  display: block;
  height: 2.5rem;
  content: "";
  transform: rotate(30deg);
  transform: translatey(-100%) rotate(60deg);
  transform-origin: 0 100%;
  border-left: solid 2px var(--text-color);
}

#heading {
  font-family: var(--font--title);
  text-transform: uppercase;
  margin: 0;
  color: var(--heading-color);
}

#quote {
  margin: 0;
}

#source {
  margin-bottom: 0;
  font-style: italic;
}
</style>

<div class="viewbook-quote">
<h2 id="heading"></h3>
<p id="quote"></p>
<p id="source"></p>
</div>
`
class ViewbookQuote extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(quote_template.content.cloneNode(true));
    this.shadowRoot.querySelector('#heading').innerText = this.getAttribute('heading');
    this.shadowRoot.querySelector('#quote').innerText = this.getAttribute('quote');
    this.shadowRoot.querySelector('#source').innerText = this.getAttribute('source');
  }
  connectedCallback() {
  }
  disconnectedCallback() {
  }
}

customElements.define('viewbook-quote', ViewbookQuote);
