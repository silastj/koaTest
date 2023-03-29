import { Router } from "express";

const router = Router();

router.get('/ping', (req, res) => {
  res.json({pong: true})
})

router.get('/random', (req, res) => {
  let nRand: number = Math.floor(Math.random() * 100)
  res.json(`Você tem ${nRand} anos de idade.`)
})

export default router