import { View } from './view.js'
import { User } from '../models/users.js'
import { removeScript } from '../decorators/remove-script.js'

export class UserView extends View<User> {
  @removeScript
  protected template (model: User): string {
    this.clear()
    return `
      <table class="table">
        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Password</th>
              <th>Roles</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>${model.id}</td>
              <td>${model.name}</td>
              <td>${model.email}</td>
              <td>${model.password}</td>
              <td>${model.roles}</td>
            </tr>
        </tbody>
      </table>
    `
  }
}
