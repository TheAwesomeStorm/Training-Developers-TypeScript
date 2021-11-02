import { View } from './view.js'
import { Users } from '../models/users.js'
import { removeScript } from '../decorators/remove-script.js'

export class UsersView extends View<Users> {
  @removeScript
  protected template (model: Users): string {
    this.clear()
    return `
      <table class="table">
        <thead>
            <tr>
              <th>Name</th>
            </tr>
        </thead>
        <tbody>
            ${model.list().map(user => {
              return `
                <tr class="row-of-users">
                    <td class="user-name">${user.name}</td>
                </tr>
              `
            }).join('')}
        </tbody>
      </table>
    `
  }
}
