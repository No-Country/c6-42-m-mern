require("dotenv").config({ path: "../../env" });

async function registerProcess(req, res) {
    try {

        res.redirect(process.env.FRONT_URI);

    } catch (err) {
        console.log(err);
    }
}

module.exports = registerProcess;