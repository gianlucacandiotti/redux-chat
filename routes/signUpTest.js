import express from  'express';
import React from  'react';
import axios from 'axios';
import SignUpTest from  'pages/SignUpTest';
import reducer from  'pages/SignUpTest/reducer';
import prepComponent from  '../utils/prepComponent';

const router = express.Router();

/* GET sign up test page. */
router.get('/', (req, res, next) => {
  const {
    html,
    preloadedState,
  } = prepComponent(<SignUpTest />, reducer);

  res.render('pages/sign-up-test', {
    html,
    preloadedState,
  });
});

/* POST sign up test page. */
router.post('/', (req, res, next) => {
  console.log(req.body);

  res.json({
    message: 'Good Job!',
  });
});

export default {
  basePath: '/sign-up-test',
  router: router,
};
