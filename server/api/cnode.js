import { Router } from 'express'
import axios from 'axios'

var router = Router()

/* GET users listing. */
router.all('*',function (req, res, next) {
    var api = req.params[0] || ''
    const url = `https://cnodejs.org/api/v1/${api}`
    axios.get(url)
        .then(function (response) {
            console.log(url);
            res.json(response.data)
        })
        .catch(function (error) {
            res.sendStatus(404)
        });
})

export default router
