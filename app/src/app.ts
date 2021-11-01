import { RequestController } from './controllers/request-controller.js'

let userId = ''

const controller = new RequestController()

const buttonImportUsers = document.querySelector('.import-users') as HTMLElement

buttonImportUsers.addEventListener('click', () => {
  controller.importUsers()
})

const buttonImportRoles = document.querySelector('.import-roles') as HTMLElement

buttonImportRoles.addEventListener('click', () => {
  controller.importRoles(userId)
})

const buttonImportUser = document.querySelector('.import-user') as HTMLElement

buttonImportUser.addEventListener('click', () => {
  controller.importUser(userId)
})

const page = document.querySelector('html') as HTMLElement

page.addEventListener('click', function (event: Event) {
  const target = event.target as Element
  const parentTag = target.parentNode as HTMLElement
  const tableRows = document.querySelectorAll('tr')
  for (const row of tableRows) {
    row.style.backgroundColor = 'white'
  }
  if (parentTag.tagName === 'TR' && parentTag.classList.contains('row-of-users')) {
    parentTag.style.backgroundColor = 'grey'
    const selectedCellWithId = parentTag.querySelector('.user-id') as HTMLElement
    userId = selectedCellWithId.textContent as string
  }
})

const toBeRemoved = document.querySelectorAll('.import')

for (const element of toBeRemoved) {
  const teste = element as HTMLElement
  teste.style.display = 'none'
}
