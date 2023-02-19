# attak-tracker

## Overview

Home page - (not logged in)

![Home](AttakTracker-logos.jpeg)

Home page - (logged in)

![LoggedInHome]()

Dashboard page - without workouts(accesible when logged in)

![Dashboard]()

Dashboard page - with workouts(accesible when logged in)

![Posts]()

Login page

![Login]()

Signup page

![Signup]()

Createworkout page(accesible when logged in)

![workout]()

## Description

Real-world full stack application

### Technical Acceptance
* Application uses a Node.js and Express.js back end and uses both GET and POST routes for retrieving and adding new data.
* Application has a folder structure that meets the MVC paradigm and uses Handlebars.js as the template engine.
* Application is backed by a MySQL database with a Sequelize ORM and protects API keys and sensitive information with environment variables.
* Application includes user authentication (express-session and cookies).

View you live site at [`http://localhost:3000`](http://localhost:3000)

## The attack tracker aims to achieve the following:

GIVEN a fittness tracker app

- [x] WHEN I visit the site for the first time
- [x] THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- [x] WHEN I click on the homepage option
- [x] THEN I am taken to the homepage
- [x] WHEN I click on any other links in the navigation
- [x] THEN I am prompted to either sign up or sign in
- [x] WHEN I choose to sign up
- [x] THEN I am prompted to create a username and password
- [x] WHEN I click on the sign-up button
- [x] THEN my user credentials are saved and I am logged into the site
- [x] WHEN I revisit the site at a later time and choose to sign in
- [x] THEN I am prompted to enter my username and password
- [x] WHEN I am signed in to the site
- [x] THEN I see navigation links for the homepage, the dashboard, and the option to log out
- [x] WHEN I click on the homepage option in the navigation
- [x] WHEN I enter a workout and click on the submit button while signed in
- [x] THEN the workout is saved and the exercises is updated to display the workout
- [x] WHEN I click on the dashboard option in the navigation
- [x] THEN I am taken to the dashboard and presented with any workout I have already created and the option to add a new blog post
- [x] WHEN I click on the button to add a new workout
- [x] THEN I am prompted to enter both a exercises and muscle for my workout
- [x] WHEN I click on the button to create a new workout
- [x] THEN the muscle and exercises of my workout are saved and I am taken back to an updated dashboard with my new workouts
- [x] WHEN I click on one of my existing workouts in the dashboard
- [x] THEN I am able to delete and am taken back to an updated dashboard
- [x] WHEN I click on the logout option in the navigation
- [x] THEN I am signed out of the site
- [x] WHEN I am idle on the site for more than a set time
- [x] THEN I am able to view workouts but I am prompted to log in again before I can add or delete workouts
- [x] WHEN I enter a workout and click on the submit button while signed in
- [x] THEN the workout is saved and the exercises is updated to display the workout
- [x] WHEN I click on the dashboard option in the navigation
- [x] THEN I am taken to the dashboard and presented with any workout I have already created and the option to add a new blog post
- [x] WHEN I click on the button to add a new workout
- [x] THEN I am prompted to enter both a exercises and muscle for my workout
- [x] WHEN I click on the button to create a new workout
- [x] THEN the muscle and exercises of my workout are saved and I am taken back to an updated dashboard with my new workouts
- [x] WHEN I click on one of my existing workouts in the dashboard
- [x] THEN I am able to delete and am taken back to an updated dashboard
- [x] WHEN I click on the logout option in the navigation
- [x] THEN I am signed out of the site
- [x] WHEN I am idle on the site for more than a set time
- [x] THEN I am able to view workouts but I am prompted to log in again before I can add or delete workouts
- [x] WHEN I enter a workout and click on the submit button while signed in
- [x] THEN the workout is saved and the exercises is updated to display the workout
- [x] WHEN I click on the dashboard option in the navigation
- [x] THEN I am taken to the dashboard and presented with any workout I have already created and the option to add a new blog post
- [x] WHEN I click on the button to add a new workout
- [x] THEN I am prompted to enter both a exercises and muscle for my workout
- [x] WHEN I click on the button to create a new workout
- [x] THEN the muscle and exercises of my workout are saved and I am taken back to an updated dashboard with my new workouts
- [x] WHEN I click on one of my existing workouts in the dashboard
- [x] THEN I am able to delete and am taken back to an updated dashboard
- [x] WHEN I click on the logout option in the navigation
- [x] THEN I am signed out of the site
- [x] WHEN I am idle on the site for more than a set time
- [x] THEN I am able to view workouts but I am prompted to log in again before I can add or delete workouts

## Heroku deployment

- Login to your heroku account (signup if you are a new user)
- Create a new attack tracker project
- Create a MySQL JAWSDB in Heroku and copy the URL to _JAWSDB_URL_ environment variables (This ensures MySQL is accessed online rather than the localhost version of MySQL that is only accessible locally)
- Deploy the project from your editor to be accessed live when a user visits the URL given. (Heroku charges deployment)
- _Check [`Heroku`](https://devcenter.heroku.com/categories/reference) documentation for further guide_
