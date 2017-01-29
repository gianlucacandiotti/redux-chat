import express from  'express';
const router = express.Router();
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from 'routers/Home/routes';
import pathsToRegex from '../utils/pathsToRegex';
import Test from 'components/Test/Test';

const paths = [
  '/',
  '/login',
  '/signup',
  '/about',
];

/* GET home page. */
router.get(pathsToRegex(paths), function(req, res, next) {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    const html = renderToString(<RouterContext {...props}/>)

    res.render('pages/home', {
      html,
    });
  });
});

module.exports = {
  basePath: '/',
  router: router,
};
