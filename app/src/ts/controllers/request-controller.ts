import { WebService } from '../services/web-service.js'
import { Users } from '../models/users.js'
import { Roles } from '../models/roles.js'
import { UsersView } from '../view/users-view.js'
import { RolesView } from '../view/roles-view.js'

export class RequestController {
  public readonly users = new Users()
  public readonly roles = new Roles()
  private readonly service = new WebService()
  private readonly usersView = new UsersView('.api')
  private readonly rolesView = new RolesView('.api')

  public importUsers (): void {
    this.service.reachUsers()
      .then(reachedUsers => {
        return reachedUsers.filter(reachedUser => {
          return !this.users.list().some(user => user.compare(reachedUser))
        })
      })
      .then(newUniqueUsers => {
        for (const user of newUniqueUsers) {
          this.users.add(user)
        }
        this.usersView.update(this.users)
      })
      .catch(error => console.log(error))
  }

  public importRoles (name: string): void {
    const id = this.users.search(name)
    this.roles.clear()
    this.service.reachRoles(id)
      .then(reachedRoles => {
        for (const role of reachedRoles) {
          this.roles.add(role)
        }
        this.rolesView.update(this.roles, name)
      })
      .catch(error => console.log(error))
  }
}
