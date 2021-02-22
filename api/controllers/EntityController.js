/**
 * EntityController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAll: async (req, res) => {
        console.log("entro");
        let entities = await Entity.find();
        return res.json(entities);
    },

};

