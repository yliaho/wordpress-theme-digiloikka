export default class JobAccordion {
  private button: HTMLElement = null
  private description: HTMLElement = null
  private buttonHeight: number = 0
  private descriptionHeight: number = 0
  private buttonIcon: HTMLElement = null

  public jobTitle: string | null = null
  public expanded: boolean = false

  constructor(private element: HTMLElement) {
    try {
      this.jobTitle = this.element.id

      this.initElements()
      this.initEventListener()
    } catch (err) {
      console.error(err)
    }
  }

  private initElements(): void {
    this.button = this.element.querySelector('button.job-accordion-expando')
    this.description = this.element.querySelector('div.job-description')

    this.buttonHeight = this.button.getBoundingClientRect().height
    this.descriptionHeight = this.description.getBoundingClientRect().height

    this.buttonIcon = this.button.querySelector('span')
    this.buttonIcon.style.display = 'inline-block'

    if (!this.button && !this.description)
      throw new Error(
        'JobAccordion: Invalid child elements (button, description)'
      )

    this.element.style.overflow = 'hidden'
    this.element.style.height = `${this.buttonHeight}px`

    this.toggleIconAngle()
  }

  private initEventListener(): void {
    this.button.addEventListener('click', this.onExpandClick.bind(this))
  }

  private onExpandClick() {
    if (this.expanded) {
      this.collapse()
    } else {
      this.expand()
    }
  }

  public expand() {
    this.expanded = true
    this.element.style.height = `${this.buttonHeight +
      this.descriptionHeight}px`
    this.toggleIconAngle()
  }

  public collapse() {
    this.expanded = false
    this.element.style.height = `${this.buttonHeight}px`
    this.toggleIconAngle()
  }

  private toggleIconAngle() {
    this.buttonIcon.style.transform = this.expanded
      ? 'rotate(180deg)'
      : 'rotate(0deg)'
  }
}
