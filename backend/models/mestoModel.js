import mongoose, { mongo } from 'mongoose'

const mestoSchema = mongoose.Schema({
  mesto: {
    type: String,
    required: true
  },
  zoom: {
    type: Number,
  },
  center: {
    lat: { type: Number },
    lon: { type: Number }
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const Mesto = mongoose.model('Mesto', mestoSchema)

export default Mesto