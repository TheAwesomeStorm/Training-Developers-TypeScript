import { ObjectList } from './object-list.js'
import { RoleInterface } from '../interfaces/role-interface.js'
import { Comparable } from '../interfaces/comparable.js'

export class Role implements RoleInterface, Comparable<Role> {
  constructor (
    public readonly id: number,
    public readonly name: string,
    public readonly friendly_name: string
  ) {
  }

  public compare (role: Role): boolean {
    return this.id === role.id
  }
}

export class Roles extends ObjectList<Role> {}
