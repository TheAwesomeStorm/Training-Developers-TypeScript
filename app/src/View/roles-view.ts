import { View } from './view.js'
import { Roles } from '../models/roles.js'
import { removeScript } from '../decorators/remove-script.js'

export class RolesView extends View<Roles> {
  @removeScript
  protected template (model: Roles): string {
    this.clear()
    return `
      <table class="table">
        <thead>
            <tr>
              <th>${this.name} is allowed to</th>
            </tr>
        </thead>
        <tbody>
            ${model.list().map(role => {
      return `
                <tr>
                    <td>${role.friendly_name}</td>
                </tr>
              `
    }).join('')}
        </tbody>
      </table>
    `
  }
}
