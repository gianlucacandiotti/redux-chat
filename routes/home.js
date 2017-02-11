import express from  'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from 'routers/Home/routes';
import reducers from 'routers/Home/reducers';
import axios from '../utils/axios';
import pathsToRegex from '../utils/pathsToRegex';
import prepComponent from  '../utils/prepComponent';
import fetch from '../utils/fetch';

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
  const body = req.body;

  fetch.post('api/users', body)
    .then((response) => {
      res.json({
        message: response.data,
      });
    })
    .catch((error) => {
      if (error.response) {
        res.json({
          data: error.response.data,
          state: error.response.status,
        })
      } else {
        res.json({
          error: error.message,
        })
      }
    });
});

export default {
  basePath: '/',
  router: router,
};
