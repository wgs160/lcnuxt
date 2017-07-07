import { Router } from 'express'

import cnode from './cnode'

var router = Router()

// Add USERS Routes
router.use('/cnode', cnode)

export default router
