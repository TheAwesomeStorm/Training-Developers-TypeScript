export abstract class View<T> {
  protected element: HTMLElement
  protected name: string | undefined

  constructor (selector: string) {
    this.element = document.querySelector(selector) as HTMLElement
  }

  public update (model: T, name?: string): void {
    this.name = name
    this.element.innerHTML = this.template(model)
  }

  protected clear (): void {
    this.element.innerHTML = ''
  }

  protected abstract template (model: T): string
}
