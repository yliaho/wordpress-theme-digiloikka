export default class NavDropdown {
  private dropdown: HTMLTemplateElement
  private isOpen: boolean = false
  constructor(private element: HTMLElement) {
    const aTag = this.element.querySelector('a')
    aTag.addEventListener('click', e => {
      if (e.target === aTag) {
        e.preventDefault()
        e.stopPropagation()
        if (!this.isOpen) {
          this.showDropdown()
          this.isOpen = true
        } else if (this.isOpen) {
          this.hideDropdown()
          this.isOpen = false
        }
      }
    })
  }

  public showDropdown() {
    console.log(this.element.getBoundingClientRect())
    this.dropdown = this.element.querySelector('ul.child')
    const {
      width: elWidth,
      height: elHeight,
      top: elTop,
      right: elRight,
      left: elLeft
    } = this.element.getBoundingClientRect()

    this.dropdown.style.display = 'flex'
    const { width } = this.dropdown.getBoundingClientRect()
    this.dropdown.style.top = `${elTop + 40}px`
    this.dropdown.style.left = `${Math.floor(elRight) - width}px`
  }

  public hideDropdown() {
    console.log('what')
    this.dropdown.style.display = 'none'
  }
}
