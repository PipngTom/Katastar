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
  if (createdKvar) {
   const kvarovi = await Kvar.find({stub: req.params.id}).sort({datum: 1})
   if(kvarovi.length>1){
      kvarovi[kvarovi.length-2].aktivan = false
      await kvarovi[kvarovi.length-2].save()
   }
  }
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
    const savedStub = await stub.save()
    if(savedStub){
      const kvarovi = await Kvar.find({stub: req.params.id}).sort({datum: 1})
      if(kvarovi.length > 1){
         kvarovi[kvarovi.length-1].aktivan = false
        await kvarovi[kvarovi.length-1].save()
   }
    }
    res.status(201).json(savedStub)
  }
})

const getStubovisaKvarom = asyncHandler(async (req, res) => {
  const kvarovi = await Kvar.find({aktivan: true}).populate("stub")

 // const statusKvarova = kvarovi.filter(kvar => kvar.stub.status === false)
  res.json(kvarovi)
})

export { getStubs, createKvar, promenaStatusa, getStubovisaKvarom }