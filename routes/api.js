const router = require("express").Router();
const { db } = require("../models/workout.js");
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findOneAndUpdate(
        params.id,
        { $push: { exercise: body } },
        { new: true, runValidators: true}
        )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

router.get("/api/exercise", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercise.duratoin',
                },
            },
        },
    ])
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get('/api/workout/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercise.duration',
                },
            },
        },
    ])
    .sort({ _id: -1})
    .limit(7)
    .then((dbWorkouts) => {
        console.log(dbWorkouts);
        res.json(dbWorkouts);
    });
});

router.delete('/api/workouts', ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;