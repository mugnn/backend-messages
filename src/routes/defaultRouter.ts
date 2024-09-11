import { Router } from 'express';


export default (router: Router): void => {
  router.get('/', (req, res) => {
    try {
      res.status(200).send("default route, try /join or /message")
    } catch (error) {
      console.error(error)
    }
  })
}