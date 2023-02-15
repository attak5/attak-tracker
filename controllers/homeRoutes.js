const router = require('express').Router();
const { Workout, Exercise, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/exercise', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const exerciseData = await Exercise.findAll();

    // Serialize data so the template can read it
    const exercises = exerciseData.map((exercise) =>
      exercise.get({ plain: true })
    );
    const armData = exercises.filter((exercise) => {
      return exercise.muscle === 'arms';
    });

    const backData = exercises.filter((exercise) => {
      return exercise.muscle === 'back';
    });

    const coreData = exercises.filter((exercise) => {
      return exercise.muscle === 'core';
    });

    const chestData = exercises.filter((exercise) => {
      return exercise.muscle === 'chest';
    });
    const legsData = exercises.filter((exercise) => {
      return exercise.muscle === 'legs';
    });
    const heartData = exercises.filter((exercise) => {
      return exercise.muscle === 'heart';
    });
    console.log(armData);
    // Pass serialized data and session flag into template
    res.render('exercise', {
      armData,
      backData,
      coreData,
      chestData,
      legsData,
      heartData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/workout', withAuth, async (req, res) => {
  try {
    const workoutData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Workout,
          include: { model: Exercise, require: false },
        },
      ],
      // include: [{ model: Workout, through: Exercise, as: 'user_workout' }],
    });

    const user = workoutData.get({ plain: true });
    console.log(user.workouts[0].exercises);

    // // GET a single location
    // router.get('/:id', async (req, res) => {
    //   try {
    //     const locationData = await Location.findByPk(req.params.id, {
    //       // JOIN with travellers, using the Trip through table
    //       include: [{ model: Traveller, through: Trip, as: 'location_travellers' }]
    //     });

    //     if (!locationData) {
    //       res.status(404).json({ message: 'No location found with this id!' });
    //       return;
    //     }

    //     res.status(200).json(locationData);
    //   } catch (err) {
    //     res.status(500).json(err);
    //   }
    // });

    res.render('workouts', {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Workout,
        },
      ],
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render('homepage', {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
