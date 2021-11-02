import { ObjectList } from './object-list.js'
import { UserInterface } from '../interfaces/user-interface.js'
import { Comparable } from '../interfaces/comparable.js'

export class User implements UserInterface, Comparable<User> {
  constructor (
    public readonly id: number,
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly roles: number[]
  ) {}

  public compare (user: User): boolean {
    return this.id === user.id
  }
}

export class Users extends ObjectList<User> {
  public search (name: string): string {
    for (const user of this.members) {
      if (user.name === name) {
        return (user.id).toString()
      }
    }
    return 'Not found'
  }
}
