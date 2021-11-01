export abstract class View<T> {
  protected element: HTMLElement

  constructor (selector: string) {
    this.element = document.querySelector(selector) as HTMLElement
  }

  public update (model: T): void {
    this.element.innerHTML = this.template(model)
  }

  protected clear (): void {
    this.element.innerHTML = ''
  }

  protected abstract template (model: T): string
}
