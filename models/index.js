const User = require('./User');
const Workout = require('./Workout');
const Exercise = require('./Exercise');


User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
  foreignKey: 'user_id'
});

Workout.belongsToMany(Exercise, {
  through: "workout_exercise",
  foreignKey: 'workout_id',
});

Exercise.belongsToMany(Workout, {
  through: "workout_exercise",
  foreignKey: 'exercise_id'
});

module.exports = { User, Workout, Exercise };

