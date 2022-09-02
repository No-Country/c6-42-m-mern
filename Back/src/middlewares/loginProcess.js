const userController = require("../controllers/user");



async function loginProcess(req, res) {
    try {
        const loginUser = await userController.findOne(req.body.username);

        // Send login info to FrontEnd.
        res.send({
            username: loginUser[0].username,
            name: loginUser[0].firstName,
            lastName: loginUser[0].lastName,
            dni: loginUser[0].dni,
            email: loginUser[0].email,
            address: loginUser[0].address.street,
            reservations: loginUser[0].reservations || null
        });
    } catch (error) {

        res.json(error.message);
    }
}

module.exports = loginProcess;