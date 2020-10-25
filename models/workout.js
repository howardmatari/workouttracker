const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter an exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter an exercise name",
      },
      duration: {
        type: Number,
        required: "Please enter a duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
}, {


  toJSON: {
      virtuals: true
  }
})


const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;