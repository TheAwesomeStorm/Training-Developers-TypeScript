import { UserInterface } from '../interfaces/user-interface.js'
import { RoleInterface } from '../interfaces/role-interface.js'
import { User } from '../models/users.js'
import { Role } from '../models/roles.js'

export class WebService {
  public async reachUsers (): Promise<User[]> {
    return await WebService.reach('http://localhost:8080/api/user')
      .then((dataSet: UserInterface[]) => {
        return dataSet.map(data => {
          return new User(data.id, data.name, data.email, data.password, data.roles)
        })
      })
  }

  public async reachRoles (id: string): Promise<Role[]> {
    return await WebService.reach(`http://localhost:8080/api/user/${id}/role`)
      .then((dataSet: RoleInterface[]) => {
        return dataSet.map(data => {
          return new Role(data.id, data.name, data.friendly_name)
        })
      })
  }

  private static async reach (url: string): Promise<Object> {
    // return await fetch(url).then(async res => await res.json())
    return await new Promise(function (resolve, reject) {
      const ajaxRequest = new XMLHttpRequest()

      ajaxRequest.onload = function () {
        if (ajaxRequest.status === 200) {
          try {
            const obj = JSON.parse(ajaxRequest.responseText)
            resolve(obj)
          } catch (error) {
            console.log('String received is probably not parsable')
            reject(error)
          }
        } else {
          reject(new Error('Request status is not ok'))
        }
      }

      ajaxRequest.onerror = function () {
        reject(new Error('Network Error'))
      }

      ajaxRequest.open('get', url)
      ajaxRequest.send()
    })
  }
}
