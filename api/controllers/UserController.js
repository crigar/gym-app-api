/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    login: async (req, res) => {
        let user = await User.findOne({username: req.body.username} );
        if (user == undefined) return res.json({ success: false, message: 'Usuario incorrecto' });
        console.log(user);        
        let response = await AuthService.validate( user, req.body.pass );
        if (response) {
            return res.json({ success: true, message: 'Bienvenido' });
        }else{
            return res.json({ success: false, message: 'Contraseña incorrecta' });
        }
    },
    create: async (req, res) => {
        let response = {}
        let auxData = JSON.parse(JSON.stringify(req.body));
        console.log(auxData);
        console.log()
        let role = req.body.userRoles[0];
        try {
            let newUser = await User.create(req.body).fetch();
            await UserRole.create({user: newUser.id, role: role})
            response.success = true;
            response.message = 'Usuario creado';
        } catch (error) {
            response.success = false;
            response.error = error;
            console.log(error);
        }
        return res.json(response);
    },
    newClient: async (req, res) => {
        let response = await UserService.create( req.body );
        return res.json(response);
    },
    update: async (req, res) => {
        let response = await UserService.update( req.body, req.params.id );
        return res.json(response);
    },
    getUserByParam: async (req, res) => {
        let sede = req.param('sede');
        console.log(sede)
        let sedesUsers = await SedeUser.find( {sede: sede} ); 
        let users = [];
        console.log(sedesUsers)
        for (const sedeUser of sedesUsers) {
            let user = await  User.findOne({id: sedeUser.user});
            users.push(user);
        }
        return res.json(users);
    },
    getClients: async (req, res) => {
        let response = await User.find();
        return res.json(response);
    },

    setSede: async (req, res) => {
        let response = {}
        try {
            await SedeUser.destroy({sede: req.body.sede, user: req.body.client});
            await SedeUser.create({sede: req.body.sede, user: req.body.client});
            response.success = true;
            response.message = 'Usuario asignado a la sede';
        } catch (error) {
            response.success = false;
            response.error = error;
            console.log(error);
        }
        
        return res.json(response);
    },
};

