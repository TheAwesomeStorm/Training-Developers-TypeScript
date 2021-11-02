import { RequestController } from './controllers/request-controller.js'

// let userId = ''

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
  }
})

// pageBody.addEventListener('click', function (event: Event) {
//   const target = event.target as Element
//   const parentTag = target.parentNode as HTMLElement
//   const tableRows = document.querySelectorAll('tr')
//   for (const row of tableRows) {
//     row.classList.remove('grey')
//   }
//   if (parentTag.tagName === 'TR' && parentTag.classList.contains('row-of-users')) {
//     parentTag.classList.toggle('grey')
//     const selectedCellWithId = parentTag.querySelector('.user-id') as HTMLElement
//     userId = selectedCellWithId.textContent as string
//   }
// })

// const account = document.querySelector('.account') as HTMLElement
//
// account.addEventListener('click', () => {
//   const xhr = new XMLHttpRequest()
//
//   xhr.onload = function () {
//     console.log(xhr.responseText)
//   }
//
//   const body = {
//     email: 'daniel@outlook.com',
//     password: 'password'
//   }
//
//   xhr.open('POST', 'http://localhost:8080/api/login')
//   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
//   xhr.send(JSON.stringify(body))
// })
