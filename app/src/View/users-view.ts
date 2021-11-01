import { View } from './view.js'
import { Users } from '../models/users.js'
import { removeScript } from '../decorators/remove-script.js'

export class UsersView extends View<Users> {
  @removeScript
  protected template (model: Users): string {
    this.clear()
    return `
      <table class="usersTable">
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
            ${model.list().map(user => {
              return `
                <tr class="row-of-users">
                    <td class="user-id">${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td>${user.roles}</td>
                </tr>
              `
            }).join('')}
        </tbody>
      </table>
    `
  }
}
