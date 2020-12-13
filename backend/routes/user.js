const User = require('../models/user.model')
const router = require('express').Router()

router.route("/")
    .get((req, res) => {
        console.log("Sending Users");
        User.find()
            .then(users => {
                res.json(users)
            })
            .catch(err => res.status(400).json("Error: " + err))
    })

router.route("/add").post((req, res) => {
    const username = req.body.username

    const newUser = new User({ username })
    console.log("Adding Users");
    newUser.save()
        .then(() => res.json("User Added!"))
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router