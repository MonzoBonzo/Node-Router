/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 */
module.exports =
{
    /**
     * Action blueprints:
     *    `/user/create`
     */
    create: function (req, res)
    {
        console.log('create');
        res.send(200);
    },
    /**
     * Action blueprints:
     *    `/user/get`
     */
    get: function (req, res)
    {
        console.log('get');
        res.send(200);
    },

    /**
     * Action blueprints:
     *    `/user/update`
     */
    update: function (req, res)
    {
        console.log('update');
        res.send(200);
    },

    /**
     * Action blueprints:
     *    `/user/delete`
     */
    delete: function (req, res)
    {
        console.log('delete');
        res.send(200);
    }
};