import express from  'express';
const router = express.Router();
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from 'routers/Home/routes';
import reducer from 'routers/Home/reducer';
import pathsToRegex from '../utils/pathsToRegex';
import prepComponent from  '../utils/prepComponent';

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
    } = prepComponent(<RouterContext {...props} />, reducer);

    res.render('pages/home', {
      html,
      preloadedState,
    });
  });
});

export default {
  basePath: '/',
  router: router,
};
