import { RequestController } from './controllers/request-controller.js'

// function writeText (text: string): void {
//   const body: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement
//   const textSegment: HTMLParagraphElement = document.createElement('p')
//   textSegment.innerText = text
//   body.appendChild(textSegment)
// }
//

const controller = new RequestController()

controller.importUsers()

console.log(controller.users)

controller.importRoles('1')

console.log(controller.roles)

controller.importUser('2')
