import express from 'express'
import { getStubs, createKvar, promenaStatusa } from '../controllers/stubController.js'
import {protect, admin} from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getStubs)
router.route('/kvar/:id').post(createKvar)
router.route('/status/:id').put(promenaStatusa)

export default router
