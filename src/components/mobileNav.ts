export default function navi() {
  const nav: HTMLElement | null = document.querySelector('#site-navigation')

  const button: HTMLElement | null = nav.querySelector('.menu-toggle')
  const menu: HTMLElement | null = nav.querySelector('.menu-list')

  if (!nav && !button) {
    return
  }

  // Hide button if menu is missing or empty.
  if (!menu || !menu.childNodes.length) {
    button!.style.display = 'none';
    return
  }

  button.onclick = () => {
    if (-1 === menu.className.indexOf('nav-menu')) {
      menu.className = 'nav-menu'
      console.log("easdas")

    }

    if (-1 !== button.className.indexOf('toggled-on')) {
      button.className = button.className.replace(' toggled-on', '')
      menu.className = menu.className.replace(' toggled-on', '')
    } else {
      button.className += ' toggled-on'
      menu.className += ' toggled-on'
    }
  };
};