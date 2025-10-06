class DrawerOpener extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener("click", this.toggle.bind(this));
  }

  toggle() {
    const ref = this.getAttribute("data-drawer");
    document.querySelector(ref).classList.toggle("show");
    document.body.classList.toggle("scroll-lock");
  }
}

customElements.define("drawer-opener", DrawerOpener);

class DrawerMenu extends HTMLElement {
  constructor() {
    super();

    this.linkList = this.querySelectorAll('.scrollspy-menu a:not([data-bs-toggle])');
    this.drawerOpener = this.querySelector('drawer-opener');
  }

  connectedCallback() {
    if(window.innerWidth > 1199) return;

    this.linkList.forEach(link => {
      link.addEventListener("click", this.onClick.bind(this));
    })    
  }

  onClick() {
    this.drawerOpener.click();
  }
}

customElements.define("drawer-menu", DrawerMenu);

