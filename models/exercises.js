const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [{
        type: {
            type: String,
            trim: true,
            required: "Enter a type of exercise"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter a name for transaction"
          },
        duration: {
            type: Number,
            trim: true
        },
        weight: {
            type: Number,
            trim: true
        },
        reps: {
            type: Number,
            trim: true
        },
        sets: {
            type: Number,
            trim: true
        },
        cardio: {
            type: Boolean,
            trim:true
        },
        distance: {
            type: Number,
            trim: true
        }
    }]
});

const Exercise = mongoose.model("Exercise", exercisesSchema);

module.exports = Exercise;