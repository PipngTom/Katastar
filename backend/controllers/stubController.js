import asyncHandler from 'express-async-handler'
import Stub from '../models/stuboviModel.js'
import Kvar from '../models/kvarModel.js'

const getStubs = asyncHandler(async (req, res) => {
  const stubovi = await Stub.find({})

  res.json(stubovi)
})

const createKvar = asyncHandler(async (req, res) => {
  
  const kvar = new Kvar({
    email: req.body.email,
    brojT: req.body.brojT,
    opisK: req.body.opisK,
    stub: req.params.id
  })
console.log(req.body.brojT)
  const createdKvar = await kvar.save()
  const stub = await Stub.findById(req.params.id)
  if (stub) {
    stub.status = false
  }
  await stub.save()
  res.status(201).json(createdKvar)
})

const promenaStatusa = asyncHandler(async (req, res) => {
  const stub = await Stub.findById(req.params.id)
  if (stub) {
    stub.status = req.body.status
    await stub.save()
    res.status(201).json(stub)
  }
})

export { getStubs, createKvar, promenaStatusa }