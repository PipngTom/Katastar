import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Stub from './models/stuboviModel.js'
import stubovi from './data/stubovi.js'
import colors from 'colors'
import users from './data/users.js'
import User from './models/userModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Stub.deleteMany()

    const createdUsers = await User.insertMany(users)

    const sampleStubovi = stubovi.map(stub => {
      return {...stub}
    })

    await Stub.insertMany(sampleStubovi)


    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}


const destroyData = async () => {
  try {
    await User.deleteMany()
    await Stub.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}