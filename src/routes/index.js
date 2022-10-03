import { Router } from 'express'
import { rateLimit } from 'express-rate-limit'
import PublicRoutes from './public'


export default (app) => {
  const routes = Router()
  const apiLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100,
    message:
      'Too many requests from this IP, please try again after 10 minutes.',
  })
  PublicRoutes(routes)
 
  
  // important if behind a proxy to ensure client IP is passed to req.ip
  // app.enable('trust proxy')

  app.use('/api/', [apiLimiter, routes])
}
