import { Router } from 'express'
import axios from 'axios'

var router = Router()

/* GET users listing. */
router.get('/topics',function (req, res, next) {
    axios.get('https://cnodejs.org/api/v1/topics')
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
})

/* GET user by ID. */
router.get('/topics/:id', function (req, res, next) {
  var id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
