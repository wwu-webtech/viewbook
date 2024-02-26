const fact_template = document.createElement('template');
fact_template.innerHTML = `
<style>
a {
  padding: 0.1563rem 0;
  transition: var(--transition-speed--fast) var(--ease--standard);
  text-decoration: underline var(--border-width--md) var(--blue--lighter--60);
  text-underline-offset: 0.3125rem;
  color: var(--white);
  font-weight: var(--font-weight--semibold);
}

a:visited {
  color: var(--blue--lighter--60);
}

a:active,
a:focus,
a:hover {
  text-decoration: none;
  color: var(--white);
  background-color: var(--dark-blue--darker--80);
}

a:focus-visible {
  outline: dotted var(--border-width--md);
  outline-offset: var(--border-width--md);
}

.viewbook-fact {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: var(--content-area-max-width--sm);
}

@media (min-width: 36.3125rem) {
  .viewbook-fact {
    flex-flow: row nowrap;
  }
}

#image {
  display: flex;
  justify-content: center;
  flex: 0 0 15%;
  padding: var(--space--md);
  max-width: 6rem;
}

#image img {
  max-height: 6rem;
  max-width: 6rem;
}
</style>

<div class="viewbook-fact">
<div id="image"></div>
<p id="text"></p>
</div>
`
class ViewbookFact extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(fact_template.content.cloneNode(true));
    if(this.getAttribute('src')) {
      this.shadowRoot.querySelector('#image').innerHTML = '<img src="' + this.getAttribute('src') + '" alt="' + this.getAttribute('alt') +'" />';
    }
    this.shadowRoot.querySelector('#text').innerHTML = this.getAttribute('text');
  }
  connectedCallback() {
  }
  disconnectedCallback() {
  }
}

customElements.define('viewbook-fact', ViewbookFact);
