import { RequestController } from './controllers/request-controller.js'

const controller = new RequestController()

const pageBody = document.querySelector('body') as HTMLElement

const pageTitle = document.querySelector('title') as HTMLElement

const apiSection = document.querySelector('.api') as HTMLElement

const buttonImportUsers = document.querySelector('.import-users') as HTMLElement

const buttonReturn = document.querySelector('.return') as HTMLElement

const buttonHome = document.querySelector('.home') as HTMLElement

buttonImportUsers.addEventListener('click', () => {
  controller.importUsers()
  buttonImportUsers.classList.add('hide')
  pageTitle.innerHTML = 'Users | SPA'
})

buttonReturn.addEventListener('click', () => {
  buttonReturn.classList.add('hide')
  controller.importUsers()
  pageTitle.innerHTML = 'Users | SPA'
})

buttonHome.addEventListener('click', () => {
  buttonImportUsers.classList.remove('hide')
  buttonReturn.classList.add('hide')
  apiSection.innerHTML = ''
  pageTitle.innerHTML = 'Home | SPA'
})

pageBody.addEventListener('click', function (event: Event) {
  const target = event.target as HTMLElement
  if (target.classList.contains('user-name')) {
    controller.importRoles(target.innerText)
    buttonReturn.classList.remove('hide')
    pageTitle.innerHTML = `${target.innerText}'s Access | SPA`
  }
})
