import mongoose from 'mongoose'

const kvarSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  brojT: {
    type: String
  },
  opisK: {
    type: String,
    required: true
  },
  stub: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Stub'
  },
  aktivan: {
    type: Boolean,
    default: true
  },
  datum: {
    type: Date,
    default: Date.now
  }
})

const Kvar = mongoose.model('Kvar', kvarSchema)

export default Kvar