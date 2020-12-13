const Exercise = require('../models/excercise.model')
const router = require('express').Router()

router.route("/").get((req, res) => {
    Exercise.find()
        .then(exersises => res.json(exersises))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
    const { username, description } = req.body
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)
    console.log(req.body);
    const newExersise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newExersise.save()
        .then(() => res.json("Exercise Added!"))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/:id")
    .get((req, res) => {
        Exercise.findById(req.params.id)
            .then(exercise => res.json(exercise))
            .catch(err => res.status(400).json("Error: " + err))
    })
    .delete((req, res) => {
        Exercise.findByIdAndDelete(req.params.id)
            .then(() => res.json("Excercise Deleted"))
            .catch(err => res.status(400).json("Error: " + err))
    })

router.route("/update/:id").post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username
            exercise.description = req.body.description
            exercise.duration = Number(req.body.duration)
            exercise.date = Date.parse(req.body.date)

            exercise.save()
                .then(() => res.json('Exercise Updated!'))
                .catch(err => res.status(400).json("Error: " + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router