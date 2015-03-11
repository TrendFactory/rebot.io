/**
 * Error responses
 */

'use strict';

module.exports[500] = function internalServerError (req, res) {
  var viewFilePath = '500';
  var statusCode = 500;
  var result = {
    status: statusCode
  };

  res.status(result.status);
  res.render(viewFilePath, function (err) {
    if (err) { return res.json(result, result.status); }
    res.render(viewFilePath);
  });
};

module.exports[404] = function pageNotFound(req, res) {
  var viewFilePath = '404';
  var statusCode = 404;
  var result = {
    status: statusCode
  };

  res.status(result.status);
  res.render(viewFilePath, function (err) {
    if (err) { return res.json(result, result.status); }
    res.render(viewFilePath);
  });
};

