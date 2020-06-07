import express from 'express'
import path from 'path'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/', (request, response) => {
    return  response.json({message: 'Hello World' })
})

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

routes.get('uploads/', express.static(path.resolve(__dirname, "..", "..", "uploads")))

export default routes