export default class NavDropdown {
  private dropdown: HTMLTemplateElement
  private nub: HTMLElement
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
    this.dropdown = this.element.querySelector('ul.child')
    this.dropdown.style.display = 'flex'

    const {
      width: elWidth,
      height: elHeight,
      top: elTop,
      right: elRight,
      left: elLeft
    } = this.element.getBoundingClientRect()
    const { width: dropdownWidth } = this.dropdown.getBoundingClientRect()

    this.dropdown.style.top = `${elTop + 40}px`
    this.dropdown.style.left = `${Math.floor(elRight) - dropdownWidth}px`

    const nubWidth = 12
    this.nub = this.element.parentElement.querySelector('.nub') as HTMLElement
    this.nub.style.borderWidth = `${nubWidth}px`
    this.nub.style.display = 'block'
    this.nub.style.top = `${elTop + 30 - nubWidth}px`
    this.nub.style.left = `${elRight - nubWidth - elWidth / 2}px`
    // nub.style.left = `${Math.floor(elRight)}px`
  }

  public hideDropdown() {
    console.log('what')
    this.dropdown.style.display = 'none'
    this.nub.style.display = 'none'
  }
}
