const express = require('express');

const app = express();

const AgentsRouter = require('./agents/routes.config');

app.use(express.json());
AgentsRouter.routesConfig(app);

app.listen(3600, () => {
  console.log('App is listening now!');
  // console.log(app.listen());
});
