import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Gigo',
    email: 'gigo@email.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Zeko',
    email: 'zeko@email.com',
    password: bcrypt.hashSync('123456', 10)
  },

]

export default users