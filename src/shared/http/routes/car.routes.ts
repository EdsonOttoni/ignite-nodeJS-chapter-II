import { Router } from 'express'

import { createCarController } from '@modules/cars/useCases/createCar'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { listCarAvailableController } from '@modules/cars/useCases/listAvailableCar'
import { createCarSpecificationController } from '@modules/cars/useCases/createCarSpecification'

const carsRoutes = Router()

carsRoutes.post('/', ensureAuthenticated, ensureAdmin, (req, res) => {
  return createCarController.handle(req, res)
})

carsRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    createCarSpecificationController.handle(req, res)
  }
)

carsRoutes.get('/available', (req, res) =>
  listCarAvailableController.handle(req, res)
)

export { carsRoutes }
