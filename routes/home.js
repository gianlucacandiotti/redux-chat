import express from  'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from 'routers/Home/routes';
import reducers from 'routers/Home/reducers';
import axios from '../utils/axios';
import pathsToRegex from '../utils/pathsToRegex';
import prepComponent from  '../utils/prepComponent';
import getToken from '../utils/getToken';

const router = express.Router();

const paths = [
  '/',
  '/login',
  '/signup',
  '/about',
];

/* GET home page. */
router.get(pathsToRegex(paths), function(req, res, next) {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    const {
      html,
      preloadedState,
    } = prepComponent(<RouterContext {...props} />, reducers);

    res.render('pages/home', {
      html,
      preloadedState,
    });
  });
});

router.post('/signup', (req, res, next) => {
  console.log(req.body);
  const body = req.body;

  getToken();

  res.json({
    message: 'Good Job!',
  });
});

export default {
  basePath: '/',
  router: router,
};
