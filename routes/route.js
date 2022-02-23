import express from 'express'
import { usersignup, userlogin } from '../controller/user-controller.js'
import { getProducts, getProductById } from '../controller/products-controller.js'

const Routes = express.Router()

Routes.post('/signup', usersignup)
Routes.post('/login', userlogin)

Routes.get('/products', getProducts)
Routes.get('/product/:id', getProductById)

export default Routes