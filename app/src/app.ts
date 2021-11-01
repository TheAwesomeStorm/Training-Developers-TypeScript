import { RequestController } from './controllers/request-controller.js'

const controller = new RequestController()

const buttonImportUsers = document.querySelector('.import-users') as HTMLElement

buttonImportUsers.addEventListener('click', () => {
  controller.importUsers()
})

const buttonImportRoles = document.querySelector('.import-roles') as HTMLElement

buttonImportRoles.addEventListener('click', () => {
  controller.importRoles('1')
})

const buttonImportUser = document.querySelector('.import-user') as HTMLElement

buttonImportUser.addEventListener('click', () => {
  controller.importUser('1')
})

const usersTable = document.querySelector('html') as HTMLElement

usersTable.addEventListener('click', function (event: Event) {
  const target = event.target as Element
  const parentTag = target.parentNode as HTMLElement
  const tableRows = document.querySelectorAll('tr')
  for (const row of tableRows) {
    row.style.backgroundColor = 'white'
  }
  if (parentTag.tagName === 'TR' && parentTag.classList.contains('row-of-users')) {
    parentTag.style.backgroundColor = 'grey'
  }
})
