/**
 * EntityController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async (req, res) => {
        let response = {}
        console.log(req.body.name)
        try {
            await City.create(req.body);
        
            response.success = true;
            response.message = 'Ciudad creada';
        } catch (error) {
            response.success = false;
            response.error = error;
            console.log(error);
        }
        return res.json(response);
    },
    createSede: async (req, res) => {
        let response = {}
        console.log(req.body.name)
        try {
            await Sede.create(req.body);
        
            response.success = true;
            response.message = 'Sede creada';
        } catch (error) {
            response.success = false;
            response.error = error;
            console.log(error);
        }
        return res.json(response);
    },
    index: async (req, res) => {
        console.log("entro");
        let cities = await City.find();
        return res.json(cities);
    },

    getSedes: async (req, res) => {
        console.log("entro");
        let sedes = await Sede.find({city: req.params.city});
        return res.json(sedes);
    },

};

