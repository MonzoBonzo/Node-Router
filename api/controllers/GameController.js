/**
 * GameController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 */
module.exports =
{
    /**
     * @param {Request} req representation of Request object
     * @param {Response} res representation of Response object
     *
     * Action blueprints:
     *    `/game/play`
     */
    play: function (req, res)
    {
        console.log('play');
        res.send(200);
    }
};