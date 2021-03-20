import mongoose from 'mongoose'

const stubSchema = mongoose.Schema({
  Rbr: {
    type: String
  },
  stub: {
    type: String
  },
  svetiljka: {
    type: String
  },
  snaga: {
    type: String
  },
  visina: {
    type: String
  },
  Adresa: {
    type: String
  },
  LAT: {
    type: String
  },
  LON: {
    type: String
  },
  Tekst: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  }
})

const Stub = mongoose.model('Stub', stubSchema)

export default Stub