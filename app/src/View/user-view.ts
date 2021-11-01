import { View } from './view.js'
import { User } from '../models/users.js'
import { removeScript } from '../decorators/remove-script.js'

export class UserView extends View<User> {
  @removeScript
  protected template (model: User): string {
    this.clear()
    return `
      <table class="table">
        <tbody>
            <tr>
              <td>ID</td>
              <td>${model.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>${model.name}</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>${model.email}</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>${model.password}</td>
            </tr>
            <tr>
              <td>Roles</td>
              <td>${model.roles}</td>
            </tr>
        </tbody>
      </table>
    `
  }
}
