const AgentsController = require('./controllers/agents.controllers');

exports.routesConfig = function (app) {
  app.post('/agents', [AgentsController.insert]);
};
