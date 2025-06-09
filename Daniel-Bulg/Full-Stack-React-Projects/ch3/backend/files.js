import { writeFileSync, readFileSync } from 'node:fs'

const users = [
  {
    name: 'Bruno Miguel Corrêa',
    email: 'bruno@email.com',
    age: 39,
  },
]

const userJson = JSON.stringify(users)

writeFileSync('backend/users.json', userJson)

const readUserJson = readFileSync('backend/users.json')
const readUser = JSON.parse(readUserJson)

console.log(readUser)
