const authToken=require("./authToken")

async function isUserManager(req, res, next){
    await authToken(req,res,(err) => {
        if (err) {
            // If authToken middleware returns an error, stop further execution
            return res.status(401).json({ error: true, message: 'Unauthorized' });
        }
    });

    const owner = req.user;

    // If the user's role is not 'manager', send a 403 response
    if (owner.role !== 'manager') {
        return res.status(403).json({
            error: true,
            message: "Only managers have permission for this operation",
        });
    }

    //  user is a manager
    next();
}


module.exports = isUserManager;