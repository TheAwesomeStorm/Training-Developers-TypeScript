import { Comparable } from '../interfaces/comparable.js'

export class ObjectList<T> implements Comparable<ObjectList<T>> {
  protected members: T[] = []

  public add (member: T): void {
    this.members.push(member)
  }

  public list (): readonly T[] {
    return this.members
  }

  public compare (members: ObjectList<T>): boolean {
    return JSON.stringify(this.members) === JSON.stringify(members)
  }

  public clear (): void {
    this.members = []
  }
}
