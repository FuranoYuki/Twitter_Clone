const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(400).send("header authorization doesn't exist");

    const parts = authHeader.split(" ");

    if(parts.length < 2)
        return res.status(400).send("header authorization incomplete");

    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema))
        return res.status(400).send("the Bearer in the header authorization is missing");

    jwt.verify(token, process.env.SECRET_API, (error, decoded) => {
        if(error)
            return res.status(400).send("failed at verify header authorization");
        
        req.userId = decoded.id
        next();
    }); 
}