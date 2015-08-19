/**
 * Responsible for automatically routing
 * Controller actions to 'Express' routes.
 *
 * 'Automated Controller Express Router'
 *
 * @author Monique.
 * @since 12/05/2014
 */

/**
 *
 * @param {string} path
 * @param {Express} server
 * @return {void}
 */
function Router(path, server)
{
    this.path = path;
    this.server = server;

    this.class = null;
    this.file = null;

    this.action =  '/{controller}/{action}';
}

/**
 * @return {void}
 */
Router.prototype.addExpressRoutes = function()
{
    var fs = require('fs');
    var files = fs.readdirSync(__dirname + this.path);

    for (var i in files)
    {
        this.file = files[i];
        this.class = require(__dirname + this.path + files[i]);
        Object.keys(this.class).forEach(this.setRoute,this);
    }
};

/**
 * @param {string} key
 * @return {void}
 */
Router.prototype.setRoute = function(key)
{
    var index = this.file.substr(0,this.file.lastIndexOf("Controller"));
    this.action = this.action.replace("{controller}", index).replace("{action}", key).toLowerCase();
    this.server.all(this.action, this.class[key]);
    this.action =  '/{controller}/{action}';
};

// export the class
module.exports = Router;