async function logoutProcess(req, res){
    try{
    req.session.destroy(err => {
        if (err) res.send(JSON.stringify(err));
        res.clearCookie('connect.sid');
        res.sendStatus(200);
        res.send("Usuario deslogueado");
    });
    }catch(err){
        console.log(err);
    }
}

module.exports = logoutProcess;