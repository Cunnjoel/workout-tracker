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
            type: Numeral,
            trim: true
        },
        weight: {
            type: Numeral,
            trim: true
        },
        reps: {
            type: Numeral,
            trim: true
        },
        sets: {
            type: Numeral,
            trim: true
        },
        cardio: {
            type: Boolian,
            trim:true
        },
        distance: {
            type: Numeral,
            trim: true
        }
    }]
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;