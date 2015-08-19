var Express = require('express');
var bodyParser = require('body-parser');
var service = Express();
var Router = require('./libs/routing/Router.js');

service.disable('x-powered-by');
service.use(bodyParser());
service.use(bodyParser.json({ type:'application/vnd.api+json'}));
service.use(bodyParser.urlencoded({type:'application/x-www-form-urlencoded'}));
  
var router = new Router('/../../api/controllers/', service);
router.addExpressRoutes();
 
service.listen(8080);